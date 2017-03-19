import json, urllib, urllib2, ssl, sys, StringIO, gzip
import pprint as pp
import common


class Connection:
	'''
	Object for connection to EMS API
	'''

	def __init__(self, user=None, pwd=None, uri_root=None, proxies=None, ignoreSslErrors=False, verbose=False):
		self.__user 		= user
		self.__pwd  		= pwd
		self.__uri_root		= uri_root
		self.__proxies      = proxies
		self.__ignoreSslErrors = ignoreSslErrors
		self.__ntrials      = 0
		self.token 			= None
		self.token_type 	= None

		if (user is not None) and (pwd is not None):
			self.connect(user, pwd, uri_root, proxies, verbose)
		else:
			print("An empty connection is instantiated because credentials are not provided.\n")

	def connect(self, user, pwd, uri_root=None, proxies=None, verbose=False):
		'''
		Connect to EMS system using given credentials.
		'''
		if proxies is not None:
			proxy_handler = urllib2.ProxyHandler(proxies)
			opener = urllib2.build_opener(proxy_handler, urllib2.HTTPHandler)
			urllib2.install_opener(opener)	

		headers = {'Content-Type':'application/x-www-form-urlencoded'}
		data   = {'grant_type': 'password', 'username': user, 'password': pwd}

		resp_h, content = self.request(
			rtype="POST", uri_root=uri_root, uri_keys=('sys','auth'), data=data, 
			headers = headers, proxies=proxies, verbose=verbose)

		# Add error handling --

		# Get the token
		self.token      = content['access_token']
		self.token_type = content['token_type']
		return resp_h, content


	def reconnect(self, verbose = False):

		if self.__ntrials >= 3:
			sys.exit("Stop trying to reconnect EMS API after %d trials" % self.__ntrials)

		self.__ntrials +=1
		return self.connect(self.__user, self.__pwd, self.__uri_root, self.__proxies, verbose)


	def request(self,
			rtype="GET", uri=None, uri_root=None, uri_keys=None, uri_args=None, 
			headers=None, body=None, data=None, jsondata=None, proxies=None, 
			verbose=False
		):

		# If no customer headers given, use the token header
		if headers is None: 
			headers = {'Authorization': ' '.join([self.token_type, self.token]), 'Accept-Encoding': 'gzip'}

		# Figure out the URI root to use.
		# If we were not given a root explicitly, check to see if a value
		# was passed into the constructor. If no value was passed into the
		# constructor, use the default root.
		if uri_root is None:
			if self.__uri_root is not None:
				uri_root = self.__uri_root
			else:
				uri_root = common.uri_root

		# If uri_keys are given, find the uri from the uris dictionary
		if uri_keys is not None:
			uri    = uri_root + common.uris[uri_keys[0]][uri_keys[1]]

		# Provide the input to the request
		if uri_args is not None:
			uri    = uri % uri_args

		# Append query to the uri if body is given
		if body is not None:
			uri    = uri + "?" + urllib.urlencode(body)

		# Encode the data
		if data is not None:
			data 	= urllib.urlencode(data)

		if jsondata is not None:
			headers['Content-Type'] = 'application/json'
			data = json.dumps(jsondata)

		req = urllib2.Request(uri, data=data, headers=headers)
		try:
			resp = self.__send_request(req)
			statcode = resp.getcode()
			if statcode!=200:
				print("Http status code: %d" % statcode)
				verbose = True
		except:
			(eType, eValue, eTrace) = sys.exc_info()
			if(eType is ssl.CertificateError):
				# Rethrow the exception, since further requests are going to break anyway.
				print("A certificate verification error occured for the request to '%s'. Certificate verification is required by default, but can be disabled by using the ignoreSslErrors argument for the Connection constructor." % uri )
				raise

			print("Trying to reconnect the EMS API.")
			self.reconnect()
			print("Done.")
			resp = self.__send_request(req)
		resp_h   = resp.info().headers

		# If the response is compressed, decompress it.
		if resp.info().get('Content-Encoding') == 'gzip':
			buffer = StringIO.StringIO(resp.read())
			file = gzip.GzipFile(fileobj=buffer)
			content = json.loads(file.read())
		else:
			content = json.loads(resp.read())
			
		if verbose:
			print("URL: %s" % resp.geturl())
			pp.pprint(resp_h)
			pp.pprint(content)

		return resp_h, content

	def __send_request(self, req):
		"""Sends the request and returns the response, optionally ignoring ssl errors."""

		# Normally you do NOT want to ignore SSL errors, but this is
		# sometimes necessary on beta API endpoints wihtout a proper cert.
		if self.__ignoreSslErrors:
			return urllib2.urlopen(req, context=ssl._create_unverified_context())
		else:
			return urllib2.urlopen(req)


def print_resp(resp):
	
	for r in resp:
		pp.pprint(r)

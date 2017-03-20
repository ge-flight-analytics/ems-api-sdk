from asset import Asset


class FlightPhase(Asset):
	'''Retrieve the data of defined flight phases.'''

	def __init__(self, conn, ems_id=7):

		Asset.__init__(self, conn, "FlightPhase")
		self._ems_id = ems_id
		self.update_list()


	def update_list(self):

		Asset.update_list(self, uri_keys=('flt_phase','list'), uri_args=self._ems_id)
		self._rename_datacol('description', 'name')


	def get_id(self, name = None):

		a = self.search('name', name)['id'].tolist()
		return a if len(a) > 1 else a[0]


	def get_name(self, id_val = None):

		a = self.search('id', id_val, searchtype="match")['name'].tolist()
		return a if len(a) > 1 else a[0]
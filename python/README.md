# Python - EMS API Tools and Documentation
## emsPy

A Python client for the EMS API.

Dependencies: 
* numpy 1.11
* pandas 0.18
* networkx 1.11

### Connecting to the EMS API

A username and password is always required to connect to the API:
```python
import emspy
connection = emspy.Connection("username", "password")
```

Bu default, the API endpoint ***https://fas.efoqa.com/api*** will be used, but an optional argument can be used to set a different one:
```python
import emspy
connection = emspy.Connection("username", "password", uri_root="https://myapiendpoint/api" )
```

An optional client-side proxy setting can also be passed to the EMS connection object. This will allow you to access the API through networks which require a proxy server to reach the internet:
```python
proxies = {
    'http': 'http://{prxy_usrname}:{prxy_password}@{proxy_server_address}:{port}',
    'https': 'https://{prxy_usrname}:{prxy_password}@{proxy_server_address}:{port}'
}

import emspy
connection = emspy.Connection("username","password", proxies=proxies)
```

In rare cases, the API endpoint might not have a valid SSL certificate (typically for testing purposes). An optional boolean may be specified to bypass SSL validation:
```python
import emspy
connection = emspy.Connection("username", "password", uri_root="https://myapiendpoint/api", ignoreSslErrors=True)
```

### Flight Querying
#### Create a query
```python
query = emspy.query.FltQuery(connection, ems_name = 'ems9')
```

The ems_name argument indicates which backing EMS system to query. The EMS API can connect to multiple EMS instances, so most API requests require a system to be specified. Internally, emspy uses this name to determine the integer system id.

#### EMS Database Setup

The EMS system uses a tree structure for organizing data fields. This field tree manages mappings between names and field IDs as well as the field groups of fields. In order to send a query via EMS API, the emsPy package will automatically generate a data file for the static, frequently used part of the field tree and load it by default. This bare field tree includes fields of the following field groups:

* Flight Information (sub-field groups Processing and Profile 16 Extra Data were excluded)
* Aircraft Information
* Flight Review
* Data Information
* Navigation Information
* Weather Information

In case you want to query with fields that are not included in this default, stripped-down data tree, you'll have to add the field group(s) in which your field(s) exist in and update your data field tree. For example, if you want to add a field group such as Profiles --> Standard Library Profiles --> Block-Cost Model --> P301: Block-Cost Model Planned Fuel Setup and Tests --> Measured Items --> Ground Operations (before takeoff), the execution of the following method will add the fields and their related subtree structure to the basic tree structure. You can use either the full name or just a fraction of consecutive keywords for each field group. The keyword is case-insensitive.

**Caution**: the process of adding a subtree usually requires a very large number of recursive RESTful API calls which take quite a long time. Please try to specify the subtree at as low a level as possible to avoid a long processing time.

```python
query.update_datatree("profiles", "standard", "block-cost", "p301", 
                      "measured", "ground operations (before takeoff)")
```
You can save your data tree for later use: 
```python
## This will replace the default data tree file with the new one and save 
## at root/data.
query.save_datatree()
```
If you saved the data tree with the default file location, the saved data tree will be automatically reloaded when you instantiate a new Query object. 

In case you want to save the data tree locally, you can call the `save_datatree` method and specify your own choice of file name with a proper path. For example, the following will save the data tree to your working directory.
```python
query.save_datatree('my_datatree.pkl')
```
If you saved the data tree in a local file, you will have to explicitly load the file to use the saved datatree.
```python
query.load_datatree('my_datatree.pkl')
```

#### Select
You can select the EMS data fields using keywords from their names as long as the keyword searches a field. For example, the select method finds the field "Flight Date (Exact)" by using one of three different search approaches:
- Search by a consecutive substring. The method returns a match with the shortest field name if there are multiple matches.
    - Ex) "flight date"
- Search by exact name. 
    - Ex) "flight date (exact)"
- Field name keyword along with multiple keywords for the names of upstream field groups. 
    - Ex) ("flight info", "date (exact)")

The keyword is case-insensitive.

```python
query.select("flight date", 
             "customer id", 
             "takeoff valid", 
             "takeoff airport iata code")
```

You need to make a separate select call if you want to add a field with aggregation applied:


```python
query.select("P301: duration from first indication of engines running to start", 
             aggregate="avg")
```

#### Group by & Order by
Similarly, you can pass the grouping and ordering condition:


```python
query.group_by("flight date",
               "customer id",
               "takeoff valid",
               "takeoff airport iata code")

query.order_by("flight date")
# the ascending order is default. You can pass a descending order using the optional input:
#     query.order_by("flight date", order="desc")
```

#### Filtering
Currently the following conditional operators are supported with respect to the data field types:
- Number: "==", "!=", "<", "<=", ">", ">="
- Discrete: "==", "!=", "in", "not in" (Filtering condition made with value, not discrete integer key)
- Boolean: "==", "!="
- String: "==", "!=", "in", "not in"
- Datetime: ">=", "<"

The Following is an example:

```python
query.filter("'flight date' >= '2016-1-1'")
query.filter("'takeoff valid' == True")
# Discrete field filtering is pretty much the same as string filtering.
query.filter("'customer id' in ['CQH','EVA']") 
query.filter("'takeoff airport iata code' == 'KUL'")
```

The current filtering method has the following limitation:
- Single filtering condition for each filter method call
- Filtering conditions are combined only by "AND" relationship
- The field keyword must be on the left-hand side of a conditional expression
- No support of NULL value filtering, which is being worked on now
- The datetime condition will only work with the ISO8601 format

#### ETC.
You can pass additional attributes supported by EMS query:


```python
# Returns only the distinct rows. Turned on by default
query.distinct(True)

# If you want to get the top N rows of the output data in response to the query, 
query.get_top(5000)

# This is optional. If you don't set this value, all output data will be returned.
```

#### Viewing a JSON Translation of Your Query
You can check on the resulting JSON string of the translated query using the following method calls.

```python
# Returns JSON string
# print query.in_json()

# View in Python's native Dictionary form 
from pprint import pprint # This gives you a prettier print

print("\n")
pprint(query.in_dict())
```

    
    
    {'distinct': True,
     'filter': {'args': [{'type': 'filter',
                          'value': {'args': [{'type': 'field',
                                              'value': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-core][base-field][flight.exact-date]]]'},
                                             {'type': 'constant',
                                              'value': '2016-1-1'},
                                             {'type': 'constant',
                                              'value': 'Utc'}],
                                    'operator': 'dateTimeOnAfter'}},
                         {'type': 'filter',
                          'value': {'args': [{'type': 'field',
                                              'value': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-core][base-field][flight.exist-takeoff]]]'}],
                                    'operator': 'isTrue'}},
                         {'type': 'filter',
                          'value': {'args': [{'type': 'field',
                                              'value': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-fcs][base-field][fdw-flight-extra.customer]]]'},
                                             {'type': 'constant',
                                              'value': 18},
                                             {'type': 'constant',
                                              'value': 11}],
                                    'operator': 'in'}},
                         {'type': 'filter',
                          'value': {'args': [{'type': 'field',
                                              'value': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[[nav][type-link][airport-takeoff * foqa-flights]]][[nav][base-field][nav-airport.iata-code]]]'},
                                             {'type': 'constant',
                                              'value': 'KUL'}],
                                    'operator': 'equal'}}],
                'operator': 'and'},
     'format': 'display',
     'groupBy': [{'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-core][base-field][flight.exact-date]]]'},
                 {'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-fcs][base-field][fdw-flight-extra.customer]]]'},
                 {'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-core][base-field][flight.exist-takeoff]]]'},
                 {'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[[nav][type-link][airport-takeoff * foqa-flights]]][[nav][base-field][nav-airport.iata-code]]]'}],
     'orderBy': [{'aggregate': 'none',
                  'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-core][base-field][flight.exact-date]]]',
                  'order': 'asc'}],
     'select': [{'aggregate': 'none',
                 'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-core][base-field][flight.exact-date]]]'},
                {'aggregate': 'none',
                 'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-fcs][base-field][fdw-flight-extra.customer]]]'},
                {'aggregate': 'none',
                 'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-core][base-field][flight.exist-takeoff]]]'},
                {'aggregate': 'none',
                 'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[[nav][type-link][airport-takeoff * foqa-flights]]][[nav][base-field][nav-airport.iata-code]]]'},
                {'aggregate': 'avg',
                 'fieldId': u'[-hub-][field][[[ems-core][entity-type][foqa-flights]][[ems-apm][flight-field][msmt:profile-cbaa5341ca674914a6ceccd6f498bffc:msmt-0d7fe63d6863451a9c663a09fd780985]]]'}],
     'top': 5000}
    

#### Running a  Query and Retrieving Data
You can finally send the query to the EMS system and get the data. The output data is returned as a Pandas' DataFrame object.

```python
df = query.run()

# This will return your data in Pandas dataframe format
```

EMS API supports two different query executions: synchronous and asynchronous queries. The synchronous query has a data size limit for the output data, which is 25000 rows. On the other hand, the asyncchronous query is able to handle large output data by letting you send repeated requests for mini batches of the large output data.

The `run()` method takes care of the repeated async request for a query whose returning data is expected to be large.

The batch data size for the async request has a pre-configured number of rows by default. If you want to change this size,
```python
# Set the batch size as 20,000 rows per request
df = query.run(n_row = 20000)
``` 

### Querying Time-Series Data
You can query data of time-series parameters with respect to individual flight records. Below is a simple example that sends a flight query first in order to retrieve a set of flights and then sends queries to get some of the time-series parameters for each of these flights.

```python
# Flight query with an APM profile. It will return data for 10 flights
fq = FltQuery(c, "ems9")

fq.load_datatree("stat_taxi_datatree.pkl")

fq.select(
  "customer id", "flight record", "airframe", "flight date (exact)",
    "takeoff airport code", "takeoff airport icao code", "takeoff runway id",
    "takeoff airport longitude", "takeoff airport latitude",
    "p185: processed date", "p185: oooi pushback hour gmt",
    "p185: oooi pushback hour solar local",
    "p185: total fuel burned from first indication of engines running to start of takeoff (kg)")
fq.order_by("flight record", order='desc')
fq.get_top(10)
fq.filter("'p185: processing state' == 'Succeeded'")
flt = fq.run()

# === Run time series query for flights ===

tsq = TSeriesQuery(c, "ems9")
tsq.select(
  "baro-corrected altitude", 
  "airspeed (calibrated; 1 or only)", 
  "ground speed (best avail)",
    "egt (left inbd eng)", 
    "egt (right inbd eng)", 
    "N1 (left inbd eng)", 
    "N1 (right inbd eng)")

# Run querying multiple flights at once. Start time = 0, end time = 15 mins (900 secs) for all flights. 
# A better use case is that those start/end times are fed by timepoint measurements of your APM profile.
res_dat = tsq.multi_run(flt, start = [0]*flt.shape[0], end = [15*60]*flt.shape[0])
```

The inputs to function `multi_run(...)` are:
* flt  : a vector of Flight Records or flight data in Pandas DataFrame format. The dataframe should have a column of flight records with its column name "Flight Record"
* start: a list-like object defining the starting times (secs) of the timepoints for individual flights. The vector length must be the same as the number of flight records
* end  : a list-like object defining the end times (secs) of the timepoints for individual flights. The vector length must be the same as the number of flight records
* timestep: a list-like object defining the size of timesteps in seconds for individual flights. Default is set 1 second. If you set "None", it will use the parameters' own default timesteps. The vector length must be the same as the number of flight records

The output will be Python dictionary object which contains the following data:
* flt_data : Dictionary. Copy of the flight data for each flight
* ts_data  : Pandas DataFrame. the time series data for each flight

In case you just want to query for a single flight, `run(...)` function will be better suited. Below is an example of time-series querying for a single flight.

```python
res_dat = tsq.run(1901112, start=0, end=900)
```
This function will return a Pandas DataFrame that contains timepoints from 0 to 900 secs and corresponding values for selected parameters. You can also pass a timestep as an optional argument. Default timestep is set 1.0 sec.

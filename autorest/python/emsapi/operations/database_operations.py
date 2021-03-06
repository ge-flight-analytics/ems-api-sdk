# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.pipeline import ClientRawResponse
from msrest.exceptions import HttpOperationError

from .. import models


class DatabaseOperations(object):
    """DatabaseOperations operations.

    :param client: Client for service requests.
    :param config: Configuration of service client.
    :param serializer: An object model serializer.
    :param deserializer: An object model deserializer.
    """

    models = models

    def __init__(self, client, config, serializer, deserializer):

        self._client = client
        self._serialize = serializer
        self._deserialize = deserializer

        self.config = config

    def get_database_group(
            self, ems_system_id, group_id=None, custom_headers=None, raw=False, **operation_config):
        """Returns a database group with a matching ID containing only its
        immediate children in a hierarchical tree
        used to organize databases.

        Each EMS system has its own configured set of databases that are
        available for querying, such as flights,
        downloads and events. Databases are organized using database groups in
        a tree structure since EMS
        systems might expose a large number of databases. This API allows you
        to see one level of the tree
        structure.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param group_id: The unique identifier of the EMS database group whose
         contents to return.
         If not specified, the contents of the root group are returned.
        :type group_id: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.get_database_group.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        if group_id is not None:
            query_parameters['groupId'] = self._serialize.query("group_id", group_id, 'str')

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct and send request
        request = self._client.get(url, query_parameters)
        response = self._client.send(request, header_parameters, stream=False, **operation_config)

        if response.status_code not in [200, 401, 404, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('AdiEmsWebApiV2DtoSchemaDatabaseGroup', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 404:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    get_database_group.metadata = {'url': '/v2/ems-systems/{emsSystemId}/database-groups'}

    def get_field_group(
            self, ems_system_id, database_id, group_id=None, custom_headers=None, raw=False, **operation_config):
        """Returns a field group with a matching ID containing only its immediate
        children in a hierarchical tree used
        to organize fields.

        Fields are organized using field groups in a tree structure since EMS
        systems and databases might expose
        a large number of fields. This API allows you to see one level of the
        tree structure. This API returns only
        a minimal amount of information about the fields returned. To get
        additional details for an individual,
        field, see the "field" resource below.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param database_id: The unique identifier of the EMS database
         containing a field group to return.
        :type database_id: str
        :param group_id: The unique identifier of a field group whose contents
         to return. If not
         specified, the contents of the root group are returned.
        :type group_id: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.get_field_group.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int'),
            'databaseId': self._serialize.url("database_id", database_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        if group_id is not None:
            query_parameters['groupId'] = self._serialize.query("group_id", group_id, 'str')

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct and send request
        request = self._client.get(url, query_parameters)
        response = self._client.send(request, header_parameters, stream=False, **operation_config)

        if response.status_code not in [200, 401, 404, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('AdiEmsWebApiV2DtoSchemaFieldGroup', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 404:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    get_field_group.metadata = {'url': '/v2/ems-systems/{emsSystemId}/databases/{databaseId}/field-groups'}

    def get_field(
            self, ems_system_id, database_id, field_id, custom_headers=None, raw=False, **operation_config):
        """Returns information about a database field matching the specified ID.

        Fields are elements in an EMS system that can be queried for results.
        For more details on how to query for
        results, see the "query" resource below.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param database_id: The unique identifier of the EMS database
         containing a field to return.
        :type database_id: str
        :param field_id: The unique identifier of the field whose information
         to return.
        :type field_id: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.get_field.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int'),
            'databaseId': self._serialize.url("database_id", database_id, 'str'),
            'fieldId': self._serialize.url("field_id", field_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct and send request
        request = self._client.get(url, query_parameters)
        response = self._client.send(request, header_parameters, stream=False, **operation_config)

        if response.status_code not in [200, 401, 404, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('AdiEmsWebApiV2DtoSchemaField', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 404:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    get_field.metadata = {'url': '/v2/ems-systems/{emsSystemId}/databases/{databaseId}/fields/{fieldId}'}

    def get_fields(
            self, ems_system_id, database_id, search=None, field_group_id=None, include_profiles=None, max_results=None, custom_headers=None, raw=False, **operation_config):
        """Returns all the fields matching the specified search options.

        This API will return fields matching your search options. If no fields
        are found, an empty list is returned.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param database_id: The unique identifier of the database containing
         fields to return.
        :type database_id: str
        :param search: An optional field name search string used to match
         fields to return.
        :type search: str
        :param field_group_id: The optional parent field group ID whose
         contents to search.
        :type field_group_id: str
        :param include_profiles: An optional setting to indicate whether to
         search fields in profiles. By
         default, this is false since including profile fields will
         significantly increase search time.
        :type include_profiles: bool
        :param max_results: The maximum number of fields to return. This
         defaults to 200 fields.
         If this is set to 0 all the results will be returned.
        :type max_results: int
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.get_fields.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int'),
            'databaseId': self._serialize.url("database_id", database_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}
        if search is not None:
            query_parameters['search'] = self._serialize.query("search", search, 'str')
        if field_group_id is not None:
            query_parameters['fieldGroupId'] = self._serialize.query("field_group_id", field_group_id, 'str')
        if include_profiles is not None:
            query_parameters['includeProfiles'] = self._serialize.query("include_profiles", include_profiles, 'bool')
        if max_results is not None:
            query_parameters['maxResults'] = self._serialize.query("max_results", max_results, 'int')

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct and send request
        request = self._client.get(url, query_parameters)
        response = self._client.send(request, header_parameters, stream=False, **operation_config)

        if response.status_code not in [200, 401, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('[AdiEmsWebApiV2DtoSchemaField]', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    get_fields.metadata = {'url': '/v2/ems-systems/{emsSystemId}/databases/{databaseId}/fields'}

    def get_query_results(
            self, ems_system_id, database_id, query, custom_headers=None, raw=False, **operation_config):
        """Queries a database for information, composing the query with
        information provided in the specified
        query structure.

        <p>The advantage of this query route over async-query is its
        simplicity. This route executes a query and
        returns the results in a single API call. Due to memory and network
        resource limitations, this route cannot
        be used to fetch large result sets. The route limits the maximum number
        of result rows that can be returned
        for a single query. If you do not specify a "top" limit to the results
        and the number of rows queried
        exceeds the maximum allowed, the partial result boolean flag included
        in the response will be set to true.
        If you need to access larger result sets, use the async-query route
        instead.</p>
        <p>Queries can contain reference to one or more fields and can include
        more complex querying operations
        including: filtering, grouping, and sorting (by value). These
        operations are specified by the query model
        you provide the API.</p>.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param database_id: The unique identifier of the EMS database to
         query.
        :type database_id: str
        :param query: The information used to construct a query for which
         results are returned.
        :type query: ~emsapi.models.AdiEmsWebApiV2DtoSchemaQuery
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.get_query_results.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int'),
            'databaseId': self._serialize.url("database_id", database_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct body
        body_content = self._serialize.body(query, 'AdiEmsWebApiV2DtoSchemaQuery')

        # Construct and send request
        request = self._client.post(url, query_parameters)
        response = self._client.send(
            request, header_parameters, body_content, stream=False, **operation_config)

        if response.status_code not in [200, 400, 401, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('AdiEmsWebApiV2DtoSchemaQueryResult', response)
        if response.status_code == 400:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    get_query_results.metadata = {'url': '/v2/ems-systems/{emsSystemId}/databases/{databaseId}/query'}

    def start_async_query(
            self, ems_system_id, database_id, query, custom_headers=None, raw=False, **operation_config):
        """Creates a query on a database using the provided query structure and
        returns an ID that can be used to
        fetch result data through other async-query routes.

        <p>The advantage of the async-query routes over the basic query route
        is their ability to return very large
        result sets, split across many API calls. For queries with small result
        sets, you may prefer to use the
        basic query route, as it provides the simplicity of executing a query
        and returning the results in one call.
        </p>
        <p>Use the <b>GET
        v2/ems/{emsSystemId}/databases/{databaseId}/async-query/{queryId}/read/{start}/{end}</b>
        route to read rows from the async-query result set.</p>
        <p>Use the <b>DELETE
        v2/ems/{emsSystemId}/databases/{databaseId}/async-query/{queryId}</b>
        route to stop
        an async query.</p>
        <p>Queries can contain reference to one or more fields and can include
        more complex querying operations
        including: filtering, grouping, and sorting (by value). These
        operations are specified by the query model
        you provide the API.</p>.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param database_id: The unique identifier of the EMS database to
         query.
        :type database_id: str
        :param query: The information used to construct a query.
        :type query: ~emsapi.models.AdiEmsWebApiV2DtoSchemaQuery
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.start_async_query.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int'),
            'databaseId': self._serialize.url("database_id", database_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct body
        body_content = self._serialize.body(query, 'AdiEmsWebApiV2DtoSchemaQuery')

        # Construct and send request
        request = self._client.post(url, query_parameters)
        response = self._client.send(
            request, header_parameters, body_content, stream=False, **operation_config)

        if response.status_code not in [200, 400, 401, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('AdiEmsWebApiV2DtoSchemaAsyncQueryInfo', response)
        if response.status_code == 400:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    start_async_query.metadata = {'url': '/v2/ems-systems/{emsSystemId}/databases/{databaseId}/async-query'}

    def read_async_query(
            self, ems_system_id, database_id, query_id, start, end, custom_headers=None, raw=False, **operation_config):
        """Returns rows between (inclusive) the start and end indexes from the
        async query with the given ID.

        You can choose the number of rows returned by specifying an inclusive
        range of rows with the start and end
        indexes. However, this route also limits the maximum number of result
        rows that can be reasonably returned
        in a single call. If more values need to be read, simply make multiple
        calls to this route and use
        the "hasMoreRows" flag to determine if the returned rows are the last
        rows in the query's result set.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param database_id: The unique identifier of the EMS database to
         query.
        :type database_id: str
        :param query_id: The unique identifier of the query created by the
         API.
        :type query_id: str
        :param start: The zero-based index of the first row to return.
        :type start: int
        :param end: The zero-based index of the last row to return.
        :type end: int
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.read_async_query.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int'),
            'databaseId': self._serialize.url("database_id", database_id, 'str'),
            'queryId': self._serialize.url("query_id", query_id, 'str'),
            'start': self._serialize.url("start", start, 'int'),
            'end': self._serialize.url("end", end, 'int')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct and send request
        request = self._client.get(url, query_parameters)
        response = self._client.send(request, header_parameters, stream=False, **operation_config)

        if response.status_code not in [200, 400, 401, 404, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 200:
            deserialized = self._deserialize('AdiEmsWebApiV2DtoSchemaAsyncQueryData', response)
        if response.status_code == 400:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 404:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    read_async_query.metadata = {'url': '/v2/ems-systems/{emsSystemId}/databases/{databaseId}/async-query/{queryId}/read/{start}/{end}'}

    def stop_async_query(
            self, ems_system_id, database_id, query_id, custom_headers=None, raw=False, **operation_config):
        """Stops the async query with the given ID.

        :param ems_system_id: The unique identifier of the system containing
         the EMS data.
        :type ems_system_id: int
        :param database_id: The unique identifier of the EMS database to
         query.
        :type database_id: str
        :param query_id: The unique identifier of the query created by the
         API.
        :type query_id: str
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :return: object or ClientRawResponse if raw=true
        :rtype: object or ~msrest.pipeline.ClientRawResponse
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = self.stop_async_query.metadata['url']
        path_format_arguments = {
            'emsSystemId': self._serialize.url("ems_system_id", ems_system_id, 'int'),
            'databaseId': self._serialize.url("database_id", database_id, 'str'),
            'queryId': self._serialize.url("query_id", query_id, 'str')
        }
        url = self._client.format_url(url, **path_format_arguments)

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct and send request
        request = self._client.delete(url, query_parameters)
        response = self._client.send(request, header_parameters, stream=False, **operation_config)

        if response.status_code not in [204, 401, 404, 503]:
            raise HttpOperationError(self._deserialize, response)

        deserialized = None

        if response.status_code == 204:
            deserialized = self._deserialize('object', response)
        if response.status_code == 401:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 404:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)
        if response.status_code == 503:
            deserialized = self._deserialize('AdiEmsWebApiModelError', response)

        if raw:
            client_raw_response = ClientRawResponse(deserialized, response)
            return client_raw_response

        return deserialized
    stop_async_query.metadata = {'url': '/v2/ems-systems/{emsSystemId}/databases/{databaseId}/async-query/{queryId}'}

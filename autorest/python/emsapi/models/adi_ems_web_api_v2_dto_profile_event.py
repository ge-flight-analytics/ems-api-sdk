# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2DtoProfileEvent(Model):
    """Represents an APM event definition.

    :param id: The definition ID of this event
    :type id: int
    :param name: The name of the event
    :type name: str
    :param comments: Comments associated with this event
    :type comments: str
    :param parameter_set: The parameter set associated with the event if any
    :type parameter_set:
     ~emsapi.models.AdiEmsWebApiV2DtoParameterSetParameterSet
    """

    _validation = {
        'id': {'required': True},
        'name': {'required': True},
        'comments': {'required': True},
    }

    _attribute_map = {
        'id': {'key': 'id', 'type': 'int'},
        'name': {'key': 'name', 'type': 'str'},
        'comments': {'key': 'comments', 'type': 'str'},
        'parameter_set': {'key': 'parameterSet', 'type': 'AdiEmsWebApiV2DtoParameterSetParameterSet'},
    }

    def __init__(self, id, name, comments, parameter_set=None):
        super(AdiEmsWebApiV2DtoProfileEvent, self).__init__()
        self.id = id
        self.name = name
        self.comments = comments
        self.parameter_set = parameter_set

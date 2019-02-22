# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2DtoSchemaFilterArgument(Model):
    """Represents an argument in a filter.

    :param type: The type of the filter argument, describing the role of the
     argument. Possible values include: 'none', 'filter', 'field', 'constant'
    :type type: str or ~swagger.models.enum
    :param value: The value represented by the filter argument.
    :type value: object
    """

    _validation = {
        'type': {'required': True},
        'value': {'required': True},
    }

    _attribute_map = {
        'type': {'key': 'type', 'type': 'str'},
        'value': {'key': 'value', 'type': 'object'},
    }

    def __init__(self, type, value):
        super(AdiEmsWebApiV2DtoSchemaFilterArgument, self).__init__()
        self.type = type
        self.value = value

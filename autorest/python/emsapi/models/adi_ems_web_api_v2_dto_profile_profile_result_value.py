# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2DtoProfileProfileResultValue(Model):
    """Encapsulates information about a profile results value (measurement or
    timepoint).

    :param item_id: The integer ID of the result value in the profile
    :type item_id: int
    :param data_value: The computed data value for the result
    :type data_value: float
    """

    _validation = {
        'item_id': {'required': True},
    }

    _attribute_map = {
        'item_id': {'key': 'itemId', 'type': 'int'},
        'data_value': {'key': 'dataValue', 'type': 'float'},
    }

    def __init__(self, item_id, data_value=None):
        super(AdiEmsWebApiV2DtoProfileProfileResultValue, self).__init__()
        self.item_id = item_id
        self.data_value = data_value

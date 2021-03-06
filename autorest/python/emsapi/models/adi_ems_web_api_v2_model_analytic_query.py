# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2ModelAnalyticQuery(Model):
    """Represents the options used to make up an analytic query.

    :param select: An array specifying the analytics to select and return in
     query results. Use null or an empty array to
     return only offset values
    :type select:
     list[~emsapi.models.AdiEmsWebApiV2ModelAnalyticAnalyticSelect]
    :param start: The optional start offset in the data, in seconds from the
     start of the data. If not specified, the
     beginning of the available data is used
    :type start: float
    :param end: The optional end offset in the data, in seconds from the start
     of the data. If not specified, the
     end of the available data is used
    :type end: float
    :param offsets: The optional set of offsets to return in query results.
     Use as an alternative to specifying a range of
     values using start and end
    :type offsets: list[float]
    :param size: The optional limit that specifies the total number of offsets
     and values to return in query results
    :type size: int
    :param unsampled_data_mode: This determines how to treat data values for
     offsets that are not sampled. If left unset this defaults to 'leaveBlank'.
     This only applies when performing queries using "offsetType". Possible
     values include: 'leaveBlank', 'uniquePreviousSample', 'stairStep',
     'linearInterpolation', 'parameterDefault', 'previousSample'
    :type unsampled_data_mode: str or ~emsapi.models.enum
    :param unsampled_value: This optional parameter replaces any unsampled
     (blank) values with a constant value. This defaults to a null value.
     This only applies when performing queries using "offsetType"
    :type unsampled_value: str
    :param does_not_exist_value: This optional parameter replaces any values
     that come back as DNE (does not exist) with a constant value. This
     defaults to "DNE".
     This only applies when performing queries using "offsetType"
    :type does_not_exist_value: str
    :param offset_type: This defines the way in which the offsets are
     determined. This is required if Offsets or Size has not been set
    :type offset_type: ~emsapi.models.AdiEmsWebApiV2ModelAnalyticOffsetType
    :param discretes_as_strings: This optional parameter, when set to true,
     displays discrete values as their respective string values. This defaults
     to true.
     This only applies when performing queries using "offsetType"
    :type discretes_as_strings: bool
    """

    _validation = {
        'select': {'required': True},
    }

    _attribute_map = {
        'select': {'key': 'select', 'type': '[AdiEmsWebApiV2ModelAnalyticAnalyticSelect]'},
        'start': {'key': 'start', 'type': 'float'},
        'end': {'key': 'end', 'type': 'float'},
        'offsets': {'key': 'offsets', 'type': '[float]'},
        'size': {'key': 'size', 'type': 'int'},
        'unsampled_data_mode': {'key': 'unsampledDataMode', 'type': 'str'},
        'unsampled_value': {'key': 'unsampledValue', 'type': 'str'},
        'does_not_exist_value': {'key': 'doesNotExistValue', 'type': 'str'},
        'offset_type': {'key': 'offsetType', 'type': 'AdiEmsWebApiV2ModelAnalyticOffsetType'},
        'discretes_as_strings': {'key': 'discretesAsStrings', 'type': 'bool'},
    }

    def __init__(self, select, start=None, end=None, offsets=None, size=None, unsampled_data_mode=None, unsampled_value=None, does_not_exist_value=None, offset_type=None, discretes_as_strings=None):
        super(AdiEmsWebApiV2ModelAnalyticQuery, self).__init__()
        self.select = select
        self.start = start
        self.end = end
        self.offsets = offsets
        self.size = size
        self.unsampled_data_mode = unsampled_data_mode
        self.unsampled_value = unsampled_value
        self.does_not_exist_value = does_not_exist_value
        self.offset_type = offset_type
        self.discretes_as_strings = discretes_as_strings

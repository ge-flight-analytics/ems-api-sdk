# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2DtoParameterSetParameterSetItem(Model):
    """A container for parameter sets.

    :param chart_index: The index of the chart that this analytic info belongs
     to, or null if no index specified.
    :type chart_index: int
    :param parameter: The analytic that is represented by this parameter set
     item.
    :type parameter: ~swagger.models.AdiEmsWebApiV2DtoAnalyticInfo
    :param custom_name: The custom name the user specified for the item, or
     null if not-specified.
    :type custom_name: str
    :param color: The color to use for the line in hexadecimal color
     specification "#RRGGBB", or null if no color specified.
    :type color: str
    :param custom_range: Optional override for the vertical scale for a
     parameter.
    :type custom_range: ~swagger.models.AdiEmsWebApiCoreDtoDataRange
    :param custom_digits_after_decimal: Optional override for the number of
     digits to display.
    :type custom_digits_after_decimal: int
    :param line_width: Optional value from 1 to 5 for the width of the line.
    :type line_width: int
    :param display_sample_marker: Optional value specifying whether the
     parrmeter should display shapes to indicate the sampled values.
    :type display_sample_marker: bool
    :param sample_marker_shape: If set, describes the shape to use for the
     sampled values.
     Possible values: [Square, Circle, Triangle, InvertedTriangle, Cross, Star]
    :type sample_marker_shape: str
    :param line_style: If set, describes the line style to use when drawing.
     Possible values: [Dash, Dot, DashDot, DashDotDot, Solid]
    :type line_style: str
    """

    _attribute_map = {
        'chart_index': {'key': 'chartIndex', 'type': 'int'},
        'parameter': {'key': 'parameter', 'type': 'AdiEmsWebApiV2DtoAnalyticInfo'},
        'custom_name': {'key': 'customName', 'type': 'str'},
        'color': {'key': 'color', 'type': 'str'},
        'custom_range': {'key': 'customRange', 'type': 'AdiEmsWebApiCoreDtoDataRange'},
        'custom_digits_after_decimal': {'key': 'customDigitsAfterDecimal', 'type': 'int'},
        'line_width': {'key': 'lineWidth', 'type': 'int'},
        'display_sample_marker': {'key': 'displaySampleMarker', 'type': 'bool'},
        'sample_marker_shape': {'key': 'sampleMarkerShape', 'type': 'str'},
        'line_style': {'key': 'lineStyle', 'type': 'str'},
    }

    def __init__(self, chart_index=None, parameter=None, custom_name=None, color=None, custom_range=None, custom_digits_after_decimal=None, line_width=None, display_sample_marker=None, sample_marker_shape=None, line_style=None):
        super(AdiEmsWebApiV2DtoParameterSetParameterSetItem, self).__init__()
        self.chart_index = chart_index
        self.parameter = parameter
        self.custom_name = custom_name
        self.color = color
        self.custom_range = custom_range
        self.custom_digits_after_decimal = custom_digits_after_decimal
        self.line_width = line_width
        self.display_sample_marker = display_sample_marker
        self.sample_marker_shape = sample_marker_shape
        self.line_style = line_style

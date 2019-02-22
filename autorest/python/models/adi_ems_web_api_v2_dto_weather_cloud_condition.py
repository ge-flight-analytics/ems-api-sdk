# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2DtoWeatherCloudCondition(Model):
    """Describes the condition of clouds in the sky.

    :param cloud_base: Specifies the height of the base of a visual portion of
     a cloud. Uses "Infinity" to designate there is no
     limit
    :type cloud_base: float
    :param cloud_type: Describes the types of clouds appearing in the sky.
     Possible values include: 'none', 'cumulonimbus', 'toweringCumulis',
     'cumulusMediocris'
    :type cloud_type: str or ~swagger.models.enum
    :param cloud_coverage: Describes the type of cloud cover appearing in the
     sky. Possible values include: 'none', 'few', 'scattered', 'broken',
     'overcast', 'verticalVisibility', 'clear'
    :type cloud_coverage: str or ~swagger.models.enum
    """

    _attribute_map = {
        'cloud_base': {'key': 'cloudBase', 'type': 'float'},
        'cloud_type': {'key': 'cloudType', 'type': 'str'},
        'cloud_coverage': {'key': 'cloudCoverage', 'type': 'str'},
    }

    def __init__(self, cloud_base=None, cloud_type=None, cloud_coverage=None):
        super(AdiEmsWebApiV2DtoWeatherCloudCondition, self).__init__()
        self.cloud_base = cloud_base
        self.cloud_type = cloud_type
        self.cloud_coverage = cloud_coverage

# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebSharedTableauRestTags(Model):
    """AdiEmsWebSharedTableauRestTags.

    :param tag:
    :type tag: list[~swagger.models.AdiEmsWebSharedTableauRestTag]
    """

    _attribute_map = {
        'tag': {'key': 'tag', 'type': '[AdiEmsWebSharedTableauRestTag]'},
    }

    def __init__(self, tag=None):
        super(AdiEmsWebSharedTableauRestTags, self).__init__()
        self.tag = tag

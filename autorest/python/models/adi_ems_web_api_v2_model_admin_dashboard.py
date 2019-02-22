# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2ModelAdminDashboard(Model):
    """Encapsulates the basic properties of a dashboard used by EMS web
    application users to view EMS-related data.

    :param id: The unique integer identifier of the dashboards.
    :type id: int
    :param title: The title of the dashboard typically rendered in the page
     header of a displayed dashboard.
    :type title: str
    :param description: A detailed description that describes the contents of
     the dashboard.
    :type description: str
    """

    _attribute_map = {
        'id': {'key': 'id', 'type': 'int'},
        'title': {'key': 'title', 'type': 'str'},
        'description': {'key': 'description', 'type': 'str'},
    }

    def __init__(self, id=None, title=None, description=None):
        super(AdiEmsWebApiV2ModelAdminDashboard, self).__init__()
        self.id = id
        self.title = title
        self.description = description

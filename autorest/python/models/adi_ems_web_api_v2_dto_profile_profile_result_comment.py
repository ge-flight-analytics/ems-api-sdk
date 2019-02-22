# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2DtoProfileProfileResultComment(Model):
    """Encapsulates information about a comment.

    :param user: The user associated with the comment
    :type user: str
    :param date_property: The date and time the comment was added (UTC)
    :type date_property: datetime
    :param comment: The text of the comment
    :type comment: str
    """

    _validation = {
        'user': {'required': True},
        'date_property': {'required': True},
        'comment': {'required': True},
    }

    _attribute_map = {
        'user': {'key': 'user', 'type': 'str'},
        'date_property': {'key': 'date', 'type': 'iso-8601'},
        'comment': {'key': 'comment', 'type': 'str'},
    }

    def __init__(self, user, date_property, comment):
        super(AdiEmsWebApiV2DtoProfileProfileResultComment, self).__init__()
        self.user = user
        self.date_property = date_property
        self.comment = comment

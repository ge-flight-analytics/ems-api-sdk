# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AdiEmsWebApiV2DtoNavigationNavigationProcedureSegment(Model):
    """Various pieces of information associated with a procedure segment.

    :param type: The segment type.
    :type type: str
    :param transition_id: The procedure segment id.
    :type transition_id: str
    :param sequence_number: The procedure segment sequence number.
    :type sequence_number: int
    :param track_code: The procedure segment
    :type track_code: str
    :param waypoint_id: The procedure segment waypoint id.
    :type waypoint_id: int
    :param waypoint_desc_codes: The procedure segment waypoint description
     codes.
    :type waypoint_desc_codes: list[str]
    :param waypoint_bearing: The bearing to the waypoint.
    :type waypoint_bearing: float
    :param waypoint_distance: The distance to the waypoint.
    :type waypoint_distance: float
    :param navaids: The navaids referenced by this segment.
    :type navaids:
     list[~emsapi.models.AdiEmsWebApiV2DtoNavigationNavigationProcedureSegmentNavaid]
    :param turn_direction: The procedure segment turn direction.
    :type turn_direction: str
    :param altitude_description: The procedure segment altitude description.
    :type altitude_description: str
    :param altitude1: The procedure segment altitude 1.
    :type altitude1: str
    :param altitude2: The procedure segment altitude 2.
    :type altitude2: str
    """

    _attribute_map = {
        'type': {'key': 'type', 'type': 'str'},
        'transition_id': {'key': 'transitionId', 'type': 'str'},
        'sequence_number': {'key': 'sequenceNumber', 'type': 'int'},
        'track_code': {'key': 'trackCode', 'type': 'str'},
        'waypoint_id': {'key': 'waypointId', 'type': 'int'},
        'waypoint_desc_codes': {'key': 'waypointDescCodes', 'type': '[str]'},
        'waypoint_bearing': {'key': 'waypointBearing', 'type': 'float'},
        'waypoint_distance': {'key': 'waypointDistance', 'type': 'float'},
        'navaids': {'key': 'navaids', 'type': '[AdiEmsWebApiV2DtoNavigationNavigationProcedureSegmentNavaid]'},
        'turn_direction': {'key': 'turnDirection', 'type': 'str'},
        'altitude_description': {'key': 'altitudeDescription', 'type': 'str'},
        'altitude1': {'key': 'altitude1', 'type': 'str'},
        'altitude2': {'key': 'altitude2', 'type': 'str'},
    }

    def __init__(self, type=None, transition_id=None, sequence_number=None, track_code=None, waypoint_id=None, waypoint_desc_codes=None, waypoint_bearing=None, waypoint_distance=None, navaids=None, turn_direction=None, altitude_description=None, altitude1=None, altitude2=None):
        super(AdiEmsWebApiV2DtoNavigationNavigationProcedureSegment, self).__init__()
        self.type = type
        self.transition_id = transition_id
        self.sequence_number = sequence_number
        self.track_code = track_code
        self.waypoint_id = waypoint_id
        self.waypoint_desc_codes = waypoint_desc_codes
        self.waypoint_bearing = waypoint_bearing
        self.waypoint_distance = waypoint_distance
        self.navaids = navaids
        self.turn_direction = turn_direction
        self.altitude_description = altitude_description
        self.altitude1 = altitude1
        self.altitude2 = altitude2

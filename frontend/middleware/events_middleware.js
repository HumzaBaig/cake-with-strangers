import { CREATE_EVENT,
         FETCH_EVENTS,
         ATTEND_EVENT,
         UNATTEND_EVENT,
         fetchEvents,
         receiveEvents } from '../actions/event_actions';
import { createEventBackend,
         requestEvents,
         requestAttendedEvents,
         addAttendance,
         subtractAttendance } from '../util/events_api_util';
import { FETCH_USER, fetchUser, receiveCurrentUser } from '../actions/session_actions';
import { requestUser } from '../util/session_api_util';

const EventsMiddleware = ({ getState, dispatch }) => next => action => {
  const createSuccessCB = data => dispatch(fetchEvents("host_id", data.host.id));
  const attendanceSuccessCB = data => dispatch(fetchUser(data.attendee_id));
  const fetchEventsSuccessCB = data => dispatch(receiveEvents(data));
  const currentUserSuccessCB = data => dispatch(receiveCurrentUser(data));

  switch (action.type) {
    case CREATE_EVENT:
      createEventBackend(action.data, createSuccessCB);
      return next(action);
    case FETCH_EVENTS:
      requestEvents(action.key, action.value, fetchEventsSuccessCB);
      return next(action);
    case ATTEND_EVENT:
      addAttendance(action.data, attendanceSuccessCB);
      return next(action);
    case UNATTEND_EVENT:
      subtractAttendance(action.eventId, attendanceSuccessCB);
      return next(action);
    case FETCH_USER:
      requestUser(action.userId, currentUserSuccessCB);
      return next(action);
    default:
      return next(action);
  }
};

export default EventsMiddleware;

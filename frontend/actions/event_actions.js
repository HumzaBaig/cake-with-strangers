export const FETCH_EVENTS = "FETCH_EVENTS";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const ATTEND_EVENT = "ATTEND_EVENT";
export const UNATTEND_EVENT = "UNATTEND_EVENT";

export const fetchEvents = (key, value) => ({
  type: FETCH_EVENTS,
  key,
  value
});

export const receiveEvents = data => ({
  type: RECEIVE_EVENTS,
  data
});

export const createEvent = data => ({
  type: CREATE_EVENT,
  data
});

export const receiveEvent = data => ({
  type: RECEIVE_EVENT,
  data
});

export const attendEvent = data => ({
  type: ATTEND_EVENT,
  data
});

export const unattendEvent = eventId => ({
  type: UNATTEND_EVENT,
  eventId
});

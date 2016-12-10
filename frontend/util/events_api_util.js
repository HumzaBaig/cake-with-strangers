export const requestEvents = (keyVal, valueVal, success) => {
  $.ajax({
    url: 'api/events',
    data: { key: keyVal , value: valueVal },
    success
  });
};

export const createEventBackend = (eventObject, success) => {
  $.ajax({
    type: 'POST',
    url: 'api/events',
    data: { events: eventObject },
    success
  });
};

export const addAttendance = (attendanceObject, success) => {
  $.ajax({
    type: 'POST',
    url: 'api/attendances',
    data: { attendance: attendanceObject },
    success
  });
};

export const subtractAttendance = (eventId, success) => {
  $.ajax({
    method: "DELETE",
    url: `api/attendances/${eventId}`,
    success
  });
};

export const requestAttendedEvents = (success) => {
  $.ajax({
    url: 'api/attendances',
    success
  });
}

import React from 'react';
import { allEvents } from '../../../reducers/selectors';
import EventDetailContainer from './event_detail_container';

class CreatedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.makeEventsIntoArray = this.makeEventsIntoArray.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvents("host_id", this.props.currentUser.id);
  }

  makeEventsIntoArray() {
    let eventIds = {};
    this.props.currentUser.attendances.forEach(attendance => eventIds[attendance.event_id] = true);

    if (this.props.events[1] !== "not fetched yet") {
      const eventElements = allEvents(this.props.events).map( (evt, idx) => (
        <EventDetailContainer evt={evt} eventIds={eventIds} key={idx} created={true}/>
        ));
      return eventElements;
    } else {
      return (<div>You haven't hosted any events yet!</div>);
    }
  }

  render() {
    return (
      <section>
        <h2>Events</h2>
        {this.makeEventsIntoArray()}
      </section>
    );
  }
}

export default CreatedEvents;

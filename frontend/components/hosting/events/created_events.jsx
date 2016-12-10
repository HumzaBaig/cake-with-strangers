import React from 'react';
import { allEvents } from '../../../reducers/selectors';
import EventDetail from './event_detail';

class CreatedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.makeEventsIntoArray = this.makeEventsIntoArray.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvents("host_id", this.props.currentUser.id);
  }

  makeEventsIntoArray() {
    if (this.props.events[1] !== "not fetched yet") {
      const eventElements = allEvents(this.props.events).map( (evt, idx) => (
        <EventDetail evt={evt} key={idx} />
        ));
      return eventElements;
    } else {
      return (<div>loading..</div>);
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

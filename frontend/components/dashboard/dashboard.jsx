import React from 'react';
import { allEvents } from '../../reducers/selectors';
import EventDetail from '../hosting/events/event_detail';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.eventsAttending = this.eventsAttending.bind(this);
  }

  eventsAttending () {
    if (this.props.events[1] !== "not fetched yet") {
      const eventElements = allEvents(this.props.events).map( (evt, idx) => (
        <EventDetail evt={evt} key={idx} />
        ));
      return eventElements;
    } else {
      return (<div>loading..</div>);
    }
  }

  render () {
    return (
      <div>
        <section>
          {this.eventsAttending()}
        </section>
      </div>
    );
  }
}

export default Dashboard;

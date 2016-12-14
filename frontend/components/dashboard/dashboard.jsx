import React from 'react';
import { allEvents } from '../../reducers/selectors';
import EventDetailContainer from '../hosting/events/event_detail_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.eventIds = {};
    this.props.currentUser.attendances.forEach(attendance => this.eventIds[attendance.event_id] = true);
    this.eventsAttending = this.eventsAttending.bind(this);
    this.eventsHosting = this.eventsHosting.bind(this);
  }

  eventsAttending () {
    if (this.props.attendedEvents !== undefined) {
      const eventElements = allEvents(this.props.attendedEvents).map( (evt, idx) => (
        <EventDetailContainer evt={evt} eventIds={this.eventIds} key={idx} />
        ));
      return eventElements;
    } else {
      return (<div>loading..</div>);
    }
  }

  eventsHosting () {
    if (this.props.attendedEvents !== undefined) {
      const eventElements = allEvents(this.props.hostedEvents).map( (evt, idx) => (
        <EventDetailContainer evt={evt} eventIds={this.eventIds} created={true} key={idx} />
        ));
      return eventElements;
    } else {
      return (<div>loading..</div>);
    }
  }

  render () {
    return (
      <div className="light-background">
        <h1>ATTENDING</h1>
        <section>
          {this.eventsAttending()}
        </section>
        <h1>HOSTING</h1>
        <section>
          {this.eventsHosting()}
        </section>
      </div>
    );
  }
}

export default Dashboard;

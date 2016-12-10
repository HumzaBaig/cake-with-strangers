import React from 'react';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.returnButton = this.returnButton.bind(this);
    const eventId = this.props.eventIds[this.props.evt.id];
  }

  returnButton() {
    if (eventId) {
      return (
        <button onClick={eventId => this.props.unattendEvent}>I changed my mind..</button>
      );
    } else {
      return (
        <button onClick={{event_id: eventId, attendee_id: this.props.currentUser.id} => this.props.attendEvent}>
          Save me a seat!
        </button>
      );
    }
  }

  render() {
      return (
        <section>
          <h3>{this.props.evt.date_and_time}</h3>
          <h4>address: {this.props.evt.address}</h4>
          <h4>limit: {this.props.evt.limit}</h4>
          <p>{this.props.evt.description}</p>
          {this.returnButton()}
        </section>
    );
  }
}

export default EventDetail;

import React from 'react';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.returnButton = this.returnButton.bind(this);
    this.handleAttend = this.handleAttend.bind(this);
    this.handleUnattend = this.handleUnattend.bind(this);
    this.eventId = this.props.eventIds[this.props.evt.id];
    let attending;
    if (this.eventId) {
      attending = true;
    } else {
      attending = false;
    }
    this.state = {
      event_id: this.props.evt.id,
      attendee_id: this.props.currentUser.id,
      attending: attending
    };
  }

  handleAttend(e) {
    e.preventDefault();
    this.props.attendEvent(this.state);
    this.setState({attending: true});
  }

  handleUnattend(e) {
    e.preventDefault();
    this.props.unattendEvent(this.props.evt.id);
    this.setState({attending: false});
  }

  returnButton() {
    if (this.props.created) {
      //no button
    } else if (this.state.attending) {
      return (
        <button onClick={this.handleUnattend}>
          I changed my mind..
        </button>
      );
    } else {
      return (
        <button onClick={this.handleAttend}>
          Save me a seat!
        </button>
      );
    }
  }

  render() {
    console.log(this.props);
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

import React from 'react';
import moment from 'moment';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.returnButton = this.returnButton.bind(this);
    this.handleAttend = this.handleAttend.bind(this);
    this.handleUnattend = this.handleUnattend.bind(this);
    this.parseDateAndTime = this.parseDateAndTime.bind(this);
    this.getDayOfTheWeek = this.getDayOfTheWeek.bind(this);
    this.getMonthName = this.getMonthName.bind(this);
    this.hostPicture = this.hostPicture.bind(this);

    if (this.props.currentUser.id === this.props.evt.host_id) {
      this.created = true;
    } else {
      this.created = false;
    }

    this.eventId = this.props.eventIds[this.props.evt.id];
    this.dayOfTheWeek, this.startTime, this.monthName, this.day;

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

    this.parseDateAndTime();
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

  getDayOfTheWeek(momentObject) {
    let numDay = momentObject.day();
    return moment.weekdays(numDay);
  }

  getMonthName(momentObject) {
    return momentObject.format('MMM');
  }

  parseDateAndTime() {
    let date = this.props.evt.date_and_time.slice(0, 10);
    let dateMoment = moment(date, "YYYY-MM-DD");
    this.day = parseInt(date.slice(5,7));
    this.startTime = this.props.evt.date_and_time.slice(11, 16);
    this.dayOfTheWeek = this.getDayOfTheWeek(dateMoment);
    this.monthName = this.getMonthName(dateMoment);
  }

  hostPicture() {
    console.log(this.props.currentUser.profile_pic_url);
    if(this.created) {
      return (
        <img src={this.props.currentUser.profile_pic_url} />
      );
    } else {
      debugger;
      return (
        <img src={this.props.hostUrls[this.props.evt.id]} />
      );
    }
  }

  hostName() {
    if(this.props.created) {
      return (this.props.currentUser.fname)
    } else {
      return (this.props.hostNames[this.props.evt.id])
    }
  }

  render() {
      return (
        <section className="event-container">
          <div className="event-upper-half">
            <div>
              <div className="column">
                <h3 className="day-of-the-week">{this.dayOfTheWeek}</h3>
                <h3 className="date">{`${this.monthName} ${this.day}`}</h3>
                <h3 className="time">{`Time: ${this.startTime}`}</h3>
              </div>
            </div>
            <div>
              <div className="event-picture-container">
                <img className="event-host-pic" src={this.hostPicture()} />
                <div>
                  <div className="center">
                    <h4 className="event-host-name">{this.hostName()}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="event-lower-half">
            <h3 className="address">{this.props.evt.address}</h3>
            <hr />
            <h4 className="description">{this.props.evt.description}</h4>
            <hr />
            <div>
              <div className="center">
                <h3 className="limit">{this.props.evt.limit}</h3>
              </div>
            </div>
          </div>
          {this.returnButton()}
        </section>
    );
  }
}

export default EventDetail;

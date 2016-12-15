import React from 'react';
import { hashHistory } from 'react-router';
import EventDetailContainer from '../../hosting/events/event_detail_container';
import HostDetail from '../../hosting/host_detail';

class CityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkHomeCity = this.checkHomeCity.bind(this);
    this.loggedInButton = this.loggedInButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.eventElements = this.eventElements.bind(this);
    this.hostElements = this.hostElements.bind(this);
    this.eventElements = this.eventElements.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const user = this.props.currentUser;
    user.city_id = this.props.city.id;
    this.props.updateUser(user);
    hashHistory.push(`/cities`);
  }

  checkHomeCity() {
    if (this.props.currentUser.city_id === this.props.city.id) {
      return "Click here to change your city";
    } else {
      return "Make this your home city";
    }
  }

  eventElements() {
    let eventIds = {};
    let hostUrls = {};
    let hostNames = {};
    if (this.props.eventsForHosts[0] !== "not fetched yet" && this.props.eventsForHosts.length !== 0) {
      this.props.eventsForHosts.forEach(event => {
        hostUrls[event.id] = event.host.profile_pic_url;
        hostNames[event.id] = event.host.fname;
      });
    }
    this.props.currentUser.attendances.forEach(attendance => eventIds[attendance.event_id] = true);
    return (this.props.events.map( (evt, idx) => (
      <EventDetailContainer hostNames={hostNames}
                            hostUrls={hostUrls}
                            evt={evt}
                            eventIds={eventIds}
                            key={idx} />
      )));
  }

  hostElements() {
    return(this.props.hosts.map( (host, idx) => (
      <HostDetail host={host} key={idx} />
    )));
  }

  loggedInButton() {
    if (this.props.loggedIn) {
      return (
        <section className="events-home-button-container">
          <button className="make-home-button" onClick={this.handleClick}>
            {this.checkHomeCity()}
          </button>
          <h2>EVENTS</h2>
            {this.eventElements()}
        </section>
      );
    }
  }

  render() {
    console.log(this.props);
    return(
      <div className="city-details-page light-background">
        <section className="center">
          <div className="city-detail-container">
            {this.loggedInButton()}
            <h2>HOSTS</h2>
            {this.hostElements()}
          </div>
        </section>
      </div>
    );
  }
}

export default CityDetail;

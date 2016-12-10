import React from 'react';
import EventFormContainer from './events/event_form_container';
import CreatedEventsContainer from './events/created_events_container';


class Host extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const user = this.props.currentUser;
    user.is_host = true;
    this.props.updateUser(user);
  }

  render() {
    if (!this.props.isHost) {
      return (
        <button className="host-button" onClick={this.handleClick}>Become a host!</button>
      );
    } else {
      return (
        <div>
          <section>
            <CreatedEventsContainer />
          </section>
          <section>
            <EventFormContainer />
          </section>
        </div>
      );
    }
  }
}

export default Host;

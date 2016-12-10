import React from 'react';
import Datetime from 'react-datetime';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_and_time: {},
      limit: 5,
      address: "",
      description: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.validDateAndTime = this.validDateAndTime.bind(this);
    this.updateCalendar = this.updateCalendar.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  updateCalendar(dateAndTime) {
    this.setState({
      date_and_time: new Date(dateAndTime.format('MM/DD/YYYY, HH:mm'))
    });
  }

  validDateAndTime() {
    let yesterday = Datetime.moment().subtract(1,'day');
     return current => (
    current.isAfter(yesterday)
    );
  }

  render() {
    return (
      <div>
        <h2>New Event:</h2>
        <form onSubmit={this.handleSubmit} >
          <label>
            <input type="number"
              id="limit"
              placeholder="5"
              onChange={this.update("limit")} />
          </label>
          <label>
            <input type="text"
              id="address"
              placeholder="1234 streetname, 77388"
              onChange={this.update("address")} />
          </label>
          <label>
            <textarea required
              id="description"
              placeholder="Describe your event!"
              onChange={this.update("description")}></textarea>
          </label>
          <label>
            <Datetime input={false}
                      isValidDate={this.validDateAndTime()}
                      viewMode={'years'}
                      onChange={this.updateCalendar} />
          </label>
          <input className="submit-button" type="submit" value="Create Event!" />
        </form>
      </div>
    );
  }
}

export default EventForm;

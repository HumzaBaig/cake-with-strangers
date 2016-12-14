import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.account.currentUser;
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render() {
    return (
      <div className="light-background">
        <div className="container">
          <div className="dashboard">
            <aside className="dash-intro">
              <div className="hello sidebar-section">
                <h2>Welcome home, {this.props.account.username}</h2>
                <h3 className="gray">What it do</h3>
              </div>
            </aside>
            <section className="dash-body">
              <div className="edit-account form first">
                <h2>Edit Your Account</h2>
                <form className="edit_user" onSubmit={this.handleSubmit} >
                  <h3 className="first form-subheader"> Personal Information</h3>
                  <div className="name-email split-container">
                    <div className="field username split2">
                      <div className="form-label">
                        <label className="capitalize boldweight">Username</label>
                      </div>
                      <input type="text"
                        id="username"
                        value={this.props.account.username}
                        onChange={this.update("username")}/>
                      <div className="field email split2">
                        <div className="form-label">
                          <label className="capitalize boldweight">Email</label>
                        </div>
                        <input type="email"
                          id="email"
                          value={this.props.account.email}
                          onChange={this.update("email")}/>
                      </div>
                    </div>
                  </div>
                  <div className="full-name split-container">
                    <div className="field first-name split2">
                      <div className="form-label">
                        <label className="capitalize boldweight">First Name</label>
                      </div>
                      <input type="text"
                        id="fname"
                        value={this.props.account.fname}
                        onChange={this.update("fname")}/>
                      <div className="field last-name split2">
                        <div className="form-label">
                          <label className="capitalize boldweight">Last Name</label>
                        </div>
                        <input type="text"
                          id="lname"
                          value={this.props.account.lname}
                          onChange={this.update("lname")}/>
                      </div>
                    </div>
                  </div>
                  <div className="phone-city split-container">
                    <div className="field phone-number split2">
                      <div className="form-label">
                        <label className="capitalize boldweight">Phone Number</label>
                      </div>
                      <input type="text"
                        id="user_phone_number"
                        value={this.props.account.phone_number}
                        onChange={this.update("phone_number")}/>
                    </div>
                    <div className="field city split2">
                      <div className="form-label">
                        <label className="capitalize boldweight">Home City</label>
                      </div>
                      <div className="dropdown">
                        <select id="user_home_city_id">
                          <option value="1">Houston</option>
                          <option value="2">SF / Bay Area</option>
                          <option value="3">New York City</option>
                          <option value="4">The Ukraine</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <h3 className="form-subheader">Change Your Password</h3>
                  <div className="field">
                    <div className="form-label">
                      <label className="capitalize boldweight">Current password</label>
                    </div>
                    <input id="user_current_password" placeholder="Current password" type="password"/>
                  </div>
                  <div className="new-password split-container">
                    <div className="field split2">
                      <div className="form-label">
                        <label className="capitalize boldweight">New password</label>
                      </div>
                      <input type="password"
                        id="user_password"
                        placeholder="New password"/>
                    </div>
                    <div className="field split2">
                      <div className="form-label">
                        <label className="capitalize boldweight">Confirm new password</label>
                      </div>
                      <input type="password"
                        id="user_password_confirmation"
                        placeholder="One more time!"/>
                    </div>
                  </div>
                  <div className="field">
                    <input type="submit" value="Save Changes"/>
                  </div>
                </form>
              </div>
              <div className="cancel-account">
                <h2>Cancel my account</h2>
                <button>DELETE</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;

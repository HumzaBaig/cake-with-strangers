import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.navLink = this.navLink.bind(this);
		this.update = this.update.bind(this);
		this.emailInput = this.emailInput.bind(this);
		this.startUsernameAnimation = this.startUsernameAnimation.bind(this);
		this.startPasswordAnimation = this.startPasswordAnimation.bind(this);
		this.clearFields = this.clearFields.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user);
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">If you've already done this before, click here and do dat</Link>;
		} else {
			return <Link to="/login">If you've never signed up before, click here to log in</Link>;
		}
	}

	emailInput() {
		if (this.props.formType === "signup") {
			return (
				<label className="session-label">
					<input type="text"
						placeholder="Email address"
						value={this.state.email}
						onChange={this.update("email")}/>
				</label>
			);
		}
	}

	startUsernameAnimation(){
    if(this.state.username.length > 0 || this.state.password.length > 0){
        this.clearFields();
    }

    const demoGuest = 'Guest';
    let usernameID = setInterval(() => {
        document.getElementById('username').focus();
        let currLength = this.state.username.length;

        if(currLength < demoGuest.length){
            this.setState({username: this.state.username + demoGuest.slice(currLength, currLength + 1)});
        } else{
            clearInterval(usernameID);
            this.startPasswordAnimation();
        }
    }, 100);
  }

	clearFields(){
   this.setState({username: '', password:''});
  }

  startPasswordAnimation(){
    const demoPassword = 'password';
    let passwordID = setInterval(() => {
      document.getElementById('password').focus();
      let currLength = this.state.password.length;

      if(currLength < demoPassword.length){
        this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
      } else{
        clearInterval(passwordID);
        const user = this.state;
        this.props.login(user);
      }
    }, 100);
  }

	render() {
		return (
			<div className="light-background">
				<div className="container session-form">
					<div className="full-sign-up">
						<h2 class="sign-up-header">Join to cake</h2>
						<p className="sign-up-text">
							Everybody learns from everybody.
						</p>
						<form className="sign-ups" onSubmit={this.handleSubmit}>
							<label className="session-label">
								<input type="text"
									id="username"
									placeholder="First name (or nickname)"
									value={this.state.username}
									onChange={this.update("username")}/>
							</label>
							{this.emailInput()}
							<label className="session-label">
								<input type="password"
									id="password"
									placeholder="Password (at least 6 characters you won't forget!)"
									value={this.state.password}
									onChange={this.update("password")}/>
							</label>
							<input className="submit-button" type="submit" value="Lets Get Cake" />
						</form>
						<button className="submit-button"
										id="demo-form-button"
										onClick={this.startUsernameAnimation}
										>Guest Login</button>
						<div className="alternate">
							{this.navLink()}
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);

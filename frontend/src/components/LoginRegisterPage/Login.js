import React from "react"
import { Link } from "react-router-dom";
import qs from "qs";


class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }


  submitLogin = async () => {
      document.getElementById("go_to_new-crawl_login").click()

    let username = document.getElementById("login_values").username.value
    let password = document.getElementById("login_values").password.value
    if (username == "" || password == "") {
      this.setState({ error: "Enter login details" })
      return
    }
    const res = await fetch("/api/v1/login", {
      method: "POST",
      body: qs.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });

    if (res.ok) {
      document.getElementById("go_to_new-crawl_login").click()
    }
    else if (res.status == 400) {
      this.setState({ error: "Incorrect username or password" })
    }
    else if (res.status == 422) {
      this.setState({ error: "Validation Error" })
    }
    else {
      this.setState({ error: "Oops, something went wrong" })
    }

  }
  render() {
    return (
      <div className="inner-container">
        <div className="box">
          <form id="login_values">
            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input
                label="Email Address"
                type='email'
                name='username'
                className="login-input"
                placeholder="Email"
              />
              <label htmlFor="password">Password</label>
              <input
                label="Password"
                type='password'
                name='password'
                className="login-input"
                placeholder="Password"
              />
              <button className="login-btn" type="button" value="Submit" onClick={this.submitLogin}>Login</button>
            </div>
          </form>
          <div className="error">{this.state.error}</div>
          {/* 
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password" />
          </div> */}

          {/* <Link to="/new-crawl">
            <button
              type="button"
              className="login-btn"
              onClick={this
                .submitLogin
                .bind(this)}>Login</button>
          </Link> */}
          <Link to="/new-crawl">
            <div id="go_to_new-crawl_login"></div>
          </Link>

        </div>
      </div>
    );
  }

}

export default LoginBox

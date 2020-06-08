import React from "react"
import { Link } from "react-router-dom";
import  qs from "qs";


class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }


  submitLogin = async () => {
    console.log("work????")
    let username = document.getElementById("login_values").username.value
    let password = document.getElementById("login_values").password.value

    console.log(qs.stringify({ username: username, password: password }))

    const res = await fetch("/api/v1/login", {
      method: "POST",
      body: qs.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    });
    console.log("5: " + res.ok)
    console.log("6: " + res.status)
    if (res.ok) {
      document.getElementById("go_to_new-crawl_login").click()
    } else {
      let status = res.status
      console.log("Such an account does not exists")
    }

  }
  render() {
    return (
      <div className="inner-container">
        <div className="box">
          <form id="login_values">
            <div className="input-group">
              <label htmlFor="username">Username</label>
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

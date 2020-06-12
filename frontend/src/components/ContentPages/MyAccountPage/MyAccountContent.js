import React from "react"
import "../../../css/MyAccount.css"
import Button from '@material-ui/core/Button';

class MyAccountContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: ""
    };
  }

  async componentDidMount() {
    console.log("one")
    const res = await fetch("/api/v1/user/me")
    if (res.ok) {
      const json = await res.json()

      this.setState({ email: json.email })

    }
    else if (res.status == 401) {
      this.setState({ email: "Not logged in" })
    }
    else if (res.status == 404) {
      this.setState({ email: "User not found " })
    }
    else {
      this.setState({ email: "Oops, something went wrong" })
    }

  }

  submitChange = async () => {

    let current_password = document.getElementById("current_password").value
    let new_password = document.getElementById("new_password").value
    let confirm_password = document.getElementById("confirm_password").value

    console.log("sumbitchange")
    if (current_password == "" || new_password == "" || confirm_password == "") {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "Complete all fields" })
      return
    }
    else if (new_password != confirm_password) {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "Passwords are not the same" })
      return
    }
    else if (new_password.length < 8) {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "Minimum length 8" })
      return
    }
    else if (current_password == new_password) {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "The new password cannot be the same" })
      return
    }
    const res = await fetch("/api/v1/change-password", {
      method: "PATCH",
      body: JSON.stringify({ current_password: current_password, new_password: new_password }),
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (res.ok) {
      document.getElementById("error-change-password").style.color = "green"
      this.setState({ error: "Password has been successfully changed" })
    }
    else if (res.status == 400) {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "Wrong password" })
    }
    else if (res.status == 401) {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "Not logged in" })
    }
    else if (res.status == 422) {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "Validation Error" })
    }
    else {
      document.getElementById("error-change-password").style.color = "red"
      this.setState({ error: "Oops, something went wrong" })
    }

  }


  render() {
    return (
      <div className="PageContent">
        <h1 id="h1">My Account</h1>
        <div id="line"></div>
        <div id="container">
          <div id="email">email:</div>
          <div id="ueserEmail">{this.state.email}</div>
        </div>
        <div id="line2"></div>
        <div id="container">
          <div id="password">change password:</div>
          {/* <div id="changePassword">change password</div> */}
          <div id="input">
            <div>
              <input
                id="current_password"
                label="Password"
                type='Password'
                name='current_password'
                className="login-input"
                placeholder="Current password"
              />
            </div>
            <div>
              <input
                id="new_password"
                label="Password"
                type='password'
                name='new_password'
                className="login-input"
                placeholder="New password"
              />
            </div>
            <div>
              <input
                id="confirm_password"
                label="Password"
                type='password'
                name='confirm_password'
                className="login-input"
                placeholder="Cofnirm password"
              />
            </div>
            <Button variant="contained" color="primary" id="change-password-button" className="login-btn"
              type="button" value="Submit" onClick={this.submitChange}>Cofnirm change</Button>

            <div id="error-change-password">{this.state.error}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyAccountContent
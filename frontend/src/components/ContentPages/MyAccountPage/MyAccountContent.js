import React from "react"
import "../../../css/MyAccount.css"
import Button from '@material-ui/core/Button';

class MyAccountContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "example@com.pl",
            error: "Here will be errors"
        };
    }

    submitChange = async () => {

        let current_password = document.getElementById("current_password").current_password.value
        let new_password = document.getElementById("new_password").new_password.value
        let confirm_password = document.getElementById("confirm_password").confirm_password.value

        //   if (current_password == "" || new_password == "" || confirm_password == "") {
        //     this.setState({ error: "Enter all details" })
        //     return
        //   }        
        //   if (new_password != new_password) {
        //     this.setState({ error: "Passwords are not the same" })
        //     return
        //   }

        //   const res = await fetch("/api/v1/login", {
        //     method: "POST",
        //     body: JSON.stringify({ username: username, password: password }),
        //     headers: {
        //       "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //   });

        //   if (res.ok) {
        //     document.getElementById("go_to_new-crawl_login").click()
        //   }
        //   else if (res.status == 400) {
        //     this.setState({ error: "Incorrect username or password" })
        //   }
        //   else if (res.status == 422) {
        //     this.setState({ error: "Validation Error" })
        //   }
        //   else {
        //     this.setState({ error: "Oops, something went wrong" })
        //   }

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
                    <div id="email">change password:</div>
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
                         type="button" value="Submit" nClick={this.submitChange}>Cofnirm change</Button>

                        <div id="error-change-password" className="error">{this.state.error}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccountContent
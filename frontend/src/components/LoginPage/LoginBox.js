import React from "react"
import {
  Link
} from "react-router-dom";


class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitLogin(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
   
                <Link to="/new-crawl"> 
                  <button
                    type="button"
                    className="login-btn"
                    onClick={this
                    .submitLogin
                    .bind(this)}>Login</button>
                </Link>

          </div>
        </div>
      );
    }
  
  } 

  export default LoginBox
 
import React from "react"



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
        {/* <Router> 
            <Link to="/home"> */}
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
           {/* </Link>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
        <Switch>
          <Route path="/home">
            <About />
          </Route>
        </Switch>
    </Router> */}
          </div>
        </div>
      );
    }
  
  } 

  export default LoginBox
 
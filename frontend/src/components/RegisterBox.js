import React from "react"
import '../App.css'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      errors: {
        username: '',
        email: '',
        password: '',
      }
      
    };
    
  }
  
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'username': 
        errors.username = 
          value.length < 5
            ? 'Username must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }
    
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      const data = new FormData(event.target);
    
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
    }else{
      console.error('Invalid Form')
    }
  }
  
  render() {
    const {errors} = this.state;
    return (
        <div className="inner-container">
          
          <div className="box">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type='text' name='username' className="login-input" placeholder="Username" onChange={this.handleChange} noValidate />
              {errors.username.length > 0 && 
                <span className='error'>{errors.username}</span>}
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type='email' name='email' className="login-input" placeholder="Email" onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
              <span className='error'>{errors.email}</span>}
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type='password' name='password' className="login-input"
                placeholder="Password" onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <button
              className="login-btn">Register</button>
          </form>
          </div>
        </div>
      );
    }
  }

  export default RegisterBox
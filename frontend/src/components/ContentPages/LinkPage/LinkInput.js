import React from "react"
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"

//import fetch from 'isomorphic-unfetch'

//const API = './api/v1/link';
//const DEFAULT_QUERY = 'GET';

export let parsedPage;
const data = ""

class LinkInput extends React.Component{
 
//wersja 1
async onSubmit(){
  await fetch("/{cokolwiek}")
                    .then((response) => {
                      alert(response);
                      return response.json();
                    })
                    .then((data) => {
                      console.log(data);
                    });
} 
                  
//wersja 2
async getData(url = '/{cokolwiek}', data = "link") {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'link': '{link}'
    },
  })
  .then((response) => {
    alert(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
};
            
  render(){
    return (
        <div> 
            <linkinput className="LinkInput">
                {/* eventually: formAction, formMethod inside of input element
                action should call endpoint on backend */}
                <form>
                    <h1>Paste your link below</h1>
                    <input type="text" name="link"  pattern="https?://.+" required  />
                        <input type="submit" value="Go to website" onChange={this.getData} onSubmit={this.getData} onClick={this.getData} onClickCapture={this.getData} onBlur={this.getData} onInput={this.getData} required>
                          
                        </input>
                    <h5>Remember that your link should start with "http://".</h5>  
                    

                    <Link to="/start-crawling"><button>tymczasowe "go to website"</button></Link>


                </form>
            </linkinput>
        </div>
    )
    }

}
export default LinkInput








/*
formAction='http://127.0.0.1:8000/new-crawl?link=https%3A%2F%2Fwww.wp.pl%2F' formMethod='GET'




stara wersja: 

constructor(props) {
    super(props);
    this.state = {
      values: {
        link: "",
      },
      isSubmitting: false,
      isError: false
    };
  }
  
  changeStatus = () => {
    this.statusChecker = false;
    return statusChecker
  }

  submitForm = async e => {

    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch("./link");
    this.setState({ isSubmitting: false });
    data = await res.json();

    //parsedPage = JSON.parse(data);

    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success})
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { link: ""}
        }),
      1600
    );
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <linkinput className="LinkInput">
      <div>
        <form onSubmit={ this.submitForm } formAction="./link" formMethod="GET"> 
          <div className="input-group">
            <label htmlFor="link"><h1>Paste your link below</h1></label>
            <input
              type="link"
              name="link"
              id="link"
              value={this.state.values.link}
              onChange={this.handleInputChange}
              title="Link"
              formAction='./link'
              formMethod='GET'
              required
            />
          </div>
         <button type="submit" onClick="statusChecker=false">Submit link</button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
          {this.changeState}
        </div>
        <Link to='./start-crawling'><button type="button" disabled={statusChecker} >Go to website</button></Link>
      </div>

      </linkinput>
    );
  }



wersja 2:

constructor(props) {
    super(props);
    this.state = {
      values: {
        link: "",
      },
      isSubmitting: false,
      isError: false
    };
  }
  
  changeStatus = () => {
    this.statusChecker = false;
    return statusChecker
  }

  submitForm = async e => {

    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    fetch(API + DEFAULT_QUERY)
      .then(data => data.json())
      .then(html => this.setState({ hits: html.hits }))
      .then(this.setState({ isSubmitting: false }));

    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success})
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { link: ""}
        }),
      3000
    );
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <linkinput className="LinkInput">
      <div>
        <form onSubmit={ this.submitForm } formAction="./link" formMethod="GET"> 
          <div className="input-group">
            <label htmlFor="link"><h1>Paste your link below</h1></label>
            <input
              type="link"
              name="link"
              id="link"
              value={this.state.values.link}
              onChange={this.handleInputChange}
              title="Link"
              formAction='./link'
              formMethod='GET'
              required
            />
          </div>
         <button type="submit" onClick="statusChecker=false">Submit link</button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
          {this.changeState}
        </div>
        <Link to='./start-crawling'><button type="button" disabled={statusChecker} >Go to website</button></Link>
      </div>

      </linkinput>
    );
  }



z ładowaniem się + fajny fetch: 

 render() {
    const linkTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Paste your link below...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{link: ""}}
              validate={values => {
                let errors = {};
                if (values.link === "") {
                  errors.link = "Link is required";
                } else if (!linkTest(values.link)) {
                  errors.link = "Invalid link format";
                }
                return errors;
              }}
              onSubmit={ async (values, { setSubmitting }) => {
                const res = await fetch(`./${values.link}`, {
                    method: 'GET',
                   }).then(response => response.json());
                console.log(res);
                //props = res;
                //return props;
                setTimeout(() => {
                    alert(JSON.stringify(res, null, 2));
                    setSubmitting(false);
                }, 400);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <Field
                      type="link"
                      name="link"
                      placeholder="Enter link"
                      className={`form-control ${
                        touched.link && errors.link ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="link"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                   {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }



  z ładowaniem się zmienione: 

   render() {
    const linkTest = "";
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Paste your link below...</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{link: ""}}
              validate={values => {
                let errors = {};
                if (values.link === "") {
                  errors.link = "Link is required";
                } /*else if (!linkTest(values.link)) {
                  errors.link = "Invalid link format";
                }
                return errors;
              }}
              onSubmit={ async (values, { setSubmitting }) => {
                const res = await fetch("/link", {
                    method: 'GET',
                    /*
                    body: {
                      "link": {values}
                    }
                    
                   }).then(response => response.json());
                console.log(res);
                this.parsedPage = JSON.html(res);
                //props = res;
                //return props;
                setTimeout(() => {
                    alert(JSON.stringify(res, null, 2));
                    setSubmitting(false);
                }, 2000);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <Field
                      type="link"
                      name="link"
                      placeholder="Enter link"
                      className={`form-control ${
                        touched.link && errors.link ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="link"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                   {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <Link to='./start-crawling'><button type="button" disabled={this.statusChecker} >Go to website</button></Link>
        </div>
      </div>
    );
  }



zaawansowana wersja:

constructor(props) {
        super(props);
        this.state = {
          formValues: {
            link: "",
          },
          formErrors: {
            link: "",
          },
          formValidity: {
            link: false,
          },
          isSubmitting: false
        };
      }
    
      handleChange = ({ target }) => {
        const { formValues } = this.state;
        formValues[target.name] = target.value;
        this.setState({ formValues });
        this.handleValidation(target);
      };
    
      handleValidation = target => {
        const { name, value } = target;
        const fieldValidationErrors = this.state.formErrors;
        const validity = this.state.formValidity;
        const isLink = name === "link";
        const linkTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} is required and cannot be empty`;
    
        if (validity[name]) {
          if (isLink) {
            validity[name] = linkTest.test(value);
            fieldValidationErrors[name] = validity[name]
              ? ""
              : `${name} should be a valid link`;
          }
        }
    
        this.setState({
          formErrors: fieldValidationErrors,
          formValidity: validity
        });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        this.setState({ isSubmitting: true });
        const { formValues, formValidity } = this.state;
        if (Object.values(formValidity).every(Boolean)) {
          alert("Form is validated! Submitting the form...");
          this.setState({ isSubmitting: false });
        } else {
          for (let key in formValues) {
            let target = {
              name: key,
              value: formValues[key]
            };
            this.handleValidation(target);
          }
          this.setState({ isSubmitting: false });
        }
      };
    
      render() {
        const { formValues, formErrors, isSubmitting } = this.state;
        return (
            <linkinput className="LinkInput">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h1 className="mt-5">Login Form</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Link</label>
                    <input
                      type="link"
                      name="link"
                      className={`form-control ${
                        formErrors.link ? "is-invalid" : ""
                      }`}
                      placeholder="Enter link"
                      onChange={this.handleChange}
                      value={formValues.link}
                    />
                    <div className="invalid-feedback">{formErrors.link}</div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          </linkinput>
        );
      }
    }
        const rootElement = document.getElementById("root");
    ReactDOM.render(<LoginForm />, rootElement);




prawdopodobnie dziala:

          render() {
        return (
          <div>
          <h1>Anywhere in your app!</h1>
          <Formik
            initialValues={{ email: ''}}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={ async (values, { setSubmitting }) => {
              const res = await fetch(`./${values.email}`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*'
                  }}).then(response => response.json());
              console.log(res);
              //props = res;
              //return props;
              setTimeout(() => {
                  alert(JSON.stringify(res, null, 2));
                  setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies 
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
    );
}








constructor(props) {
    super(props);
    this.state = {
      values: {
        link: "",
      },
      isSubmitting: false,
      isError: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  statusChecker = () => {
    let statusChecker = true;
    return statusChecker;
  }

  handleClick(status) {
    this.statusChecker = status;
    return this.statusChecker
  }

  submitForm = async e => {

    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch(API + DEFAULT_QUERY)
                .then(response => response.json())
                .then(html => this.setState({ hits: html.hits }))
                .then(this.setState({ isSubmitting: false }));

    alert(JSON.stringify(res, null, 2));
    this.parsedPage = JSON.html();

    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success})
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: { link: "" }
        }),
      1600
    );
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <linkinput className="LinkInput">
      <div>
        <form onSubmit={ this.submitForm } formAction="./link" formMethod="GET"> 
          <div className="input-group">
            <label htmlFor="link"><h1>Paste your link below</h1></label>
            <input
              type="link"
              name="link"
              id="link"
              value={this.state.values.link}
              onChange={this.handleInputChange}
              title="Link"
              formAction='./link'
              formMethod='GET'
              required
            />
          </div>
        <button type="submit" onClick={this.handleClick(false)}>
           Submit link
        </button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
          {this.changeState}
        </div>
        <Link to='./start-crawling'><button type="button" disabled={this.statusChecker} >Go to website</button></Link>
      </div>

      </linkinput>
    );
  }



*/
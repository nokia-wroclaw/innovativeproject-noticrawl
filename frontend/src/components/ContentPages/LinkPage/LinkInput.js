import React from "react"
import { Link } from "react-router-dom";

//prawdopodobnie do wywalenia na koniec 

//import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup"

//import fetch from 'isomorphic-unfetch'

//const API = '/new-crawl';
//const DEFAULT_QUERY = 'redux';

//const data = ""
//const ws = new WebSocket("ws://localhost:8000/ws");

class LinkInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      values: {
        link: ""
      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    //communication with backend
    const res = await fetch("/new-crawl", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      },
    });

    //wyświetlanie tego co daje backendowi - w celu testowania (do usunięcia potem)
    alert(JSON.stringify(this.state.values))

    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });
    alert(data.parsedPage); //spróbować ewentualnie stringify
    
    //setting parsed code received from backend to the variable, which will be exported 
    //nie działa (problem: aktualizacja zmiennej tutaj nie aktualizuje zmiennej eksportowanej)
    this.externalPageToRender = data.parsedPage;
    
    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          values: {link: "" }
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
      <div className="LinkInput">
        <form onSubmit={this.submitForm}>
          <div className="input-group">
            <label htmlFor="link"><h1>Paste your link below</h1></label>
            <input
              type="link"
              name="link"
              id="link"
              value={this.state.values.link}
              onChange={this.handleInputChange}
              title="link"
              required
            />
          </div>
          <button type="submit">Go to website</button>
        </form>
        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Submitting..." : this.state.message}
        </div>
        <Link to="/start-crawling"><button>working "go to website" button</button></Link>
      </div>
    );
  }
}

export default LinkInput

export let externalPageToRender = <h1>hardcoded writing, which should disappear if everything is ok</h1>;


/*

///////////////////////////////////////////////////////////
wersja 1.1:
/////////////////////////////////////////////////////////

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
  await fetch("/new-crawl")
    .then(
      response => {
      response.json();
      alert(response);
    })
    .then(data => console.log(data.link));
} 
                  
//wersja 2
async getData(url = '/new-crawl', data = "link") {
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
                action should call endpoint on backend 
                <form>
                    <h1>Paste your link below</h1>
                    <input type="text" name="link"  pattern="https?://.+" required  />
                        <input type="submit" value="Go to website" onChange={this.onSubmit} onSubmit={this.onSubmit} onClick={this.onSubmit} onClickCapture={this.onSubmit} onBlur={this.onSubmit} onInput={this.onSubmit} required>
                          
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


////////////////////////////////////////////////////////////////////////
wersja 2:
///////////////////////////////////////////////////////////////////////

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
*/
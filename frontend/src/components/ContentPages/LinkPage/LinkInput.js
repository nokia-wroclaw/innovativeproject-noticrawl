import React from "react"
import { Link } from "react-router-dom";
//import { MContext, Consumer } from "../Provider";

class LinkInput extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      values: {
        link: ""
      },
      parsedPageToExport: "",
      //externalPageToRender: "",
      isSubmitting: false,
      isError: false
    };
  }

submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    //communication with backend
    const res = await fetch("/api/v1/new-crawl", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json"
      },
    });

    //////////////////////////////////////////////////////
    //showing what frontend send to backend (to delete later)
    alert(JSON.stringify(this.state.values))
    //////////////////////////////////////////////////////

    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    //////////////////////////////////////////////////////
    //showing what backend returns to frontend (to delete later) 
    alert(data.parsedPage); 
    //////////////////////////////////////////////////////


    //setting parsed code received from backend to the variable, which will be exported
    this.setState({parsedPageToExport: data.parsedPage}) 

  
    setTimeout(
      () => {
        this.setState({
          isError: false,
          message: "",
          values: {link: "" }
        })
        window.location.replace = "/start-crawling"; //other version: link location href
      },
      1600
    );
    //return parsedPageToExport = data.parsedPage; //potem zmienić na JSON.stringify(data.parsedPage)
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <div>
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

        {/* temporary button until auto redirecting will work */}
        <Link to={{
          pathname: "/new-crawl/start-crawling",
          state: {
            externalPageToRender: this.state.parsedPageToExport,
          }
        }}>
          <button>working "go to website" button</button>
        </Link>
      </div>
      </div>
    );
  }
}

export default LinkInput

/*
const sendMessage = () => <MContext.Consumer>{(context) => (context.setMessage("New Arrival"))}</MContext.Consumer>    
sendMessage();
*/
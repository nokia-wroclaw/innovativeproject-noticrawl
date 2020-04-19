import React from "react"
import { Link } from "react-router-dom";

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
    this.externalPageToRender = data.parsedPage;
    //nie działa (problem: aktualizacja zmiennej tutaj nie aktualizuje zmiennej eksportowanej)

    setTimeout(
      () => {
        this.setState({
          isError: false,
          message: "",
          values: {link: "" }
        })
        window.location.href = "http://127.0.0.1:8000/new-crawl/start-crawling";
      },
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

        {/* temporary button until auto redirecting will work */}
        <Link to="/start-crawling"><button>working "go to website" button</button></Link>

      </div>
    );
  }
}

export default LinkInput

export let externalPageToRender = <h1>hardcoded writing, which should disappear if everything is ok</h1>;
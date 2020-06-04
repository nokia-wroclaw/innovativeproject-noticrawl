import React, {Component} from "react"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddingScripts } from "./AddingScripts.js"

class NewCrawlContent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      values: {
        link: "",
      },
      parsedPageToExport: "",
      isSubmitting: false,
      isError: false
    };
  }


submitForm = async e => {
    e.preventDefault();

    const url = {
      url: this.state.values.link.toString()
    };
    
    this.setState({ isSubmitting: true });

    //communication with backend
    const res = await fetch("/api/v1/page", {
      method: "POST",
      body: JSON.stringify(url),
      headers: {
        "Content-Type": "application/json"
      },
    });

    this.setState({ isSubmitting: false });

    let data = await res.json();

    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    data = {
      parsedPage: data.html
    };

    data.parsedPage = data.parsedPage + AddingScripts 

    //setting parsed code received from backend to the variable, which will be exported
    this.setState({parsedPageToExport: data.parsedPage}) 
    
    setTimeout(
      () => {
        this.setState({
          isError: false,
          message: "",
        })
        document.getElementById("sendCrawlData").click()
      },
      500
    );
  };



  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });



  render() {
    return (
      <div>
      <div className="PageContent">
        <form onSubmit={this.submitForm}>
            <h1>Paste your link below</h1>
            <FormControl style={{ width: '40ch'}} variant="outlined">
              <input value={this.state.values.link} pattern="https?://.+" hidden="true"></input>
              <OutlinedInput
                type="text"
                name="link"
                id="linkInput"
                value={this.state.values.link}
                onChange={this.handleInputChange}
                style={{ marginBottom: '0px' }}  
                required
              />
                <FormHelperText style={{ marginLeft: "-25px", width: '500px'}} id="helper-text">
                    Remember, that your link should start with "http://" or "https://".
                </FormHelperText> 

            </FormControl>

            <div>
            <Button variant="contained" color="primary" type="submit" id="linkSubmit">Go to website</Button>
            </div> 
      
        </form>

        <div className={`message ${this.state.isError && "error"}`}>
          {this.state.isSubmitting ? "Please wait..." : this.state.message}
        </div>

        <Link to={{
          pathname: "/new-crawl/start-crawling",
          state: {
            externalPageToRender: this.state.parsedPageToExport,
            url: this.state.values.link
          }
        }}>
          <button id="sendCrawlData" hidden="true"/>
        </Link>
      </div>
      </div>
    );
  }

}
export default NewCrawlContent

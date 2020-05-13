import React, {Component} from "react"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddingScripts } from "./AddingScrpits.js"



class LinkInput extends Component{

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
    console.log(this.state);
    this.setState({ isSubmitting: true });

    //communication with backend
    const url = {
      url: this.state.values.link.toString()
    };
    const res = await fetch("/api/v1/page", {
      method: "POST",
      body: JSON.stringify(url),
      headers: {
        "Content-Type": "application/json"
      },
    });


    //////////////////////////////////////////////////////
    //showing what frontend send to backend (to delete later)
    // alert(JSON.stringify(this.state.values))
    //////////////////////////////////////////////////////

    this.setState({ isSubmitting: false });
    let data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });
    data = {
      parsedPage: data.html
    };
    //////////////////////////////////////////////////////
    //showing what backend returns to frontend (to delete later)
    //alert(data.parsedPage);
    //////////////////////////////////////////////////////


    data.parsedPage = data.parsedPage + AddingScripts 




//setting parsed code received from backend to the variable, which will be exported
this.setState({parsedPageToExport: data.parsedPage}) 


/* automatic redirecting - not work
    const redirect = () => {
      return(
        <Link to={{
          pathname: "/new-crawl/start-crawling",
          state: {
            externalPageToRender: this.state.parsedPageToExport,
          }
        }}>
          {window.location.replace("./new-crawl/start-crawling")}
        </Link>
      );
    }  
*/

    setTimeout(
      () => {
        this.setState({
          isError: false,
          message: "",
        })
        //redirect();
      },
      1000
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
          
            {/* alternative version
            <TextField 
            style={{ width: '50ch' }} 
            id="filled-link" 
            label="Your link" 
            type="link" 
            variant="filled" 
            helperText='Remember, that your link should start with "http://" or "https://".'
            value={this.state.values.link}
            required/>
            */}

            {/* classic version
            <label htmlFor="link"><h1>Paste your link below</h1></label>
            <input
              type="text"
              name="link"
              id="link"
              value={this.state.values.link}
              onChange={this.handleInputChange}
              title="http://yourlink.com or https://yourlink.com"
              pattern="https?://.+"
              required
            />
            <button type="submit">Go to website</button>
            */}

            <div>
            <Button variant="contained" color="primary" type="submit" id="linkSubmit">STEP 1: Submit website</Button>
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
          <Button variant="contained" color="primary" disableElevation >STEP 2: Go to website</Button>
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
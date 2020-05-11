import React, {Component} from "react"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';


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


// document.getElementById("d").style.pointerEvents

    var AddingScripts = `
<script type='text/javascript'>

window.onload=function() {
  var anchors = document.getElementsByTagName('a');
  for(var i=anchors.length-1;i>=0;i--){
  anchors[i].onclick=function() { return false }
  }}

  
var outer = document.createElement("div");
outer.setAttribute("id", "outer");
outer.setAttribute("class", "outer");
document.body.appendChild(outer);
outer.style.background = 'rgba(37, 172, 131, 0.2)';
outer.style.position = 'absolute';
outer.style.zIndex = 65000000;


var selector = document.createElement("div");
selector.setAttribute("id", "selector");
document.body.appendChild(selector);
selector.style.borderStyle  = "solid";
selector.style.borderWidth  = "3px";
selector.style.borderColor  = "blue";
selector.style.position = 'absolute';
selector.style.zIndex = 65000000;
selector.style.pointerEvents = "none";
selector.style.transition = 'all 300ms ease';


// var topSelector = document.createElement("div");
// topSelector.setAttribute("id", "selector-top");
// selector.appendChild(topSelector);
// topSelector.style.background = 'blue';
// topSelector.style.position = 'absolute';
// topSelector.style.height = '3px';
// topSelector.style.zIndex = 65000000;
// topSelector.style.transition = 'all 300ms ease';


// var leftSelector = document.createElement("div");
// leftSelector.setAttribute("id", "selector-left");
// selector.appendChild(leftSelector);
// leftSelector.style.background = 'blue';
// leftSelector.style.position = 'absolute';
// leftSelector.style.width = '3px';
// leftSelector.style.zIndex = 65000000;
// leftSelector.style.transition = 'all 300ms ease';


// var rightSelector = document.createElement("div");
// rightSelector.setAttribute("id", "selector-right");
// selector.appendChild(rightSelector);
// rightSelector.style.background = 'blue';
// rightSelector.style.position = 'absolute';
// rightSelector.style.width = '3px';
// rightSelector.style.zIndex = 65000000;
// rightSelector.style.transition = 'all 300ms ease';


// var bottomSelector = document.createElement("div");
// bottomSelector.setAttribute("id", "selector-bottom");
// selector.appendChild(bottomSelector);
// bottomSelector.style.background = 'blue';
// bottomSelector.style.position = 'absolute';
// bottomSelector.style.height = '3px';
// bottomSelector.style.zIndex = 65000000;
// bottomSelector.style.transition = 'all 300ms ease';



var TurnOffBordering = 1;

var xpathIframe = 5;

function drawBorder(e) {

  if (TurnOffBordering == 0) {
    return;
  }


  var target = e.target;

  if (target.id === "selector" ) return;

      selector.style.display = 'block';

  var targetRect = target.getBoundingClientRect();

  selector.style.display = "block";
  selector.style.width = targetRect.width + "px";
  selector.style.height = targetRect.height + "px";
  selector.style.left = targetRect.left + "px";
  selector.style.top = targetRect.top + window.scrollY + "px";


  // topSelector.style.width = targetRect.width + "px";
  // topSelector.style.left = targetRect.left + "px";
  // topSelector.style.top = targetRect.top + window.scrollY + "px";

  // bottomSelector.style.width = targetRect.width + "px";
  // bottomSelector.style.left = targetRect.left + "px";
  // bottomSelector.style.top = targetRect.top + targetRect.height - 3 + window.scrollY + "px";

  // leftSelector.style.height = targetRect.height + "px";
  // leftSelector.style.left = targetRect.left + "px";
  // leftSelector.style.top = targetRect.top + window.scrollY + "px";

  // rightSelector.style.height = targetRect.height + "px";
  // rightSelector.style.left = targetRect.left + targetRect.width + "px";
  // rightSelector.style.top = targetRect.top + window.scrollY + "px";
}

function UpdateBorders() {
  selector.style.display = 'none';
  outer.style.display = "none";
}

function removeHighlight(e) {
  var target = e.target;
  if (target && target.className === "outer") {
    outer.style.display = "none";
  }
}

function select(e) {
  
  if (TurnOffBordering == 0) {
    return;
  }

  var target = e.target;

  if (target.id == "outer" || 
  target.id == "selector") return;

  getElementXPath(e);

  var targetRect = target.getBoundingClientRect();

  outer.style.display = "block";
  outer.style.width = targetRect.width + "px";
  outer.style.height = targetRect.height + "px";
  outer.style.left = targetRect.left + "px";
  outer.style.top = targetRect.top + window.scrollY + "px";

  console.log("xpath: "+ xpathIframe)
}

function getElementTreeXPath(element) {
  var paths = [];
  var target = element.target;

  for (; target && target.nodeType === 1; target = target.parentNode) {
    var index = 0;
    // EXTRA TEST FOR target.ID
    if (target && target.id) {
      paths.splice(0, 0, '/*[@id="' + target.id + '"]');
      break;
    }

    for (var sibling = target.previousSibling; sibling; sibling = sibling.previousSibling) {
      // Ignore document type declaration.
      if (sibling.nodeType === Node.DOCUMENT_TYPE_NODE)
        continue;

      if (sibling.nodeName === target.nodeName)
        ++index;

    }

    var tagName = target.nodeName.toLowerCase();
    var pathIndex = (index ? "[" + (index + 1) + "]" : "");
    paths.splice(0, 0, tagName + pathIndex);
  }

  xpathIframe = paths.length ? "/" + paths.join("/") : null;
  return paths.length ? "/" + paths.join("/") : null;
};

function getElementXPath(element) {
  var target = element.target;

  if (target && target.id){
    xpathIframe = '//*[@id="' + target.id + '"]'
    return '//*[@id="' + target.id + '"]';
  }
  else
    return getElementTreeXPath(element);
};


  window.addEventListener('click', removeHighlight);
  window.addEventListener('mousemove', drawBorder);
  window.addEventListener('click', select);


</script>`

 

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
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
      title1: "Click hereaa",  // TUTAJ DODAŁEM TO - DAWID
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
    var AddingScripts = `<div>
    <div id='empty'></div>
    <div id='outer' class='outer'></div>
    <div id="selector">
      <div id="selector-top"></div>
      <div id="selector-left"></div>
      <div id="selector-right"></div>
      <div id="selector-bottom"></div>
    </div>
  </div>


<script type='text/javascript'>

var xpathIframe = 5;
function drawBorder(e) {

  // if (this.state.borderState == 0) {
  //   return;
  // }
  var selectorTop = document.getElementById('selector-top').style
  selectorTop.background = 'blue';
  selectorTop.position = 'absolute';
  selectorTop.height = '3px';
  selectorTop.zIndex = 65000000;
  selectorTop.transition = 'all 300ms ease';

  var selectorBot = document.getElementById('selector-bottom').style
  selectorBot.background = 'blue';
  selectorBot.position = 'absolute';
  selectorBot.height = '3px';
  selectorBot.zIndex = 65000000;
  selectorBot.transition = 'all 300ms ease';

  var selectorLeft = document.getElementById('selector-left').style
  selectorLeft.background = 'blue';
  selectorLeft.position = 'absolute';
  selectorLeft.width = '3px';
  selectorLeft.zIndex = 65000000;
  selectorLeft.transition = 'all 300ms ease';

  var selectorRight = document.getElementById('selector-right').style
  selectorRight.background = 'blue';
  selectorRight.position = 'absolute';
  selectorRight.width = '3px';
  selectorRight.zIndex = 65000000;
  selectorRight.transition = 'all 300ms ease';

  var target = e.target;

  if (target.id === "selector-top" ||
      target.id === "selector-bottom" ||
      target.id === "selector-left" ||
      target.id === "selector-right") return;

  document.getElementById("selector").style.display = 'block';

  var targetRect = target.getBoundingClientRect();
  console.log("Działa!");
  var top = document.getElementById("selector-top").style;
  top.width = targetRect.width + "px";
  top.left = targetRect.left + "px";
  top.top = targetRect.top + window.scrollY + "px";

  var bot = document.getElementById("selector-bottom").style;
  bot.width = targetRect.width + "px";
  bot.left = targetRect.left + "px";
  bot.top = targetRect.top + targetRect.height - 3 + window.scrollY + "px";

  var left = document.getElementById("selector-left").style;
  left.height = targetRect.height + "px";
  left.left = targetRect.left + "px";
  left.top = targetRect.top + window.scrollY + "px";

  var right = document.getElementById("selector-right").style;
  right.height = targetRect.height + "px";
  right.left = targetRect.left + targetRect.width + "px";
  right.top = targetRect.top + window.scrollY + "px";
}

function removeHighlight(e) {
  var target = e.target;
  if (target && target.className === "outer") {
      document.getElementById("outer").style.display = "none";
  }
}

function select(e) {

document.getElementById('outer').style.background = 'rgba(37, 172, 131, 0.2)';
document.getElementById('outer').style.position = 'absolute';
document.getElementById('outer').style.zIndex = 65000000;


  var target = e.target;


  if (target.id == "outer" || 
  target.id == "selector-top" ||
  target.id == "selector-bottom" ||
  target.id == "selector-left" ||
  target.id == "selector-right") return;

  getElementXPath(e);

  // this.setState({ title: getElementXPath(target) });
  var targetRect = target.getBoundingClientRect();
  var outer = document.getElementById("outer").style;
  outer.display = "block";
  outer.width = targetRect.width + "px";
  outer.height = targetRect.height + "px";
  outer.left = targetRect.left + "px";
  outer.top = targetRect.top + window.scrollY + "px";

}

function getElementTreeXPath(element) {
  var paths = [];
  console.log("start drugiej funkcji");
  var target = element.target;
  console.log("druga funkcja target: " + target);
  console.log("target.nodeType: " + target.nodeType);
  console.log("target.parentNode: " + target.parentNode);


  for (; target && target.nodeType === 1; target = target.parentNode) {
    var index = 0;
    console.log("index w pętli: " + index);

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
  console.log("druga funckja końcówka i jego xpathIframe: "+ xpathIframe);

  return paths.length ? "/" + paths.join("/") : null;
};

function getElementXPath(element) {
  var target = element.target;
  console.log("pierwsza funkcja target: " + target);
  console.log("target.id: " + target.id);


  if (target && target.id){
    xpathIframe = '//*[@id="' + target.id + '"]'
    console.log("pierwsza funkcja xpathIframe: " + xpathIframe);

    return '//*[@id="' + target.id + '"]';
  }
  else
    return getElementTreeXPath(element);
};





  window.addEventListener('click', removeHighlight);
  window.addEventListener('mousemove', drawBorder);
  window.addEventListener('click', select);


</script>`
    var x = data.parsedPage;
    x = x.slice(0,-14)
    data.parsedPage = x;

    data.parsedPage = data.parsedPage + AddingScripts + "</body></html>";
    alert(data.parsedPage);

    





    // TUTAJ DODAŁEM TO \/ - DAWID

    // this.setState({title1: data.parsedPage})
    // const element = document.createElement("a");
    // const file = new Blob([this.state.title1], {type: 'text/plain'});
    // element.href = URL.createObjectURL(file);
    // element.download = "myFile.html";
    // document.body.appendChild(element); // Required for this to work in FireFox
    // element.click();

// TUTAJ DODAŁEM TO /\- DAWID


    //////////////////////////   this.setState({ title: getElementXPath(target) });
////////////////////////////


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
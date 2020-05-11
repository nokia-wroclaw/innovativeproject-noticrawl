import React from 'react';
import $ from 'jquery';
import TopBanner from './TopBanner';
import ExternalHtml from './ExternalHtml';
import './Crawling.css';
import RenderBanner from './RenderBanner';



// function changeFrame(toggle)
// {
//   var x = toggle
//   alert(x)
//   var oIframe = document.getElementById('pageFrame');
//   var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
//   if (oDoc.document) oDoc = oDoc.document;
//   oDoc.TurnOffBordering2 = toggle;
  
//   return true;
// }



var getElementTreeXPath = function (element) {
  var paths = [];

  // Use nodeName (instead of localName) so namespace prefix is included (if any).
  for (; element && element.nodeType === 1; element = element.parentNode) {
    var index = 0;
    // EXTRA TEST FOR ELEMENT.ID
    if (element && element.id) {
      paths.splice(0, 0, '/*[@id="' + element.id + '"]');
      break;
    }

    for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
      // Ignore document type declaration.
      if (sibling.nodeType === Node.DOCUMENT_TYPE_NODE)
        continue;

      if (sibling.nodeName === element.nodeName)
        ++index;
    }

    var tagName = element.nodeName.toLowerCase();
    var pathIndex = (index ? "[" + (index + 1) + "]" : "");
    paths.splice(0, 0, tagName + pathIndex);
  }

  return paths.length ? "/" + paths.join("/") : null;
};

var getElementXPath = function (element) {
  if (element && element.id)
    return '//*[@id="' + element.id + '"]';
  else
    return getElementTreeXPath(element);
};


// TO MOŻNA POTEM USUNĄĆ \/
//Wyświetlanie xPath
var currentElement = null;
document.addEventListener('mouseover', function (e) {
  currentElement = e.target;
});

setInterval(function () {
  $('#status').text('The current element is: ' + (getElementXPath(currentElement)) + '.');
}, 1);
// TO MOŻNA POTEM USUNĄĆ /\



function HelpElements() {
  return (
    <div>
      <div id='empty'></div>
      <div id='outer' class='outer'></div>
      <div id="selector">
        <div id="selector-top"></div>
        <div id="selector-left"></div>
        <div id="selector-right"></div>
        <div id="selector-bottom"></div>
      </div>
    </div>
  );
}


class Crawling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Click here",
      xpath: ""
    };
    this.state = { borderState: 0 };

    // this.select = this.select.bind(this);
    // // this.handleLoad = this.handleLoad.bind(this);
    // this.drawBorder = this.drawBorder.bind(this);
    // // this.deleteBorder = this.deleteBorder.bind(this);
    // this.TakeXpath = this.TakeXpath.bind(this);

  }





  // componentDidMount() {
  //   window.addEventListener('click', this.removeHighlight);
  //   document.getElementById("Content").addEventListener('mousemove', this.drawBorder);
  //   document.getElementById("CrawlingBanner").addEventListener('mousemove', this.deleteBorder);
  //   window.addEventListener('scroll', this.deleteBorder);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('click', this.removeHighlight);
  //   document.getElementById("Content").removeEventListener('mousemove', this.drawBorder);
  //   document.getElementById("CrawlingBanner").removeEventListener('mousemove', this.deleteBorder);
  //   window.removeEventListener('scroll', this.deleteBorder);
  // }

  // deleteBorder() {
  //   document.getElementById("selector").style.display = 'none';
  // }

  // drawBorder(e) {

  //   if (this.state.borderState == 0) {
  //     return;
  //   }

  //   var target = e.target;

  //   if (target.id === "selector-top" ||
  //     target.id === "selector-bottom" ||
  //     target.id === "selector-left" ||
  //     target.id === "selector-right") return;

  //   document.getElementById("selector").style.display = 'block';

  //   var targetRect = target.getBoundingClientRect();

  //   var top = document.getElementById("selector-top").style;
  //   top.width = targetRect.width + "px";
  //   top.left = targetRect.left + "px";
  //   top.top = targetRect.top + "px";

  //   var bot = document.getElementById("selector-bottom").style;
  //   bot.width = targetRect.width + "px";
  //   bot.left = targetRect.left + "px";
  //   bot.top = targetRect.top + targetRect.height - 3 + "px";

  //   var left = document.getElementById("selector-left").style;
  //   left.height = targetRect.height + "px";
  //   left.left = targetRect.left + "px";
  //   left.top = targetRect.top + "px";

  //   var right = document.getElementById("selector-right").style;
  //   right.height = targetRect.height + "px";
  //   right.left = targetRect.left + targetRect.width + "px";
  //   right.top = targetRect.top + "px";
  // }

  // removeHighlight(e) {
  //   var target = e.target;
  //   if (target && target.className === "outer") {
  //     document.getElementById("outer").style.display = "none";
  //   }
  // }

  // select = (e) => {

  //   var target = e.target;
  //   this.setState({ title: getElementXPath(target) });
  //   var targetRect = target.getBoundingClientRect();
  //   var outer = document.getElementById("outer").style;
  //   outer.display = "block";
  //   outer.width = targetRect.width + "px";
  //   outer.height = targetRect.height + "px";
  //   outer.left = targetRect.left + "px";
  //   outer.top = targetRect.top + window.scrollY + "px";


  //   /* old
  //   var target = e.target;
  //   this.setState({ title: getElementXPath(target) });
  //   var outer = document.getElementById("outer").style
  //   outer.display = "block";
  //   outer.width = target.offsetWidth +"px";
  //   outer.height = target.offsetHeight +"px";
  //   outer.left = target.offsetLeft +"px";
  //   outer.top = target.offsetTop +"px";
  //   */
  // };

  callbackFunction = (borderSwitchState) => {
    this.setState({ borderState: borderSwitchState });
    console.log(this.state.borderState)
    document.getElementById("pageFrame").contentWindow.TurnOffBordering = this.state.borderState;
    document.getElementById("pageFrame").contentWindow.UpdateBorders();
  };

  TakeXpath (){
    let takeXpath = document.getElementById("pageFrame").contentWindow.xpathIframe;
    return takeXpath
  }

  render() {
    return (
      <div>
        <RenderBanner Callback={this.callbackFunction} borderState={this.state.borderState} xpathFromParent={this.TakeXpath} />
        <HelpElements />

        <div id='Content'>
          {/* <button onClick={this.TakeXpath}>Check xPath!</button> */}

          {/* rendering page to crawl */}
          <ExternalHtml />

          {/*this.state.borderState*/}
          
        </div>
      </div>
    
    );
  }
}


export default Crawling;
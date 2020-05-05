import React from 'react';
import { useLocation } from 'react-router-dom';

//rendering external html
function ExternalHtml() {

  // const externalPageToRender =  useLocation().state.externalPageToRender;
  const takeExternalPageToRender =  useLocation();

  // const externalPageToRender = 
  // `<html>
  //   <body id='body'>  
  
  //   <h2 id='aaaaasdasdasdasd'>testowy element</h2>

  //   <h4>element dddh4</h4>
  //   <h1>Welcome</h1>
  //   <button class="n">Click me</button>
  //   <button id="testButton">DON'T click me!</button>
  //   <button onClick={function a () {alert('Kliknięto!')} }>Kliknij!</button>

  //   <div>Witaj, </div>


  //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //   Explicabo voluptates doloremque quisquam omnis rem fuga
  //   veritatis odit! Perferendis cupiditate corporis consequuntur
  //   amet ducimus quam       <button class="n">Click me1</button>
  //   at magni facilis debitis ut quisquam molestias
  //   maxime voluptatibus voluptatum    <div>     sadasdsasadasdsa <button class="n">Click me2</button>
  //     </div>  <button class="n">Click me3</button>

      

  //     <div>
  //       <div id='empty'></div>
  //       <div id='outer' class='outer'></div>
  //       <div id="selector">
  //         <div id="selector-top"></div>
  //         <div id="selector-left"></div>
  //         <div id="selector-right"></div>
  //         <div id="selector-bottom"></div>
  //       </div>
  //     </div>

  //   </body>
  //   </html>

  //   <script type='text/javascript'>

  //   function deleteBorder() {
  //     document.getElementById("selector").style.display = 'none';
  // }
  
  // function drawBorder(e) {
  
  //     // if (this.state.borderState == 0) {
  //     //   return;
  //     // }
  //     var selectorTop = document.getElementById('selector-top').style
  //     selectorTop.background = 'blue';
  //     selectorTop.position = 'fixed';
  //     selectorTop.height = '3px';
  //     selectorTop.zIndex = 65000000;
  //     selectorTop.transition = 'all 300ms ease';

  //     var selectorBot = document.getElementById('selector-bottom').style
  //     selectorBot.background = 'blue';
  //     selectorBot.position = 'fixed';
  //     selectorBot.height = '3px';
  //     selectorBot.zIndex = 65000000;
  //     selectorBot.transition = 'all 300ms ease';

  //     var selectorLeft = document.getElementById('selector-left').style
  //     selectorLeft.background = 'blue';
  //     selectorLeft.position = 'fixed';
  //     selectorLeft.width = '3px';
  //     selectorLeft.zIndex = 65000000;
  //     selectorLeft.transition = 'all 300ms ease';

  //     var selectorRight = document.getElementById('selector-right').style
  //     selectorRight.background = 'blue';
  //     selectorRight.position = 'fixed';
  //     selectorRight.width = '3px';
  //     selectorRight.zIndex = 65000000;
  //     selectorRight.transition = 'all 300ms ease';

  //     var target = e.target;
  
  //     if (target.id === "selector-top" ||
  //         target.id === "selector-bottom" ||
  //         target.id === "selector-left" ||
  //         target.id === "selector-right") return;
  
  //     document.getElementById("selector").style.display = 'block';
  
  //     var targetRect = target.getBoundingClientRect();
  //     console.log(targetRect);
  //     var top = document.getElementById("selector-top").style;
  //     top.width = targetRect.width + "px";
  //     top.left = targetRect.left + "px";
  //     top.top = targetRect.top + "px";
  
  //     var bot = document.getElementById("selector-bottom").style;
  //     bot.width = targetRect.width + "px";
  //     bot.left = targetRect.left + "px";
  //     bot.top = targetRect.top + targetRect.height - 3 + "px";
  
  //     var left = document.getElementById("selector-left").style;
  //     left.height = targetRect.height + "px";
  //     left.left = targetRect.left + "px";
  //     left.top = targetRect.top + "px";
  
  //     var right = document.getElementById("selector-right").style;
  //     right.height = targetRect.height + "px";
  //     right.left = targetRect.left + targetRect.width + "px";
  //     right.top = targetRect.top + "px";
  // }
  
  // function removeHighlight(e) {
  //     var target = e.target;
  //     if (target && target.className === "outer") {
  //         document.getElementById("outer").style.display = "none";
  //     }
  // }
  
  // function select(e) {
  


    
  //   document.getElementById('outer').style.background = 'rgba(37, 172, 131, 0.2)';
  //   document.getElementById('outer').style.position = 'absolute';
  //   document.getElementById('outer').style.zIndex = 65000000;

  //     var target = e.target;
  //     // this.setState({ title: getElementXPath(target) });
  //     var targetRect = target.getBoundingClientRect();
  //     var outer = document.getElementById("outer").style;
  //     outer.display = "block";
  //     outer.width = targetRect.width + "px";
  //     outer.height = targetRect.height + "px";
  //     outer.left = targetRect.left + "px";
  //     outer.top = targetRect.top + window.scrollY + "px";
  
  // }

  //     window.addEventListener('click', removeHighlight);
  //     document.addEventListener('mousemove', drawBorder);
  //     document.getElementById("body").addEventListener('mousemove', drawBorder);
  //     document.getElementById("testButton").addEventListener('click', drawBorder);
  //     document.addEventListener('click', select);
  //     window.addEventListener('scroll', deleteBorder);

  //   </script>
  //   `

  //   ;

  // const script = `<script type='text/javascript'>
  //   var body = document.getElementById("body");
  //   console.log("In script");
  //   body.addEventListener('click', alert('I am a placeholder'))
  //   </script>`;

  return (
    <div>
      <iframe
        id="pageFrame"
        name="pageFrame"
        src={takeExternalPageToRender.state.externalPageToRender}
        srcDoc={takeExternalPageToRender.state.externalPageToRender}
        allow="fullscreen"
        importance="high"
        referrerPolicy="unsafe-url"
        sandbox="allow-popups allow-scripts allow-same-origin"
        frameBorder="100"
      />

      {/* <div dangerouslySetInnerHTML={{ __html: takeExternalPageToRender.state.externalPageToRender }} /> */}

    </div>
  );

}
export default ExternalHtml;
/*
oryginalne:

import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class ExternalHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;
    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }

}
export default ExternalHtml;






import React from 'react';
import { useLocation } from 'react-router-dom';

//import{MContext, Consumer} from "../Provider";

//importing received from backend html in LinkInput file
//import {externalPageToRender} from '../LinkPage/LinkInput'

//rendering external html
function ExternalHtml () {

const externalPageToRender =  useLocation();

    return (
      <div>

    <h1>{html(externalPageToRender.state.externalPageToRender)}</h1>

        {/*
      <MContext.Consumer>
        {(context) => (
         <h1>{context.state.message}</h1>)}
      </MContext.Consumer>


        </div>

        );

      }
    export default ExternalHtml;


*/
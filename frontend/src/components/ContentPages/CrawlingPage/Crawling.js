import React from 'react';
import $ from 'jquery';
import TopBanner from './TopBanner'
import ExternalHtml from './ExternalHtml'
import './Crawling.css';

var getElementTreeXPath = function(element) {
  var paths = [];

  // Use nodeName (instead of localName) so namespace prefix is included (if any).
  for (; element && element.nodeType === 1; element = element.parentNode)  {
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
      var pathIndex = (index ? "[" + (index+1) + "]" : "");
      paths.splice(0, 0, tagName + pathIndex);
  }

  return paths.length ? "/" + paths.join("/") : null;
};

var getElementXPath = function(element) {
  if (element && element.id)
      return '//*[@id="' + element.id + '"]';
  else
      return getElementTreeXPath(element);
};






// TO MOŻNA POTEM USUNĄĆ \/
var currentElement = null;
document.addEventListener('mouseover', function (e) {
  currentElement = e.target;});

setInterval(function() {
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
    };
    this.state = { borderState: 1 }
    this.select = this.select.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.border = this.border.bind(this);
    this.borderDel = this.borderDel.bind(this);

}
callbackFunction = (banner) => {
  this.setState({borderState: banner})
}



componentDidMount() {
  window.addEventListener('click', this.handleLoad);
  document.getElementById("Content").addEventListener('mousemove', this.border);
  document.getElementById("CrawlingBanner").addEventListener('mousemove', this.borderDel);
  window.addEventListener('mousewheel', this.borderDel);
}

componentWillUnmount() { 
 window.removeEventListener('click', this.handleLoad)
 document.getElementById("Content").removeEventListener('mousemove', this.border);
 document.getElementById("CrawlingBanner").removeEventListener('mousemove', this.borderDel);
 window.removeEventListener('mousewheel', this.borderDel);
}
borderDel(){
  document.getElementById("selector").style.display = 'none';
}
border(e){
  
  if (this.state.borderState == 0) 
  {
    return;
  }
  var target = e.target;

  if (target.id === "selector-top" || 
      target.id === "selector-bottom" || 
      target.id === "selector-left" || 
      target.id === "selector-right") return;

  document.getElementById("selector").style.display = 'block';

  var targetOffset = target.getBoundingClientRect(),
      targetHeight = targetOffset.height,
      targetWidth  = targetOffset.width;

  var top = document.getElementById("selector-top").style;
      top.width = targetWidth +"px";
      top.left = targetOffset.left +"px";
      top.top = targetOffset.top +"px";

  var bot = document.getElementById("selector-bottom").style;
      bot.width = targetWidth +"px";
      bot.left = targetOffset.left +"px";
      bot.top = targetOffset.top + targetHeight -3 +"px";

  var left = document.getElementById("selector-left").style;
      left.height = targetHeight +"px";
      left.left = targetOffset.left +"px";
      left.top = targetOffset.top + "px";

  var right = document.getElementById("selector-right").style;
      right.height = targetHeight +"px";
      right.left = targetOffset.left + targetWidth +"px";
      right.top = targetOffset.top + "px";
    }

handleLoad(e) {
  var target = e.target;
  if (target && target.className === "outer" ) 
  {   
      document.getElementById("outer").style.display = "none";
      
    }
}

select = (e) => {

  var target = e.target;
  this.setState({ title: getElementXPath(target) });
  var targetOffset = target.getBoundingClientRect();
  var outer = document.getElementById("outer").style;
  outer.display = "block";
  outer.width = targetOffset.width +"px";
  outer.height = targetOffset.height +"px";
  outer.left = targetOffset.left +"px";
  outer.top = targetOffset.top +window.scrollY+"px";


  /* old
  var target = e.target;
  this.setState({ title: getElementXPath(target) });
  var outer = document.getElementById("outer").style
  outer.display = "block";
  outer.width = target.offsetWidth +"px";
  outer.height = target.offsetHeight +"px";
  outer.left = target.offsetLeft +"px";
  outer.top = target.offsetTop +"px";
  */
};


render() {
    return (
      <div>
        <TopBanner Callback = {this.callbackFunction} borderState = {this.state.borderState} />
        <HelpElements />


        <div id='Content' onClick={this.select}>{this.state.title}

        {/* rendering page to crawl */}
        <ExternalHtml />

        {/*this.state.borderState*/}




{/* tymczasowa strona do testowania */}

{/*
<h2 id='aaaaasdasdasdasd'>testowy element</h2>

<h4>element dddh4</h4>
<h1>Welcome</h1>
<button class="n">Click me</button>

<button onClick={() => alert('Kliknięto!')}>Kliknij!</button>   

<div>Witaj, </div>
         

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Explicabo voluptates doloremque quisquam omnis rem fuga 
veritatis odit! Perferendis cupiditate corporis consequuntur
amet ducimus quam       <button class="n">Click me1</button>
at magni facilis debitis ut quisquam molestias
maxime voluptatibus voluptatum    <div>     sadasdsasadasdsa <button class="n">Click me2</button>
</div>  <button class="n">Click me3</button>
minima in totam. Velit inventore
deserunt facilis temporibus id provident illo optio ipsa aut consequuntur 
sed repellat dolorem obcaecati iusto ab. Placeat 
repellat dolores 
debitis deleniti ipsum a accusamus in necessitatibus perferendis nostrum laudantium error modi 
  adipisci aliquam a deleniti omnis expedita quis natus. Velit placeat fugit officiis non nihil 
  fuga dolorum veritatis maiores fugiat eligendi iste veniam tempore deserunt.</p>
<button>More test buttons</button>
<center><h1>Przykładowy tekst do zaznaczenia</h1></center>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a
architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus 
molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium 
quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam
adipisci provident voluptas 
  nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae 
  adipisci perspiciatis voluptatibus et vero nisi!</p>


*/}



              
        </div>
      </div>
    );
  }  
}


export default Crawling
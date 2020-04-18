import React from 'react';
import $ from 'jquery';
import TopBanner from './TopBanner'
import ExternalHtml from './ExternalHtml'

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
    </div>
  );
}

class Crawling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Click here"
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
}

componentDidMount() {
  window.addEventListener('click', this.handleLoad);
}

componentWillUnmount() { 
 window.removeEventListener('click', this.handleLoad)  
}

handleLoad(e) {
  var target
  target = e.target;
  if (target && target.className === "outer" ) 
  {   
      var overlay = $(document.getElementById('outer'))
      overlay.hide();
      target = document.getElementById('empty');
  }
}

changeTitle = (e) => {
  var target, lastTarget;
  var overlay = $(document.getElementById('outer'))
  target = e.target;
  this.setState({ title: getElementXPath(target) });

  
  overlay.show();

  if (target === lastTarget) return;
  lastTarget = target;
  var $target = $(target);
  var offset = $target.offset();
  overlay.css({
      width:  $target.outerWidth()  - 1, 
      height: $target.outerHeight() - 1, 
      left:   offset.left, 
      top:    offset.top 
  });

};


render() {
    return (
      <div>
        <TopBanner />
        <HelpElements />

        {/* czy potrzebujemy obu tych divów? */}
        <div className='Content'>
        <div id='HereWillBeContent' onClick={this.changeTitle}>{this.state.title}>

        {/* rendering page to crawl */}
        <ExternalHtml />






{/* tymczasowa strona do testowania */}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<h1 id='aaaaasdasdasdasd'>element h1</h1>
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






              
        </div>
      </div>
    </div>
    );
  }  
}


export default Crawling
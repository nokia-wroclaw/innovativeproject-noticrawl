import React from 'react';
import $ from 'jquery';
import TopBanner from './TopBanner'

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


var currentElement = null;
var currentElement2 = null;

document.addEventListener('mouseover', function (e) {
currentElement = e.target;});


 window.onload=function(){
  var a = document.getElementById('HerwWillBeContent')
  var b = document.getElementById('outer')

  if (b) {
    b.addEventListener('click', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      target = e.target;
    }
    );
  }
  
  if (a){
  a.addEventListener('click', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    target = e.target;
  }
  );
}

} 



var mouseX, mouseY, target, lastTarget;

var box = $("<div id='outer' class='outer'  />").css({
  display: "none", position: "absolute", 
  zIndex: 65000, background:"rgba(37, 172, 131, 0.2)"
}).appendTo("body");


window.requestAnimationFrame(function frame() {
  window.requestAnimationFrame(frame);
    if (target && target.className === "outer") 
    {
        box.hide();
        target = document.getElementById('empty');


    }
    box.show();   

    if (target === lastTarget) return;
    lastTarget = target;
    var $target = $(target);
    var offset = $target.offset();
    box.css({
        width:  $target.outerWidth()  - 1, 
        height: $target.outerHeight() - 1, 
        left:   offset.left, 
        top:    offset.top 
    });
});



/*document.addEventListener('click', function (e) { może się przyda potem
  currentElement2 = e.target;
  mouseX = e.clientX;
  mouseY = e.clientY;
  target = e.target;
}); */


setInterval(function() {
$('#status').text('The current element is: ' + (getElementXPath(currentElement)) + '.');
}, 1);



class Crawling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Click here"
    };
}


changeTitle = (e) => {
  this.setState({ title: getElementXPath(currentElement) });

};


      render() {
          return (
            <div >
            {<TopBanner />}
            <div id='empty'></div>
              <div className='Content'></div>
              <div id='HerwWillBeContent'  onClick={this.changeTitle}>{this.state.title}>
            
                  <h1 id='aaaaasdasdasdasd'>element h1</h1>
              <h4>element dddh4</h4>
              <h1>Welcome</h1>
      <button class="n">Click me</button>

      <button onClick={() => alert('Kliknięto!')}>Kliknij!</button>   

         <div>Witaj, </div>
         <div>Elo, {getElementXPath(currentElement2)}</div>
         


          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Explicabo voluptates doloremque quisquam omnis rem fuga 
               veritatis odit! Perferendis cupiditate corporis consequuntur
                amet ducimus quam       <button class="n">Click me</button>
at magni facilis debitis ut quisquam molestias
                 maxime voluptatibus voluptatum    <div>     sadasdsasadasdsa <button class="n">Click me</button>
</div>  <button class="n">Click me</button>
 minima in totam. Velit inventore
                  deserunt facilis temporibus id provident illo optio ipsa aut consequuntur 
                  sed repellat dolorem obcaecati iusto ab. Placeat 
                  repellat dolores 
                  debitis deleniti ipsum a accusamus in necessitatibus perferendis nostrum laudantium error modi 
                     adipisci aliquam a deleniti omnis expedita quis natus. Velit placeat fugit officiis non nihil 
                     fuga dolorum veritatis maiores fugiat eligendi iste veniam tempore deserunt.</p>
      <button>More test buttons</button>
              
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
          );
      }
    
}


export default Crawling
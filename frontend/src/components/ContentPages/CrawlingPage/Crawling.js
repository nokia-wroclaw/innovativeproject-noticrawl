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
currentElement = e.target;

});
document.addEventListener('click', function (e) {
  currentElement2 = e.target;
});


setInterval(function() {
$('#status').text('The current element is: ' + (getElementXPath(currentElement)) + '.');
}, 100);
setInterval(function() {
  $('#status2').text('The Selected element is: ' + (getElementXPath(currentElement2)) + '.');
}, 100);

var last,
    bgc;

document.onclick = function(e) {
  var elem = e.target;

  if (last != elem) {
      if (last != null) {
          last.classList.remove("hovered");
      }

      last = elem;
      elem.classList.add("hovered");
  }
}

/*

PRZENIESIONE DO OSOBNEGO PLIKU 

function MenuCrawling() {
  return (
    
      <div className='CrawlingBanner'>
        
        <div className='CrawlingBox'>
          <div className ='elements'>
            <p id="status">Wait for it... or enable JavaScript.</p>
            <p id="status2">Wait for it... or enable JavaScript.</p>
            <button className='submit'>Submit</button>
          </div>
        </div>
        
        {/* umieścić to obok, aktualnie jest na dole

        <div className='SettingsBox'>
          <div className='elements'>
            Settings <br></br>
            sddfasd<br></br>
            sddfasdsda<br></br>
            asdas<br></br>
            sddfasd<br></br>asda
          </div> 
        </div>

        }

      </div>
  )
}
*/

function Crawling() {
    return (
      <div>
      {<TopBanner />}
 
        <div className='empty'>
            <h1>element h1</h1>
        <h4>element dddh4</h4>
        <h1>Welcome</h1>
<button class="n">Click me</button>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Explicabo voluptates doloremque quisquam omnis rem fuga 
         veritatis odit! Perferendis cupiditate corporis consequuntur
          amet ducimus quam at magni facilis debitis ut quisquam molestias
           maxime voluptatibus voluptatum minima in totam. Velit inventore
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
        </div>

    </div>
    )
}

export default Crawling
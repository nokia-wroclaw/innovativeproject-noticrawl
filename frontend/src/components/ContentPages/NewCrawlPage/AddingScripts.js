const AddingScripts = `
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

export { AddingScripts };
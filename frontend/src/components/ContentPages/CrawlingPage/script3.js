<div>
    <div id='empty'></div>
    <div id='outer' class='outer'></div>
    <div id="selector">
        <div id="selector-top"></div>
        <div id="selector-left"></div>
        <div id="selector-right"></div>
        <div id="selector-bottom"></div>
    </div>
</div>;



function deleteBorder() {
    document.getElementById("selector").style.display = 'none';
}

function drawBorder(e) {

    // if (this.state.borderState == 0) {
    //   return;
    // }

    var target = e.target;

    if (target.id === "selector-top" ||
        target.id === "selector-bottom" ||
        target.id === "selector-left" ||
        target.id === "selector-right") return;

    document.getElementById("selector").style.display = 'block';

    var targetRect = target.getBoundingClientRect();

    var top = document.getElementById("selector-top").style;
    top.width = targetRect.width + "px";
    top.left = targetRect.left + "px";
    top.top = targetRect.top + "px";

    var bot = document.getElementById("selector-bottom").style;
    bot.width = targetRect.width + "px";
    bot.left = targetRect.left + "px";
    bot.top = targetRect.top + targetRect.height - 3 + "px";

    var left = document.getElementById("selector-left").style;
    left.height = targetRect.height + "px";
    left.left = targetRect.left + "px";
    left.top = targetRect.top + "px";

    var right = document.getElementById("selector-right").style;
    right.height = targetRect.height + "px";
    right.left = targetRect.left + targetRect.width + "px";
    right.top = targetRect.top + "px";
}

function removeHighlight(e) {
    var target = e.target;
    if (target && target.className === "outer") {
        document.getElementById("outer").style.display = "none";
    }
}

function select(e) {

    var target = e.target;
    // this.setState({ title: getElementXPath(target) });
    var targetRect = target.getBoundingClientRect();
    var outer = document.getElementById("outer").style;
    outer.display = "block";
    outer.width = targetRect.width + "px";
    outer.height = targetRect.height + "px";
    outer.left = targetRect.left + "px";
    outer.top = targetRect.top + window.scrollY + "px";

}

window.addEventListener('click', this.removeHighlight);
document.addEventListener('mousemove', this.drawBorder);
window.addEventListener('scroll', this.deleteBorder);


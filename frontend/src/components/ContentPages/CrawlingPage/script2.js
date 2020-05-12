cosole.log("In script");

var el = document.getElementById("testButton");
el.addEventListener('click', () => {
    console.log("CLICK");
    el.innerText = "DUPA!";
})
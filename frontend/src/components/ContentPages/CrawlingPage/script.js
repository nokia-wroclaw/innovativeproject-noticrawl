var iframe = document.getElementById('pageFrame');
iframe.contentDocument.body.addEventListener('mouseup', Handler);

function Handler() {
    alert('works');
}

document.addEventListener('click', Handler);

console.log("In script.")

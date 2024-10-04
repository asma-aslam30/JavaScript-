// ====================Question no :03======================
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
// ====================Question no :04======================

function changeMouseover(event) {
  event.target.src = "./images/mobile4.jpg";
}

function changeMouseout(event) {
  event.target.src = "./images/mobile1.jpg";
}
// ====================Question no :05======================

let counter=0
function updateCounter() {
    document.getElementById('counter').innerText = counter;
}

function increaseCounter() {
    counter++;
    updateCounter();
}

function decreaseCounter() {
    counter--;
    updateCounter();
}
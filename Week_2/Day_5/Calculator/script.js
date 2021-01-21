
function javascript(count) {
document.getElementById('inputwindow').value += count;
}

function clearInput(Clear) {
document.getElementById('inputwindow').value = Clear;
}

function resetInput(reset) {
document.getElementById('inputwindow').value = reset;
}

function calculateResult() {
let result = eval(document.getElementById('inputwindow').value);
document.getElementById('inputwindow').value = result;
}

const del = document.getElementById('del');
const reset = document.getElementById('c');
const modulo = document.getElementById('modulo');
const divide = document.getElementById('divide');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const multiply = document.getElementById('multiply');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const minus = document.getElementById('minus');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const plus = document.getElementById('plus');
const period = document.getElementById('period');
const equals = document.getElementById('equals');
let panel = document.getElementById('panel').value;

let panelText;

num1.addEventListener("click") {
    alert(num1)
}

panelText = (panel) => {
    document.getElementById('panel').innerHTML = panel;
}
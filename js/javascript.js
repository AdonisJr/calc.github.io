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
// let panel = document.getElementById('panel').value;
document.getElementById('panel').innerText = 1;
let panelText = new Array();



let equalFunction = ((result) => {
    let newPanelText = Array(...result);
    let position;
    let operator;
    let num1 = 0
    let num2 = 0;
    let finalResult;
    let final = new Array();


    //loop inside panel text to find operator
    result.forEach((item, index) => {
        // if operator is found
        if (item == '+' || item == '-' || item == '*' || item == '/' || item == '%') {
            // return item= "+" and index = "3"
            num1 = result.splice(0, index).join("");
            num2 = result.splice(1, result.length).join("");


            if (item == '+') {
                finalResult = parseFloat(num1) + parseFloat(num2);
            } else if (item == '-') {
                finalResult = parseFloat(num1) - parseFloat(num2);
            } else if (item == '*') {
                finalResult = parseFloat(num1) * parseFloat(num2);
            } else if (item == '/') {
                finalResult = parseFloat(num1) / parseFloat(num2);
            } else {
                finalResult = parseFloat(num1) % parseFloat(num2);
            }

            final.push(finalResult);
            panelInputFunction(final)
            panelInput2Function(newPanelText);

        }

        /* let newPanelText = result;
           console.log(result)
           let newText = result.join("");
           let result1 = eval(newText);
           let newArray = new Array();
           newArray.push(result1)
           console.log(newArray);
           panelInputFunction(newArray)
           panelInput2Function(newPanelText);*/
    });
});



let panelInputFunction = ((value) => {
    let valueJoin = value.join("");
    document.getElementById('panel').value = valueJoin;
});



let panelInput2Function = ((value) => {
    value.push('=')
    let valueJoin = value.join("");
    document.getElementById('panel2').value = valueJoin;
});



let deleteCharFunction = ((char) => {
    char.pop();
    panelInputFunction(panelText);
});

let resetTextFunction = ((text) => {
    text.splice(0, text.length);
    panelInputFunction(panelText);
});

num1.addEventListener("click", () => {
    panelText.push(1)
    panelInputFunction(panelText)
});
num2.addEventListener("click", () => {
    panelText.push(2)
    panelInputFunction(panelText)
});
num3.addEventListener("click", () => {
    panelText.push(3)
    panelInputFunction(panelText)
});
num4.addEventListener("click", () => {
    panelText.push(4)
    panelInputFunction(panelText)
});
num5.addEventListener("click", () => {
    panelText.push(5)
    panelInputFunction(panelText)
});
num6.addEventListener("click", () => {
    panelText.push(6)
    panelInputFunction(panelText)
});
num7.addEventListener("click", () => {
    panelText.push(7)
    panelInputFunction(panelText)
});
num8.addEventListener("click", () => {
    panelText.push(8)
    panelInputFunction(panelText)
});
num9.addEventListener("click", () => {
    panelText.push(9)
    panelInputFunction(panelText)
});
num0.addEventListener("click", () => {
    panelText.push(0)
    panelInputFunction(panelText)
});
multiply.addEventListener("click", () => {
    panelText.push('*')
    panelInputFunction(panelText)
});
plus.addEventListener("click", () => {
    panelText.push('+')
    panelInputFunction(panelText)
});
divide.addEventListener("click", () => {
    panelText.push('/')
    panelInputFunction(panelText)
});
minus.addEventListener("click", () => {
    panelText.push('-')
    panelInputFunction(panelText)
});
modulo.addEventListener("click", () => {
    panelText.push('%')
    panelInputFunction(panelText)
});
period.addEventListener("click", () => {
    panelText.push('.')
    panelInputFunction(panelText)
});
equals.addEventListener("click", () => {
    equalFunction(panelText);
});
resetT.addEventListener("click", () => {
    resetTextFunction(panelText);
});
del.addEventListener("click", () => {
    deleteCharFunction(panelText);
});
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    if (operator == '+') return add(a,b);
    if (operator === '-') return subtract(a,b);
    if (operator === '*') return multiply(a,b);
    if (operator === '/') return divide(a,b);
}
let display = document.querySelector('.display');
let displayContent = '';
let chosenOperator = '';

const buttonNumberConversion = {one:'1', two:'2', three:'3',four:'4',five:'5',
    six:'6',seven:'7',eight:'8',nine:'9',zero:'0',dot:'.'};
const buttonSymbolConversion = {plus:'+',minus:'-',times:'X',divide:'/'};

let buttons = Array.from(document.querySelectorAll('.calculator button'));

for (let i=0;i<(buttons.length);i++){
    let buttonName = buttons[i].id;
    buttons[i].addEventListener('click', ()=>{
        displayContent += `${buttonNumberConversion[buttonName]}`;
        if (buttonNumberConversion[buttonName] === undefined){
            displayContent = displayContent.substring(0, displayContent.length - 9);
            displayContent += `${buttonSymbolConversion[buttonName]}`;
            chosenOperator = `${buttonSymbolConversion[buttonName]}`
        }
        display.textContent = displayContent;
    });
};


document.querySelector('#clear').addEventListener('click',()=>{
    displayContent = '';
    display.textContent = '0';
})





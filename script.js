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

function inputSplit(stringToSplit){
    const separators = ['\\\+', '-', '\\*', '/'];
    operationNumbers = 
        stringToSplit.split(new RegExp(separators.join('|'),'g'));
    console.log(operationNumbers);
}

function removeEndOfString(string,characters){
    string = string.substring(0,string.length - characters);
    return string;
}

let display = document.querySelector('.display');
let displayContent = '';
chosenOperator = '';
let operationNumbers = [];

const buttonNumberConversion = {one:'1', two:'2', three:'3',four:'4',five:'5',
    six:'6',seven:'7',eight:'8',nine:'9',zero:'0',dot:'.'};
const buttonSymbolConversion = {plus:'+',minus:'-',times:'*',divide:'/'};

let buttons = Array.from(document.querySelectorAll('.calculator button'));

for (let i=0;i<(buttons.length);i++){
    let buttonName = buttons[i].id;
    buttons[i].addEventListener('click', ()=>{
        displayContent += `${buttonNumberConversion[buttonName]}`;
        if (buttonNumberConversion[buttonName] === undefined){
            if (buttonName === 'enter') return;
            displayContent = removeEndOfString(displayContent,9);
            displayContent += `${buttonSymbolConversion[buttonName]}`;
            chosenOperator = buttonSymbolConversion[buttonName];
        }
        display.textContent = displayContent;
    });
};

function calculation(){
    inputSplit(displayContent);
    displayContent = 
        operate(chosenOperator,parseFloat(operationNumbers[0]),parseFloat(operationNumbers[1]));
    console.log(displayContent);
    display.textContent = displayContent;
}
document.querySelector('#clear').addEventListener('click',()=>{
    displayContent = '';
    display.textContent = '0';
})
document.querySelector('#enter').addEventListener('click',()=>{
    displayContent = removeEndOfString(displayContent,9);
    calculation();
});


backspaceButton = document.querySelector('.test');
backspaceButton.addEventListener('click',()=>{
    displayContent = removeEndOfString(displayContent,1);
    display.textContent = displayContent;
});





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
    operationNumbers = 
        stringToSplit.split(new RegExp(separators.join('|'),'g'));
    console.log(operationNumbers);
}

function removeEndOfString(string,characters){
    string = string.substring(0,string.length - characters);
    return string;
}
function roundNumber (num,dec){
    return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
}
function calculation(){
    inputSplit(displayContent);
    if (operationNumbers[1] == 0 && chosenOperator == '/'){
        displayContent = '$3.50 to unlock divide by zero';
        display.textContent = displayContent;
        return;
    }
    displayContent = 
        operate(chosenOperator,parseFloat(operationNumbers[0]),parseFloat(operationNumbers[1]));
    console.log(displayContent);
    displayContent = roundNumber(displayContent,10);
    display.textContent = displayContent;
}

let display = document.querySelector('.display');
let displayContent = '';
chosenOperator = '';
let operationNumbers = [];

const separators = ['\\\+', '-', '\\*', '/'];
const buttonNumberConversion = {one:'1', two:'2', three:'3',four:'4',five:'5',
    six:'6',seven:'7',eight:'8',nine:'9',zero:'0'};
const buttonOperatorConversion = {plus:'+',minus:'-',times:'*',divide:'/'};
let numberButtons = Array.from(document.querySelectorAll('.number'));
let operatorButtons = Array.from(document.querySelectorAll('.operator'));
for (let i=0;i<(numberButtons.length);i++){
    let buttonName = numberButtons[i].id;
        numberButtons[i].addEventListener('click', ()=>{
            displayContent += `${buttonNumberConversion[buttonName]}`;
            display.textContent = displayContent;
});
}

for (let i=0;i<(operatorButtons.length);i++){
    let buttonName = operatorButtons[i].id;
        operatorButtons[i].addEventListener('click', ()=>{
            displayContent += `${buttonOperatorConversion[buttonName]}`;
            display.textContent = displayContent;
});
}
// let buttons = Array.from(document.querySelectorAll('.calculator button'));
// // Remove undefined logic.  Replace with loops over arrays based on classes 
// // numbers and operations.  Others will be bespoke as is now.  Split operationNumbers
// //in half by doing it on the operation button --> to check for bad decimals. 
// for (let i=0;i<(buttons.length);i++){
//     let buttonName = buttons[i].id;
//     buttons[i].addEventListener('click', ()=>{
//         displayContent += `${buttonNumberConversion[buttonName]}`;
//         if (buttonNumberConversion[buttonName] === undefined){
//             if (buttonName === 'enter') return;
//             if (displayContent.includes('+') || displayContent.includes('-') || 
//                 displayContent.includes('*') || displayContent.includes('/')){
//                 calculation();  
                
//             }
//             displayContent = removeEndOfString(displayContent,9);
//             displayContent += `${buttonSymbolConversion[buttonName]}`;
//             chosenOperator = buttonSymbolConversion[buttonName];
//         }
//         display.textContent = displayContent;
//     });
// };


document.querySelector('#clear').addEventListener('click',()=>{
    displayContent = '';
    display.textContent = '0';
})
document.querySelector('#enter').addEventListener('click',()=>{
    displayContent = removeEndOfString(displayContent,9);
    calculation();
});

dotButton = document.querySelector('#dot');
dotButton.addEventListener('click',()=>{
    // if (displayContent.includes('.')){
    //     dotButton.disabled = true;
    // }
    displayContent += '.';
    display.textContent = displayContent;
});

backspaceButton = document.querySelector('.test');
backspaceButton.addEventListener('click',()=>{
    displayContent = removeEndOfString(displayContent,1);
    display.textContent = displayContent;
});





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
    stringToSplit = stringToSplit.toString();
    operationNumbers = 
        stringToSplit.split(new RegExp(separators.join('|'),'g'));
    console.log(operationNumbers);
}

function removeEndOfString(string,characters){
    string = string.toString();
    string = string.substring(0,string.length - characters);
    return string;
}
function roundNumber (num,dec){
    return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
}
function calculation(){
    inputNumbers = ['',''];
    inputSplit(displayContent);
    if (operationNumbers[1] === '') return;
    if (operationNumbers[1] == 0 && chosenOperator == '/'){
        displayContent = '$3.50 to unlock divide by zero';
        display.textContent = displayContent;
        return;
    }
    displayContent = 
        operate(chosenOperator,parseFloat(operationNumbers[0]),parseFloat(operationNumbers[1]));
    console.log(displayContent);
    displayContent = roundNumber(displayContent,10);
    displayContent = displayContent.toString();
    display.textContent = displayContent;
}
function checkArrayNumber(num){
    num = parseFloat(num);
    if (typeof(num) === 'number'){
        return true;
    }else return false;
    
}
function checkInt (num){
    if (Number.isInteger(num)) return true;
}

let display = document.querySelector('.display');
let displayContent = '';
chosenOperator = '';
let operationNumbers = [];
let inputNumbers = ['',''];

const separators = ['\\\+', '-', '\\*', '/'];
const buttonNumberConversion = {one:'1', two:'2', three:'3',four:'4',five:'5',
    six:'6',seven:'7',eight:'8',nine:'9',zero:'0'};
const buttonOperatorConversion = {plus:'+',minus:'-',times:'*',divide:'/'};
let numberButtons = Array.from(document.querySelectorAll('.number'));
let operatorButtons = Array.from(document.querySelectorAll('.operator'));
for (let i=0;i<(numberButtons.length);i++){
    let buttonName = numberButtons[i].id;
        numberButtons[i].addEventListener('click', ()=>{
            if ((displayContent.includes('+') || displayContent.includes('-') || 
                displayContent.includes('*') || displayContent.includes('/'))){
                    inputNumbers[1] += buttonNumberConversion[buttonName];
                }
            if (!((displayContent.includes('+') || displayContent.includes('-') || 
            displayContent.includes('*') || displayContent.includes('/')))){
                inputNumbers[0] += buttonNumberConversion[buttonName];
            }
            displayContent += `${buttonNumberConversion[buttonName]}`;
            display.textContent = displayContent;
});
}

for (let i=0;i<(operatorButtons.length);i++){
    let buttonName = operatorButtons[i].id;
        operatorButtons[i].addEventListener('click', ()=>{
            dotButton.disabled = false;
            inputSplit(displayContent);
            if ((displayContent.includes('+') || displayContent.includes('-') || 
                displayContent.includes('*') || displayContent.includes('/'))){
                calculation(); 
                }
            displayContent += `${buttonOperatorConversion[buttonName]}`;
            display.textContent = displayContent;
            chosenOperator = buttonOperatorConversion[buttonName];
                      
});
}

//TO DO: Keyboard link to buttons.




document.querySelector('#clear').addEventListener('click',()=>{
    dotButton.disabled = false;
    displayContent = '';
    display.textContent = '0';
    chosenOperator = '';
    inputNumbers = ['',''];
})
document.querySelector('#enter').addEventListener('click',()=>{
    if (inputNumbers[1] === '') return;
    console.log(inputNumbers);
    calculation();
    console.log(displayContent)
    if (displayContent.includes('.')) dotButton.disabled = true;
    if (checkInt(displayContent)) dotButton.disabled = false;
});


dotButton = document.querySelector('#dot');
dotButton.addEventListener('click',()=>{
    displayContent += '.';
    display.textContent = displayContent;
    dotButton.disabled = true;
});

backspaceButton = document.querySelector('.back');
backspaceButton.addEventListener('click',()=>{
    if (displayContent.charAt(displayContent.length -1) === '.') dotButton.disabled = false;
    displayContent = removeEndOfString(displayContent,1);
    display.textContent = displayContent;
});

// backspaceButton.addEventListener('keydown',(e)=>{
//     if (e.code === '8'){
//     if (displayContent.charAt(displayContent.length -1) === '.') dotButton.disabled = false;
//     displayContent = removeEndOfString(displayContent,1);
//     display.textContent = displayContent;
//     }
// });




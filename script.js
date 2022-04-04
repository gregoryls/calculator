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
const buttonConversion = {one:'1', two:'2', three:'3',four:'4',five:'5',
    six:'6',seven:'7',eight:'8',nine:'9',zero:'0',plus:'+',minus:'-',
    times:'X',divide:'/',dot:'.'};

let buttons = Array.from(document.querySelectorAll('.calculator button'));

for (let i=0;i<(buttons.length);i++){
    let buttonName = buttons[i].id;
    console.log(buttonConversion[buttonName])
    buttons[i].addEventListener('click', ()=>{
        displayContent += `${buttonConversion[buttonName]}`;
        display.textContent = displayContent;
    });
};
document.querySelector('#clear').addEventListener('click',()=>{
    display.textContent = '0';
})





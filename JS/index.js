const lengthEl = document.getElementById('pwdlen')
const uppercaseEl = document.getElementById('upperCase')
const lowercaseEL = document.getElementById('lowerCase')
const numberEl = document.getElementById('Num')
const symbolsEl = document.getElementById('symb')
const copyEl = document.getElementById('copy')
const resultEl = document.getElementById('result')
const generateBtn = document.getElementById('generateBtn')



function randomUpper(){
    return(String.fromCharCode(Math.floor((Math.random()*26 )+65)) )
}

function randomLower(){
    return(String.fromCharCode(Math.floor((Math.random()*26 )+97)) )
}

function randomNumber(){
    let number = '0123456789'
    return(number[Math.floor(Math.random()*10)])
}

function randomSymbol(){
    symbols = '!@#$%^&*()'
    return(symbols[Math.floor(Math.random()*10)])
}

let checkedFunctions = []
function validFunctionSelector(hasUpper, hasLower, hasNumber, hasSymbol){
    if(hasUpper === true) checkedFunctions.push(randomUpper)
    if(hasLower === true) checkedFunctions.push(randomLower)
    if(hasNumber === true) checkedFunctions.push(randomNumber)
    if(hasSymbol === true) checkedFunctions.push(randomSymbol)
}

generateBtn.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEL.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;

    validFunctionSelector(hasUpper,hasLower,hasNumber, hasSymbol);
    let password = ''
    for(let i=0; i<length; i++){
        password += (checkedFunctions[Math.floor(Math.random()*(checkedFunctions.length))]())
    }
    resultEl.innerHTML = password

    checkedFunctions = []
    copyEl.style.color = 'black'
    copyEl.innerHTML = ''
})

copyEl.addEventListener('click', () => {
    setTimeout(() => {
        copyEl.style.color = 'rgb(1, 156, 245)'
        copyEl.innerHTML = 'copied'
    }, 200)
})


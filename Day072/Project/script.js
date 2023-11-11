const inputSlider = document.querySelector("[data-LengthSlider]");
const lengthDisplay = document.querySelector("[data-LengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");

const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowerercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");

const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allCheckBox = document.querySelector("input[type=checkbox]");
const symbol = '`!@#$%^&*)(_+/.?>:<,}{][|=-';

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();

// Set Paaword Length

function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerHTML = 10;
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
}

function getRandomInteger(min, max) {
    Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRandomInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCodegetRandomInteger(97, 123);
}

function generateUpperCase() {
    return String.fromCharCodegetRandomInteger(65, 91);
}

function generateSymbol() {
    const random = getRandomInteger(0, symbol.length);
    return symbol.charAt[random];
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numberCheck.checked) hasNum = true;
    if (symbolCheck.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    }
    else if ((hasLower || hasUpper)
        && (hasNum || hasSym) &&
        passwordLength >= 6) {
        setIndicator("#ff0");
    }
    else {
        setIndicator('#f00');
    }
}




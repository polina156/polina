const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols   = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];

let lengthInput = prompt("Введите длину пароля:");
let passwordLength = Number(lengthInput);


if (isNaN(passwordLength) || passwordLength <= 0) {
    passwordLength = 8;
}

let includeNumbers = confirm("Включать в пароль ЦИФРЫ?");
let includeSymbols = confirm("Включать в пароль СПЕЦСИМВОЛЫ?");

let allowedSymbols = [];

allowedSymbols = allowedSymbols.concat(lowercase, uppercase);

if (includeNumbers === true) {
    allowedSymbols = allowedSymbols.concat(numbers);
}

if (includeSymbols === true) {
    allowedSymbols = allowedSymbols.concat(symbols);
}

let password = "";

for (let i = 0; i < passwordLength; i++) {
    
    let randomIndex = Math.floor(Math.random() * allowedSymbols.length);
    password = password + allowedSymbols[randomIndex];
}

alert("Ваш пароль: " + password);
document.querySelector("#generate").addEventListener("click", generatePassword);

let confirmUppercase;
let confirmLowercase;
let confirmNumerics;
let confirmSymbols;
const confirmLength = "";
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = ["!", "@", "#", "$", "%", "*", "(", ")", "-", "_", "+", "="];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function writePassword() {
  var confirmLength = prompt(
  "How many characters would you like your password to be? Please choose between 8 and 128 characters."
);

while (confirmLength <= 7 || confirmLength >= 129) {
  alert("Please enter an amount between 8 and 128 characters.");
  confirmLength = prompt(
    "How many characters would you like your password to be? Please choose between 8 and 128 characters."
  );
}
var confirmNumerics = confirm(
  "Click OK to confirm if you would like to include numeric characters in your password."
);
var confirmSymbols = confirm(
  "Click OK to confirm if you would like to include symbols in your password."
);
var confirmLowerCase = confirm(
  "Click OK to confirm if you would like to include lowercase characters in your password."
);
var confirmUpperCase = confirm(
  "Click OK to confirm if you would like to include uppercase characters in your password."
);

while (
  confirmUpperCase === false &&
  confirmLowerCase === false &&
  confirmSymbols === false &&
  confirmNumerics === false
) {
  alert("You must choose at least one option!");
  var confirmNumerics = confirm(
    "Click OK to confirm if you would like to include numeric characters"
  );
  var confirmSymbols = confirm(
    "Click OK to confirm if you would like to include special characters"
  );
  var confirmLowerCase = confirm(
    "Click OK to confirm if you would like to include lowercase characters"
  );
  var confirmUpperCase = confirm(
    "Click OK to confirm if you would like to include uppercase characters"
  );
}

var thePassword = [];

if (confirmNumerics) {
  thePassword = thePassword.concat(number);
}

if (confirmSymbols) {
  thePassword = thePassword.concat(symbol);
}

if (confirmLowerCase) {
  thePassword = thePassword.concat(lowerCase);
}

if (confirmUpperCase) {
  thePassword = thePassword.concat(upperCase);
}
console.log(thePassword);

var securePassword = "";

for (var i = 0; i < confirmLength; i++) {
  securePassword =
    securePassword +
    thePassword[Math.floor(Math.random() * thePassword.length)];
  console.log(securePassword);
}
return securePassword;
}

function generatePassword() {
var password = writePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
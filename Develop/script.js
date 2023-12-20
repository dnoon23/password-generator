// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var symbols = [',', '!',',', '"', ',', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

var passwordLength = prompt("How long do you want your password to be? At least 8 characters and no more than 128");
function passLength() {
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Try again. At least 8 characters and no more than 128 characters.")
    passLength();
  }
  else {
    alert("good job")
    return
  };
}
passLength();

var caseUpper = confirm("Would you like upper case letters in your password")
var caseLower = confirm("Would you like lower case letters in your password")
var casesymb = confirm("Would you like symbols in your password")
console.log(caseUpper);
console.log(caseLower);
console.log(casesymb);
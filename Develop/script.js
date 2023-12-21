// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = pass1.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var symbols = [',', '!',',', '"', ',', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',"\\"];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var pass = [];
var pass1 = [];
var caseUpper;
var caseLower;
var caseSymb;

// Add event listener to generate button

generateBtn.addEventListener("click", function(){

var passwordLength = prompt("How long do you want your password to be? At least 8 characters and no more than 128");
function passLength() {
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Try again. At least 8 characters and no more than 128 characters.")
    passLength();
  }
}

function question(){
caseUpper = confirm("Would you like upper case letters in your password")
caseLower = confirm("Would you like lower case letters in your password")
caseSymb = confirm("Would you like symbols in your password")
}

passLength();
question();

if (caseUpper){
  pass.push.apply(pass, upper);
}
if (caseLower){
  pass.push.apply(pass, lower);
}
if (caseSymb){
  pass.push.apply(pass, symbols);
}
for (i = 0; i < passwordLength; i++){
  pass1[i] = pass[Math.floor(Math.random()* pass.length)];
}
if (pass.length < 25){
  confirm("Please try again!")
}

writePassword();

pass.length=0;
pass1.length=0;
});
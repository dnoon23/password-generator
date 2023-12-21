// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = pass1.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//sets up all possible characters that can be in the password
var symbols = [',', '!',',', '"', ',', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',"\\"];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//sets up an array to store characters depending on choices by the user and an array to store the password
var pass = [];
var pass1 = [];

//vars for choices made by user for what characters to use in the password
var caseUpper;
var caseLower;
var caseSymb;

// Listener to generate button
generateBtn.addEventListener("click", function(){
//Asks desired password length and a loop if the user enters an invalid number
var passwordLength = prompt("How long do you want your password to be? At least 8 characters and no more than 128");
function passLength() {
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Try again. At least 8 characters and no more than 128 characters.");
    passLength();
  }
}

//Question for the user to customize password characters
function question(){
caseUpper = confirm("Would you like upper case letters in your password");
caseLower = confirm("Would you like lower case letters in your password");
caseSymb = confirm("Would you like symbols in your password");
}

//Runes the previous functions 
passLength();
question();

//Checks user answers and added desired characters to pass array
if (caseUpper){
  pass.push.apply(pass, upper);
}
if (caseLower){
  pass.push.apply(pass, lower);
}
if (caseSymb){
  pass.push.apply(pass, symbols);
}

//Places desired characters into pass1 creating the password of chosen length as an array
for (i = 0; i < passwordLength; i++){
  pass1[i] = pass[Math.floor(Math.random()* pass.length)];
}

//Checks to make sure at least one set of characters was chosen so a password can be created
if (pass.length < 25){
  confirm("Please try again!");
}

//Runs the function at the top of the page printing the password on the webpage
writePassword();

//Resets pass and pass1 arrays so the program and be rerun correctly without needing to refresh the page
pass.length=0;
pass1.length=0;
});
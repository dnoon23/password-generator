// Connects the button on the webpage to js
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input and displays it on the webpage
function writePassword() {
  var password = pass1.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Vars that store all possible characters that can be in the password
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = [',', '!', ',', '"', ',', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', "\\"];

//Sets up an array to store characters depending on choices by the user and an array to store the password after desired characters are chosen
var pass = [];
var pass1 = [];

//vars for choices made by user for what characters to use in the password
var caseUpper;
var caseLower;
var caseNum;
var caseSymb;

// Listener to run code when button is pushed
generateBtn.addEventListener("click", function () {

  //Asks desired password length and loops if the user enters an invalid number.
  var passwordLength = prompt("How long do you want your password to be? It needs to be at least 8 characters and no more than 128.");
  function passLength() {
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Try again. The password needs to be at least 8 characters and no more than 128 characters.");
      passLength();
    } else {
      alert('Your password will be ' + passwordLength + ' characters long.')
    }
  }

  //Questions for the user to customize password characters.  Confirms selections and adds them to pass array.  If none are selected function repeats and promps the user again.  Will continue to repeat untill user chooses at least one set of characters.
  function question() {
    caseUpper = confirm("If you would like upper case letters in your password press OK. If not press Cancel.");
    if (caseUpper) {
      alert("Upper case letters added to password.");
      pass.push.apply(pass, upper);
    }else{
      alert("Password will not include upper case letters.")
    }
    caseLower = confirm("If you would like lower case letters in your password press OK. If not press Cancel.");
    if (caseLower) {
      alert("Lower case letters added to password.");
      pass.push.apply(pass, lower);
    }else{
      alert("Password will not include lower case letters.")
    }
    caseNum = confirm("If you would like numbers in your password press OK. If not press Cancel.");
    if (caseNum) {
      alert("Numbers added to password.");
      pass.push.apply(pass, number);
    }else{
      alert("Password will not include numbers.")
    }
    caseSymb = confirm("If you would like symbols in your password press OK. If not press Cancel.");
    if (caseSymb) {
      alert("Symbols added to password.");
      pass.push.apply(pass, symbols);
    }else{
      alert("Password will not include symbols.")
    }
    if (pass.length < 10) {
      alert("Please try again!  You need to pick at least one set of characters.");
      question();
    }
  }

  //Runs the previous functions 
  passLength();
  question();

  //Places desired characters into pass1 creating the password of chosen length as an array
  for (i = 0; i < passwordLength; i++) {
    pass1[i] = pass[Math.floor(Math.random() * pass.length)];
  }

  //Runs the function at the top of the page printing the password on the webpage
  writePassword();

  //Resets pass and pass1 arrays so the program and be rerun correctly without needing to refresh the page
  pass.length = 0;
  pass1.length = 0;
});
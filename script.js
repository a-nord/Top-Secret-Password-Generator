// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// // Concatenate arrays
// possibleCharacters.concat(specialCharacters)

// `if` conditional logic for possibleOptions
function generatePassword() {
  //Length criteria
  var passwordLength = prompt("How many characters between 8 - 128 in digits would you like your password to be?")
  if (passwordLength >= 8 && passwordLength <= 128) { 
    //boolean variables for the next questions    
    console.log(passwordLength)
  } else {
    alert("Must be a value between 8 - 128.")
    generatePassword()
  } ;  

  //other password criterias
  


  // // Array to store result 
  // var result = [];
  // // Array to store types of characters to include in password
  // var possibleCharacters = [];
  // // Array to contain one of each type of chosen character to ensure each will be used
  // var guaranteedCharacters = [];
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Array to store result 
var result = [];

// Array to store types of characters to include in password
var possibleCharacters = [];

// Array to contain one of each type of chosen character to ensure each will be used
var guaranteedCharacters = [];

////length of password
var passwordLength=0;

// Concatenate arrays
possibleCharacters.concat(specialCharacters)

// `if` conditional logic for possibleOptions
function generatePassword(){
  result = [];
  passwordLength = parseInt(prompt("How many characters between 8 - 128 do you want your password to be?"));

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Password length must be a numerical value between 8 - 128 digits. Please re-submit.");
      return false;
    }
    //okay=T / cancel=F responses stored in result
    if (confirm("Would you like special characters in your password?")) {
      result = result.concat(specialCharacters);
    }
    if (confirm("Would you like numbers in your password?")) {
      result = result.concat(numericCharacters);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
      result = result.concat(lowerCasedCharacters);
    }
    if (confirm("Would you like lowercase letters in your password?")) {
      result = result.concat(upperCasedCharacters);
    }   
    return true;
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

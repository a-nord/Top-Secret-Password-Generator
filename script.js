// // Array to store types of characters to include in password
var possibleCharacters = [];

// `if` conditional logic for possibleOptions
function generatePassword() {

  //Length criteria
  var passwordLength = prompt("How many characters between 8 - 128 in digits would you like your password to be?");
  if (passwordLength >= 8 && passwordLength <= 128) { 
    console.log(passwordLength)

    //boolean variables for the next set of questions to add password criterias
    var confirmSpecial = confirm("Click OK if you want to include special characters.");    
    var confirmNumeric = confirm("Click OK if you want to include numeric characters.");
    var confirmLowercase = confirm("Click OK if you want to include lowercase characters.");
    var confirmUppercase = confirm("Click OK if you want to include uppercase characters."); 

    //user must choose atleast one of the criterias
    if (confirmUppercase) {
    }else if (confirmSpecial) {
    }else if (confirmNumeric) {
    }else if (confirmLowercase) {
    }else {
      alert("Must have atleast one password criteria.")
      generatePassword()
    };
    
    // define the criterias for when they add ok or cancel    
    if (confirmSpecial) {
      // Array of special characters to be included in password
      specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
    } else {
      //empty array if user selects cancel
      specialCharacters=[]
    }
    if (confirmNumeric) {
      //Array of numeric characters
      numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    } else {
      numericCharacters=[]
    }
    if (confirmLowercase) {
      //Array of lowercase characters
      lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
    } else{
      lowerCasedCharacters=[]
    }
    if (confirmUppercase) {
      //Array of uppercase characters
      upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
    } else{
      upperCasedCharacters = []
    }

    //combines 
    var guaranteedCharacters = possibleCharacters.concat(specialCharacters,numericCharacters,lowerCasedCharacters,upperCasedCharacters);

    // random password generator
    var randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
    randomPassword += guaranteedCharacters[Math.floor(Math.random()*guaranteedCharacters.length)];    
    } 
    return randomPassword;
  } else {
    alert("Must be a value between 8 - 128.")
    generatePassword()
  } ;  
}
//else statement abaove is if user doesnt select a number between 8-128
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

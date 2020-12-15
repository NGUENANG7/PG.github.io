// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqstuvwxyz"; 
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "~`!@#$%^&*()_-+={}[]:;'<>,.?/|";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
var characters = lowercaseChar;
var password = "";

// Write password to the #password input
function determineLength(){
  passwordLength = prompt("Choose how many characters long you want to have in your password to be [between 8-128 characters]: ");

    if (passwordLength<8){
      alert("Password length must be between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be between 8-128 characters");
      determineLength();
    }else{
      alert("The next screens will ask you what types of characters you want to included in your password.");
    }
    return passwordLength;
}

//Function to determine if you want uppercase characters in the password//
function determineUppercase(){
  uppercaseCheck = prompt("Do you want uppercase letters in your password?"); 
    uppercaseCheck = uppercaseCheck.toLowerCase()

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

//Function to determine whether you want numbers in the password//
function determineNumbers(){
  numberCheck = prompt("Do you want numbers in your password?");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

//Function to determine if you want special characters in the password//
function determineSpecial(){
  specialCheck = prompt("Do you want  special characters in your password? ");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

function generatePassword(){
  determineLength();
  determineUppercase();
  determineNumbers();
  determineSpecial();

    if (uppercaseCheck && numberCheck && specialCheck){
      characters += uppercaseChar + numberChar + specialChar;

    }else if (uppercaseCheck){
      characters += uppercaseChar;

    }else if(numberCheck){
  characters += numberChar;

    }else if (specialCheck){
      characters += specialChar;

    }else{
      characters === lowercaseChar;
    }

    for(var i = 0; i < passwordLength; i++){
       password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
    }

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

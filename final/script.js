// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt('Enter the desired password length (between 8 and 128 characters):'));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return null;
  }

  var includeSpecial = confirm('Include special characters?');
  var includeNumeric = confirm('Include numeric characters?');
  var includeLowercase = confirm('Include lowercase characters?');
  var includeUppercase = confirm('Include uppercase characters?');

  if (!(includeSpecial || includeNumeric || includeLowercase || includeUppercase)) {
    alert('Please select at least one character type to include.');
    return null;
  }

  return {
    length: passwordLength,
    special: includeSpecial,
    numeric: includeNumeric,
    lowercase: includeLowercase,
    uppercase: includeUppercase
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  
  if (!options) {
    return '';
  }

  var characters = [];
  
  if (options.special) {
    characters = characters.concat(specialCharacters);
  }
  if (options.numeric) {
    characters = characters.concat(numericCharacters);
  }
  if (options.lowercase) {
    characters = characters.concat(lowerCasedCharacters);
  }
  if (options.uppercase) {
    characters = characters.concat(upperCasedCharacters);
  }

  var generatedPassword = '';

  for (var i = 0; i < options.length; i++) {
    var randomChar = getRandom(characters);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

const characters = [
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
  'Z',
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
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let passwordLength = 15;

function generateRandomChar() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function generateRandomPassword() {
  let randomPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += generateRandomChar();
  }
  return randomPassword;
}

let passwordInput = document.getElementById('password-input');
let passwordInput2 = document.getElementById('password-input2');
let passwordButton = document.getElementById('generatePassword-el');

passwordButton.addEventListener('click', function () {
  passwordInput.value = generateRandomPassword();
  passwordInput2.value = generateRandomPassword();
});

// copy to clipboard functionality

function copyToClipboard(elementId) {
  // get the text field to copy
  let copyText = document.getElementById(elementId);

  // select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // for mobile devices

  // copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // alert the text has been copied
  alert('Copied Password!');
}

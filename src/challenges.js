
// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let result = (a === true && b === true) ? true : false;
  return (result)
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return (array);
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let string = (`${lastItem}, ${firstItem}`);
  return (string);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins *= 3) + (ties *= 1);
  return (pontos);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}

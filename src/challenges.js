// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
}   else {
    return false;
  }
}
console.log(compareTrue(true,true))
// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(word) {
    lastAndFirst = word[word.length - 1] + ", " + word[0];
    return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vencidos = wins * 3;
    let empatados = ties * 1;
return vencidos + empatados;
}

// Desafio 6
function highestCount() {
 // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > cat2) {
    return cat1
    } else if (cat2 > cat1) {
    return cat2
    } else {
return console.log("os gatos trombam e o rato foge")
}
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

// Desafio 1
function compareTrue(boleano1 , boleano2) {
  let resultado = true;
  if(boleano1 == true && boleano2 == true){
    return resultado = true;
  }else if(boleano1 == false && boleano2 == true){
    return resultado = false;
  } else if (boleano1 == false && boleano2 == false){
    return resultado = false;
  } 
}

// Desafio 2
function calcArea(base,height) {
  resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence() {

}

// Desafio 4
function concatName(nomes) {
  let n = nomes.length;
  return `${nomes[0]}, ${nomes[n-1]}`;
}

// Desafio 5
function footballPoints(wins,ties) {
  if(ties > 0){
    return ties;
  }
  if(wins > 0){
    wins = wins * 3;
    return wins;
  }
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
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

// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == true && b == true){
    return true;
  }
  else{
    return false;
  }
}

console.log(compareTrue(true,true))




// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  const areaTriangulo = (base*height)/2;
  return areaTriangulo; 
}

console.log(calcArea(4.1,2.5))





// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");  
}

console.log(splitSentence("ola trybe"))



//function splitSent() {
  //var str = "go trybe";
  //var res = str.split(" ");
  //return res;
//}

  //console.log(splitSent())



// Desafio 4
//namesArray = ['jesus', 'lucio', 'palli', 'ururi', 'elias', 'hermenegildo']
function concatName(namesArray) {
  // seu código aqui  
  return [namesArray[namesArray.length-1], namesArray[0]];
}
console.log(concatName(namesArray))



// Desafio 5
function footballPoints() {
  // seu código aqui
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

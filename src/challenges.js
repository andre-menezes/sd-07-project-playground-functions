// Desafio 1
function compareTrue(valor1,valor2) {
  let a = valor1;
  let b = valor2;
  let resposta = false;
  if (a == true && b == true){
    resposta = true;
    console.log(resposta);
  }else{
    console.log(resposta);
  }
  return resposta;
}
compareTrue(false,true);

// Desafio 2
function calcArea(base,height) {
  let a = base;
  let b = height;
  let area = 0;
    area = ((a * b) / 2);
  return area;
}

// Desafio 3
function splitSentence(param) {
  let string = param;
  let retorno = string.split(" ")
  return retorno; 
}

// Desafio 4
let nomes = ["lucas","Silvia","Vitor"];
function concatName(param) {
  let arrayDesafio4 = param[0];
  let ultimoNome = arrayDesafio4.toString();
  let array_inverted = param[param.length -1];
  let primeiroNome = array_inverted.toString();
  console.log("'"+ultimoNome+","+" "+primeiroNome+"'");
  return arrayDesafio4;
}
concatName(nomes);

// Desafio 5
function footballPoints(wins,ties) {
  let vitorias = wins;
  let empates = ties;
  let pontos_vitoria = 3;
  let ponto_empate = 1;
  let total = 0;
  total = (vitorias * pontos_vitoria)+(empates * ponto_empate);
  return total;
}

// Desafio 6
function highestCount(param) {
  let numeros = param;
  let maior = 0;
  let cont = 0; 
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maior){
      maior = numeros[i];
    }
  }
  for (let j = 0; j < numeros.length; j++){
    if (numeros[j] == maior){
      cont += 1;
    }
  }
  return cont;
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

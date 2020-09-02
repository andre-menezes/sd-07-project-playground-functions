// Desafio 1
function compareTrue(valorA, valorB) {
  if(valorA == true && valorB == true){
    return true;
  }
  if(valorA == false && valorB == false || valorA == true && valorB == false || valorA == false && valorB == true){
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base*height)/2);
}


// Desafio 3
function splitSentence(palavra) {
  let palavraSeparada = palavra.split(' ');
  return palavraSeparada;
}


// Desafio 4
function concatName(concatena) {
  return concatena[concatena.length-1] + ", "+  concatena[0];  
}

// Desafio 5
function footballPoints(wins,ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  return vitoria + empate;
}

// Desafio 6
function highestCount(maiorNumber) {
  let conta=1;
  let itemaux;
  let ordenado = maiorNumber.sort((a, b) => a - b);
  for(let item in ordenado){
      if(ordenado[item] === itemaux && itemaux >= ordenado[ordenado.length-1]  && itemaux != undefined ){
        conta += 1;
      }
      else{
        itemaux = ordenado[item];
      }
    }
    return conta;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 == cat2){
    return "os gatos trombam e o rato foge";
  }
  if(cat1 > cat2){
    return "cat1";
  }
  else if(cat2 > cat1){
    return "cat2";
  }
}

//console.log(catAndMouse(1, 1, 1));

// Desafio 8
function fizzBuzz(ArrayBuzz) {
  let formulacao = [] ;
  for(let item in ArrayBuzz){

    if((ArrayBuzz[item] % 3) == 0 && (ArrayBuzz[item] % 5) == 0){
      formulacao.push("fizzBuzz");
    }else if((ArrayBuzz[item] % 3) == 0){
          formulacao.push("fizz");
        }
        else if((ArrayBuzz[item] % 5) == 0){
          formulacao.push("buzz");
        }
    
    if((ArrayBuzz[item] % 3) != 0 && (ArrayBuzz[item] % 5) != 0){
      formulacao.push("bug!");
    }
  }
  return formulacao;
}

// Desafio 9
function encode(encodando) {
  let formPalavra ='';
  for(let item in encodando){
   if(encodando[item] == 'a'){
    formPalavra += '1';
    }else if(encodando[item] == 'e'){
      formPalavra += '2';
    }else if(encodando[item] == 'i'){
      formPalavra += '3';
    }else if(encodando[item] == 'o'){
      formPalavra += '4';
    }else if(encodando[item] == 'u'){
      formPalavra += '5';
    }
    else{
      formPalavra +=encodando[item];
    }

  }
  return formPalavra;

}

console.log(encode("hi there!"));

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

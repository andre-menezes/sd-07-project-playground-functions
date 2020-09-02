// Desafio 1 - OK
function compareTrue(bolean1, bolean2) {
  // seu código aqui
  return (bolean1 && bolean2);
}

// Desafio 2 - OK
function calcArea(base, height) {
  // seu código aqui
  return (base * height / 2);
}

// Desafio 3 - OK
function splitSentence(texto) {
  // seu código aqui
  return (texto.split(" "));
}

// Desafio 4 - OK
function concatName(arrayString) {
  // seu código aqui
  return (`${arrayString[arrayString.length-1]}, ${arrayString[0]}`);
} 

// Desafio 5 - OK
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties);
}

// Desafio 6 - OK
function highestCount(arrayNumeros) {
  // seu código aqui
  let count = 0;
  let higherCount = 0;

  for (let i = 0; i < arrayNumeros.length; i += 1) {
    count = 0;
    for (let j = 0; j < arrayNumeros.length; j += 1) {
      if (arrayNumeros[j] == arrayNumeros[i]) {
        count += 1;
      }
    }

    if (count > higherCount) {
      higherCount = count;
    }
  }

  return higherCount;

}

// Desafio 7 - OK
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let arrayString = [];

  for (i = 0; i < arrayNumeros.length; i += 1){
    if ((arrayNumeros[i] % 3 == 0) && (arrayNumeros[i] % 5 == 0)) {
      arrayString.push("fizzBuzz");
    } else if (arrayNumeros[i] % 3 == 0) {
      arrayString.push("fizz");
    } else if (arrayNumeros[i] % 5 == 0) {
      arrayString.push("buzz");
    } else {
      arrayString.push("bug!");
    }
  }

  return arrayString;
}

// Desafio 9
function encode(arrayWithVowels) {
  // seu código aqui
  let newString = "";
  for (let i = 0; i < arrayWithVowels.length; i += 1){
    switch (arrayWithVowels[i]) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
        newString += '5';
        break;
      default:
        newString += arrayWithVowels[i];    
    }
  }

  return newString;

}

function decode(arrayWithNumbers) {
  // seu código aqui
  let newStringDec = "";
  for (let i = 0; i < arrayWithNumbers.length; i += 1){
    switch (arrayWithNumbers[i]) {
      case '1':
        newStringDec += 'a';
        break;
      case '2':
        newStringDec += 'e';
        break;
      case '3':
        newStringDec += 'i';
        break;
      case '4':
        newStringDec += 'o';
        break;
      case '5':
        newStringDec += 'u';
        break;
      default:
        newStringDec += arrayWithNumbers[i];    
    }
  }

  return newStringDec;

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

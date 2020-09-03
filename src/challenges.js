// Desafio 1
function compareTrue(isTrue1, isTrue2) {
  if (isTrue1 === true && isTrue2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let arrayWords = sentence.split(' ');
  return arrayWords;
}

// Desafio 4
function concatName(array) {
  return `${array[(array.length - 1)]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsQt = 0;
  let tiesQt = 0;
  for (let i = 0; i < wins; i += 1) {
    winsQt += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    winsQt += 1;
  }
  return winsQt + tiesQt;
}


// Desafio 6
function highestCount(array) {
  let biggest = 0;
  let referenceCount = 0;
  for(let i = 0; i < array.length; i += 1){
     if(i == 0){
        biggest = array[i];
     } else if(array[i] > biggest){
        biggest = array[i];
     }
  }
  for(let count in array){
    if (biggest == array[count]){
      referenceCount += 1;
    }
  }
  return referenceCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseDistanceBetweenCat1 = mouse > cat1 ? (mouse - cat1) : (cat1 - mouse);
  let mouseDistanceBetweenCat2 = mouse > cat2 ? (mouse - cat2) : (cat2 - mouse);
  if (mouseDistanceBetweenCat1 > mouseDistanceBetweenCat2) {
    return 'cat2';
  } else if (mouseDistanceBetweenCat1 < mouseDistanceBetweenCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let wordsCollections = [];
  for (let number in array) {
    if (array[number] % 3 === 0 && array[number] % 5 === 0) {
      wordsCollections.push('fizzBuzz');
    } else if (array[number] % 3 === 0) {
      wordsCollections.push('fizz');
    } else if (array[number] % 5 === 0) {
      wordsCollections.push('buzz');
    } else {
      wordsCollections.push('bug!');
    }
  }
  return wordsCollections;
}

// Desafio 9
function encode(sentence) {
  let newSentence = "";
  for (let letter in sentence) {
    if (sentence[letter] === sentence[letter].toLowerCase()) {
      sentence[letter] === 'a' ? newSentence += '1' : 
      sentence[letter] === 'e' ? newSentence += '2' : 
      sentence[letter] === 'i' ? newSentence += '3' :
      sentence[letter] === 'o' ? newSentence += '4' : 
      sentence[letter] === 'u' ? newSentence += '5' : newSentence += sentence[letter];
    } else {
      newSentence += sentence[letter]
    }
  }
  return newSentence;
}

function decode(sentence) {
  let newSentence = "";
  for (let letter in sentence) {
    sentence[letter] === '1' ? newSentence += 'a' : 
    sentence[letter] === '2' ? newSentence += 'e' : 
    sentence[letter] === '3' ? newSentence += 'i' :
    sentence[letter] === '4' ? newSentence += 'o' : 
    sentence[letter] === '5' ? newSentence += 'u' : newSentence += sentence[letter];
  }
  return newSentence;
}

// Desafio 10
function techList(array, name) {
  let structuredArray = [];
  if (array == '') {
    return 'Vazio!';
  } else {
    for (let tech in array) {
      structuredArray[tech] = { tech: array[tech], name: name };
    }
  }
  // resolução de ordem encontrada no seguinte link ->  https://bit.ly/32RzzTB
  structuredArray.sort((a, b) => {
    if(a.tech < b.tech) { 
      return -1; 
    } else if(a.tech > b.tech) { 
      return 1; 
    }
    return 0;
  });
  return structuredArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let reformuledNumber = '';
  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (let number in array){
      let repeatedNumbs = 0;
      for (let revision in array){
      if (array[revision] == array[number]){
        repeatedNumbs += 1;
        }
      }
      if (array[number] > 9 || array[number] < 0 || repeatedNumbs >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        number == 0 ? reformuledNumber += '(' + array[number] :
        number == 2 ? reformuledNumber += ')'+ ' ' + array[number] :
        number == 7 ? reformuledNumber += '-' + array[number] :
        reformuledNumber += array[number];
      }
    }
  }
  return reformuledNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkLines = true ?
  lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) &&
  lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) &&
  lineC < lineB + lineA && lineC > Math.abs(lineB - lineA) :
  false;
  
  return checkLines;
}
// Desafio 13
function hydrate(string) {
  let drinkQty = 0;
  let numbers = string.replace(/[^1-9]/g, '');
  for (let i = 0; i < numbers.length; i += 1) {
    drinkQty += Number(numbers[i]);
  }
  return drinkQty == 1 ? (drinkQty) + ' copo de água' : (drinkQty) + ' copos de água';
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

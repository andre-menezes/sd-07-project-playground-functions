// Desafio 1

function compareTrue(a,b) {
  // seu código aqui
  if (a && b)
  {
    return (true);
  }
  else
  {
    return (false);
  }
}

// Desafio 2
function calcArea(base,height) {
  return (base*height/2);
}

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  let array = [];
  array=string.split(" ");
  return(array);
}

// Desafio 4

function concatName(array) {
  // seu código aqui
  let c = array.length-1;
  let string = array[c] +", "+ array[0];
  return (string);
}

// Desafio 5

function footballPoints(wins,ties) {
  // seu código aqui
  let pontos=((wins*3)+ties);
  return(pontos)
}

// Desafio 6

function highestCount(array) {
  let maior=0,c=0;
  for (let key in array)
  {
      for (let key2 in array)
          if (array[key]>array[key2]){
              if (array[key]>maior){
                  maior=array[key];
              }
              else{
                  maior=maior;
              }
          }
          else
          {   
              if (array[key2>maior]){
                  maior=array[key2];
                 
              }
              else{
                  maior=maior;
              }
          }
  }
  for (let i=0; i<array.length; i++)
  {
    if (maior == array[i])
    {
      c++;
    }
  }
  return(c);
}

// Desafio 7

function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let gato1 = cat1 - mouse;
  let gato2 = cat2 - mouse;
  if (gato1<0)
  {
    gato1=gato1*(-1);
  }
  if (gato2<0)
  {
    gato2=gato2*(-1);
  }
  let c="os gatos trombam e o rato foge"
  if (gato1>gato2)
  {
    return("cat2");
  }
  else
  {
    if (gato1==gato2)
    {
      return(c);
    }
    else
    {
      return("cat1");
    }
  }
}

// Desafio 8

function fizzBuzz(array) {
  // seu código aqui
  let array_r=[];
  for (let key in array)
  {
    if (array[key]%3 == 0 && array[key]%5 == 0)
    {
      array_r[key]="fizzBuzz";
    }
    else
    {
      if (array[key]%5==0)
      {
        array_r[key]="buzz"
      }
      else
      {
        if (array[key]%3==0)
        {
          array_r[key]="fizz"
        }
        else
        {
          array_r[key]="bug!"
        }
      }
    }
  }
  return(array_r);
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let array=string.split("");
  let array_encoded = [];
  let str_encoded="";
  for (let key in array)
  {
    if(array[key]=="a" || array[key]=="e" ||array[key]=="i" ||array[key]=="o" ||array[key]=="u")
    {
      switch (array[key])
      {
        case "a":
          array_encoded[key]=1;
          break;
        case "e":
          array_encoded[key]=2;
          break;
        case "i":
          array_encoded[key]=3;
          break;
        case "o":
          array_encoded[key]=4;
          break;
        case "u":
          array_encoded[key]=5;
          break;
      }
    }
    else
    {
      array_encoded[key]=array[key];
    }
  }
  for (let key2 in array_encoded)
  {
    str_encoded=str_encoded+array_encoded[key2];
  }
  return(str_encoded);
}

function decode(string) {
  // seu código aqui
  let array=string.split("");
  let array_decoded = [];
  let str_decoded="";
  for (let key in array)
  {
    if(array[key]=="1" || array[key]=="2" ||array[key]=="3" ||array[key]=="4" ||array[key]=="5")
    {
      switch (array[key])
      {
        case "1":
          array_decoded[key]="a";
          break;
        case "2":
          array_decoded[key]="e";
          break;
        case "3":
          array_decoded[key]="i";
          break;
        case "4":
          array_decoded[key]="o";
          break;
        case "5":
          array_decoded[key]="u";
          break;
      }
    }
    else
    {
      array_decoded[key]=array[key];
    }
  }
  for (let key2 in array_decoded)
  {
    str_decoded=str_decoded+array_decoded[key2];
  }
  return(str_decoded);
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

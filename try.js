function points(games) {
  let total = 0;
  for (let match of games) {
    let x = match[0], y = match[2];
    if (x > y) total += 3;
    else if (x === y) total += 1;
    else if (x < y) total += 0;
    else { total = "Invalid"}
  } 
  return total;
}
 console.log (points(["3:1", "2:2", "0:1"]));


// ending word 
 function solution(str,ending){
    return str.endsWith(ending)
}
console.log(solution("aisle","le"))


// vowels count
function getCount(str) {
    res = 0;
    const v = "aAeEIiOoUu";
    for(let i = 0; i < str.length; i++){
        if(v.includes(str[i])) {
        res += 1;
    }
  }
  return res;
}
console.log(getCount("sArah"))

// // Q
function DNAtoRNA(dna) {
  let result ="";
  for (let i = 0; i < dna.length; i += 1) {
 if(dna[i]=== "T"){
result += "U";

  } else {result += dna[i]
  };
    }
     return result;
}
console.log(DNAtoRNA("UUU"))

// Q
function greet (name, owner) {
  if (name === owner){
    return "HI Boss";
     } else { return "HI Guest"
        };
  }
  console.log(greet("dorji","dorji"))

  // Q
  function findShort(s) {
  const words = s.split(' ');
  let minLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < minLength) {
      minLength = words[i].length;
    }
  }

  return minLength;
}
console.log(findShort("Hello Sam"))

//QQ
function retDog(){
  return "Dog";
}
console.log(retDog())
//Q
const stringToNumber = function(str){
  return Number(str);
}
console.log(stringToNumber("14377"))

function remExcm(str1){
  res ="";
  for(let i =0; i<str1.length; i++){
    if(str1[i] !== "!"){
      res+= str1[i];
    }
  }return res;

}
console.log(remExcm("hi"))
function rowSumOddNumbers(n) {
  return n * n * n;
}

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(2)); // 8
console.log(rowSumOddNumbers(3)); // 27
console.log(rowSumOddNumbers(4)); // 64
console.log(rowSumOddNumbers(5)); // 125

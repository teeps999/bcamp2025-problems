// console.log("hey");
function reverseString(wrd) {
  let res = "";
  for (let i = wrd.length - 1; i >= 0; i-=1) {
    res += wrd[i];
  }
  return res;
}
// console.log(reverseString("hello"))

function replace(str, charToReplace, strReplacement){
    let res1 ="";
    for(let i = 0; i< str.length; i+=1){
        if(str[i] === charToReplace){
            res1 += strReplacement;
    } else{
        res1 += str[i];
    }
 }
return res1;
}
// console.log(replace("hello","l", "ff"));

function strLengthEven(str1) {
    if (str1.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// console.log(strLengthEven("hell"));
function findRabbit(arr){
return arr.indexOf("rabbit");
}
console.log(findRabbit(["cat","dog","seal","rabbit"]));

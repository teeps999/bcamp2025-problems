// console.log("hey");
// function reverseString(wrd) {
//   let res = "";
//   for (let i = wrd.length - 1; i >= 0; i-=1) {
//     res += wrd[i];
//   }
//   return res;
// }
// console.log(reverseString("hello"))

function replace(str, charToReplace, strReplacement){
    let res ="";
    for(let i = 0; i< str.length; i+=1){
        if(str[i] === charToReplace){
            res += strReplacement;
    } else{
        res += str[i];
    }
 }
return res;
}
console.log(replace("hello","l", "sad"));


// console.log("hey");
function reverseString(wrd) {
  let res = "";
  for (let i = wrd.length - 1; i >= 0; i-=1) {
    res += wrd[i];
  }
  return res;
}
console.log(reverseString("hello"))

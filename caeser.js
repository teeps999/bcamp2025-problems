function caeser(wrd) {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  let result = "";  

  for (let lttr of wrd.toLowerCase()) {
    let indx = alph.indexOf(lttr);
    if (indx === -1) {
      result += lttr;
    } else {
      let nIndx = (indx + 13) % 26;
      result += alph[nIndx];
    }
  }
  return result;
}
console.log(caeser("uryyb"));

// function caeser(wrd){
//     let res ="";
//     for(let i = 0; i< wrd.length; i+= 1){
//         let lttr = wrd[i];
//         let cde = wrd.charCodeAt(i);
//         console.log(wrd[i], wrd.charCodeAt(i))
//     }
    
// }

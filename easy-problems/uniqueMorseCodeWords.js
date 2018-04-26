var uniqueMorseRepresentations = function(words) {
  let morseCodeLetters = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let transformations = {};
  
  //convert each word to morse code
  for (var x = 0; x < words.length; x++) {
    let word = words[x];
    word = word.toLowerCase();
    let mcWord = '';
    for (var y = 0; y < word.length; y++) {
      let code = word.charCodeAt(y) - 97;
      mcWord += morseCodeLetters[code];
    }
    transformations[mcWord] = true;
  }
  return Object.keys(transformations).length;
};
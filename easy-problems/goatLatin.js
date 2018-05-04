// A sentence S is given, composed of words separated by spaces. 
//Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up
// language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
 
// If a word begins with a consonant (i.e. not a vowel), remove the first letter 
// and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
 
// Add one letter 'a' to the end of each word per its word index in the
// sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second 
// word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin. 


var toGoatLatin = function(S) {
  let words = S.split(' ');
  for (var x = 0; x < words.length; x++) {
    let word = words[x];
    let firstLetter = word[0].toLowerCase();
    let translatedWord;
    switch(firstLetter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        translatedWord = word + 'ma';
        break;
      default:
        translatedWord = word.slice(1) + word[0] + 'ma';
        break;
    }
    for (var y = 0; y < x + 1; y++) {
      translatedWord += 'a';
    }
    words[x] = translatedWord;
  }
  return words.join(' ');
};
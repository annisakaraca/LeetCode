var compress = function(chars) {
  let anchor = 0;
  let read = 0;
  while (read < chars.length) {
    if (read === chars.length - 1) {
      read++;
    }
    if (chars[read] !== chars[anchor] || !(chars[read])) {
      let length = read - anchor;
      if (length !== 1) {
        let lengthChars = String(length).split(''); 
        chars.splice(anchor + 1, length - 1, ...lengthChars);
        read = anchor + lengthChars.length + 2;
        anchor = read - 1;
      } else {
        anchor = read;
        read++;
      }
    } else if (chars[read] === chars[anchor]){
      read++;
    }
  }
  return chars.length;
}

let test = compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]
);
console.log(test);
let test2 = compress(["a","a","b","b","c","c","c"]);
console.log(test2);

// time complexity: O(n^2)

// ORIGINAL IMPLEMENTATION:
// var compress = function(chars) {
//   let letter = chars[0];
//   let countIndex;
//   let letterCount = 1;
//   let x = 1;
//   while (x < chars.length) {
//     if (chars[x] === letter && !countIndex) {
//       countIndex = x;
//       chars[x] = String(++letterCount);
//       x++;
//     } else if (chars[x] === letter && countIndex) {
//       letterCount++;
//       if (letterCount < 10) {
//         chars[countIndex] = String(letterCount);
//         chars.splice(x, 1);
//       } else {
//         let strCount = String(letterCount).split('');
//         chars[countIndex] = strCount[0];
//         chars[countIndex + 1] = strCount[1];
//         if (countIndex + 1 !== x) {
//           chars.splice(x, 1);
//         } else {
//           x++;
//         }
//       }
//     } else {
//       letter = chars[x];
//       countIndex = undefined;
//       x++;
//     }
//   }
//   return chars.length; 
// };
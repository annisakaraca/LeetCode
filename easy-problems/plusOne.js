var plusOne = function(digits) {
  if (digits[digits.length-1] + 1 !== 10) {
    digits[digits.length - 1]++;
  } else {
    let carryover = true;
    let index = digits.length - 1;
    while (carryover && index > 0) {
      digits[index] = 0;
      if (digits[index-1] + 1 !== 10 && index !== 0) {
        digits[index-1]++;
        carryover = false;
      } else {
        index--;
      }
    }
    if (carryover && index === 0) {
      digits[index] = 0;
      digits.splice(0, 0, 1);
    }
  }
  return digits;
};

let test = plusOne([9]);
console.log(test);
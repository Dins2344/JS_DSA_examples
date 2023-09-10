var plusOne = function (digits) {
  let last = digits.join("");
  let nums = BigInt(last) + BigInt(1);

  console.log(last);
  console.log(nums);

  digits.splice(0, digits.length);

  let string = nums.toString();
  for (let i = 0; i < string.length; i++) {
    digits.push(string[i]);
  }
  console.log(digits);
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);

function reverseString(string) {
  let splitString = string.split('');
  let reverseString = splitString.reverse();
  let joinString = reverseString.join('');
  return joinString;
}

module.exports = reverseString;
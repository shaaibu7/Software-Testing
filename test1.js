function stringLength(string) {
  let count = 0;
  if(string.length > 0 && string.length <= 10) {
    const stringArray = string.split('');
    stringArray.forEach(() => count++ );
    return count;
  }else {
    return;
  }
}

module.exports = stringLength;
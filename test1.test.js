const stringCount = require('./test1.js');
const reverseString = require('./test2');
const calculator = require('./test3.js');
const capitalizeString = require('./test4');

test('string should equal the length', () => {
  let string = 'shaaibu';
  expect(string.length).toBeLessThanOrEqual(10);
  expect(stringCount(string)).toEqual(string.length);
  expect(stringCount("")).toBeUndefined;
})

test("reverse 'suleiman' to 'namielus'", () => {
  const string = 'suleiman';
  expect(reverseString(string)).toEqual('namielus')
});


// Calculator test units

describe('Addition', () => {
  test('add 2 + 2', () => {
    expect(calculator.add(2, 2)).toEqual(4)
  });

  test('subtract 2 form 4', () => {
    expect(calculator.subtract(4, 2)).toEqual(2)
  });

  test('multiply 4 by 5 ', () => {
    expect(calculator.multiply(4, 5)).toEqual(20)
  });

  test('divide 8 by 2', () => {
    expect(calculator.divide(8, 2)).toEqual(4)
  });
  
})

//capitalize string testing

test('capitalize suleiman to be Suleiman', () => {
  const string = 'suleiman';
  expect(capitalizeString(string)).toEqual('Suleiman');
});


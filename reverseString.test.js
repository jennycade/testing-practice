const reverseString = require('./reverseString');

test('reverses abc to cba', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('reverses 123 to 321', () => {
  expect(reverseString('123')).toBe('321');
});
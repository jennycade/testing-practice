/*
Caesar Cipher. Read about it on this website: http://practicalcryptography.com/ciphers/caesar-cipher/

Don’t forget to test wrapping from z to a.
Don’t forget to test keeping the same case.
Don’t forget to test punctuation!
For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesar() function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.
*/

const caesar = require('./caesar');

test('Transforms abc to bcd for shift = 1', () => {
  expect(caesar('abc', 1)).toBe('bcd');
});

test('Transforms abc to cde for shift = 2', () => {
  expect(caesar('abc', 2)).toBe('cde');
});

test('Wraps around the alphabet: Transforms xyz to yza for shift = 1', () => {
  expect(caesar('xyz', 1)).toBe('yza');
});

test('Leaves non-characters alone: Transforms `boy oh boy!` to `cpz pi cpz!` for shift =1', () => {
  expect(caesar('boy oh boy!', 1))
    .toBe('cpz pi cpz!')
});

test('Works for uppercase', () => {
  expect(caesar('Jenny loves Lyra', 1))
    .toBe('Kfooz mpwft Mzsb');
});

test('Works for negative shifts', () => {
  expect(caesar('bcd', -1)).toBe('abc');
});

test('Wraps around the alphabet for negative shifts', () => {
  expect(caesar('abc', -1)).toBe('zab');
});

test('Wraps around the alphabet for large negative shifts', () => {
  expect(caesar('abc', -52)).toBe('abc');
});
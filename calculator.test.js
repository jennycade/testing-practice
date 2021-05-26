/*
A calculator object that contains the basic operations: add, subtract, divide, and multiply.
*/

const calculator = require('./calculator');

test('contains add', () => {
  expect(calculator)
    .toMatchObject({add: expect.any(Function)});
});

test('contains subtract', () => {
  expect(calculator)
    .toMatchObject({subtract: expect.any(Function)});
});

test('contains divide', () => {
  expect(calculator)
    .toMatchObject({divide: expect.any(Function)});
});

test('contains multiply', () => {
  expect(calculator)
    .toMatchObject({multiply: expect.any(Function)});
});

test('adds 1 and 2 to get 3', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('subtracts 1 from 2 to get -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divides 1 by 2 to get 0.5', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('returns Infinity when dividing by 0', () => {
  expect(calculator.divide(1, 0)).toBe(Infinity);
});

test('multiplies 1 by 2 to get 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});


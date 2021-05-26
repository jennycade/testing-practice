const summaryStats = require('./summaryStats');

test('Length of [1, 2, 3] is 3', () => {
  expect(summaryStats([1,2,3]))
    .toMatchObject({length: 3});
});

test('Calculates minimum', () => {
  expect(summaryStats([1,2,3]))
    .toMatchObject({min: 1});
});

test('Calculates maximum', () => {
  expect(summaryStats([1, 2, 3]))
    .toMatchObject(
      {
        max: 3,
      }
    );
});

test('Calculates mean', () => {
  expect(summaryStats([1,2,3]))
    .toMatchObject(
      { average: 2, }
    )
});
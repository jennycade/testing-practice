const capitalize = require('./capitalize');

test('capitalizes boop to Boop', () => {
  expect(capitalize('boop')).toBe('Boop');
});

test('does not change Boop', () => {
  expect(capitalize('Boop')).toBe('Boop');
});
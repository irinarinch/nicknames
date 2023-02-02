import Validator from '../validator';

const data = [
  [1, 'irina', true],
  [2, '1irina', false],
  [3, 'irina1', false],
  [4, '-irina', false],
  [5, 'irina-', false],
  [6, '_irina', false],
  [7, 'irina_', false],
  [8, 'irina7898s', false],
  [9, 'irina000s', true],
  [10, ' irina000s', false],
  [11, 'irina$@#000s', false],
  [12, 'ir ina$@#000s', false],
];

test.each(data)('%s testing nickname %s', (_, nickname, expected) => {
  const validator = new Validator(nickname);

  expect(validator.validateUsername()).toBe(expected);
});

test('testing uncaught error', () => {
  function getError() {
    const validator = new Validator('');
    validator.validateUsername();
  }

  expect(getError).toThrow(new Error('invalid name'));
});

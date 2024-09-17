import ErrorRepository from '../map';

test.each([
  [403, '403 Access denied'],
  [404, '404 File not found'],
  [500, '500 Internal server error'],
  [502, '502 Bad Gataway'],
  [503, '503 Service temporarily unavailable'],
  [510, 'Unknown error'],
])('error repo', (obj, expected) => {
  const result = new ErrorRepository();
  expect(result.translate(obj)).toBe(expected);
});
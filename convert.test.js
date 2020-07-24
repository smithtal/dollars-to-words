const convert = require("./index");

test("integer values less than 10", () => {
  expect(convert(1)).toEqual("one");
  expect(convert(2)).toEqual("two");
  expect(convert(3)).toEqual("three");
  expect(convert(4)).toEqual("four");
  expect(convert(5)).toEqual("five");
  expect(convert(6)).toEqual("six");
  expect(convert(7)).toEqual("seven");
  expect(convert(8)).toEqual("eight");
  expect(convert(9)).toEqual("nine");
});

test("integer values greater than 9 and less than 20", () => {
  expect(convert(10)).toEqual("ten");
  expect(convert(11)).toEqual("eleven");
  expect(convert(12)).toEqual("twelve");
  expect(convert(13)).toEqual("thirteen");
  expect(convert(14)).toEqual("fourteen");
  expect(convert(15)).toEqual("fifteen");
  expect(convert(16)).toEqual("sixteen");
  expect(convert(17)).toEqual("seventeen");
  expect(convert(18)).toEqual("eighteen");
  expect(convert(19)).toEqual("nineteen");
});

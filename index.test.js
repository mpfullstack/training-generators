function* myGenerator() {
  let a = 0;
  let b = 1;
  yield ++a; // ++a - First a is incremented then yield is done
  yield a++; // a++ yield is done with a value then a is incremented
  a = b + a;
  yield a;
}

describe('Testing function generators', () => {
  test(`Expect first yield value to be 1`, () => {
    const myGen = myGenerator();
    expect(myGen.next().value).toEqual(1);
  });
  test(`Expect second yield value to be 1`, () => {
    const myGen = myGenerator();
    myGen.next();
    expect(myGen.next().value).toEqual(1);
  });
  test(`Expect third yield value to be 3`, () => {
    const myGen = myGenerator();
    myGen.next();
    myGen.next();
    expect(myGen.next().value).toEqual(3);
  });
});
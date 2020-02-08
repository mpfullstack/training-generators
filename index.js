function* myGenerator() {
  let a = 0;
  let b = 1;
  yield ++a;
  a++;
  a = b + a;
  yield a;
}

const myGen = myGenerator();
console.log(myGen.next());
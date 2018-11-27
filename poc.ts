const testFunction = (a: number, b: number) => {
  if (a > b) {
    return;
  } else if (a < b) {
    return;
  } else if (a === b) {
    return;
  } else {
    throw new Error("Unreachable code");
  }
}

testFunction(1, 2);

testFunction(1, 0 / 0);

testFunction(1, Math.log(-1));

testFunction(1, Math.sqrt(-2));

testFunction(1, Math.pow(99999999, 99999999));

testFunction(1, parseFloat('string'));

const chai = require("chai");
const { expect } = chai;

describe("Reduce exercise", function () {
  it("reduce test 1 (sum)", function () {
    let sum = [1, 2, 3, 4, 5].reduce((value, curr) => value + curr);
    expect(sum).to.eql(15);
  });
  it("reduce test 2 (deduct)", function () {
    let deductor = [10, 8, 3, 1].reduce((value, curr) => value - curr);
    expect(deductor).to.eql(-2);
  });
  it("reduce test 3 (multiply)", function () {
    let multiplicator = [5, 3, 2, 10].reduce((value, curr) => value * curr);
    expect(multiplicator).to.eql(300);
  });
  it("reduce test 4 (divide)", function () {
    let divider = [50, 2, 5, 1].reduce((value, curr) => value / curr);
    expect(divider).to.eql(5);
  });
  it("reduce test 5 (object key sum)", function () {
    let objSum = [{ a: 6 }, { a: 10 }, { a: 23 }].reduce(
      (value, curr) => value + curr.a,
      0
    );
    expect(objSum).to.eql(39);
  });
  it("reduce test 6 (words) ", function () {
    let words = ["a", "b", "c", "d"].reduce((value, curr) => {
      return value + curr;
    });
    expect(words).to.eql("abcd");
  });
});

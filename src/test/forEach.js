const chai = require("chai");
const { expect } = chai;

describe("forEach exercise", function () {
  it("forEach test 1", function () {
    const polje1 = ["sok od", "pita od", "salata od"];
    const polje2 = [];
    polje1.forEach(function (dodaj) {
      polje2.push(dodaj + " jabuke");
    });

    expect(polje2).to.eql([
      "sok od jabuke",
      "pita od jabuke",
      "salata od jabuke",
    ]);
  });
  it("forEach test 2", function () {
    let brojevi = [1, 2, 3];
    brojevi.forEach(myfunction);
    function myfunction(value, index, arr) {
      arr[index] = value + 1;
    }
    expect(brojevi).to.eql([2, 3, 4]);
  });
  it("forEach test 3", function () {
    let brojevi = [2, 3, 4];
    brojevi.forEach(myfunction);
    function myfunction(value, index, arr) {
      arr[index] = value - 1;
    }
    expect(brojevi).to.eql([1, 2, 3]);
  });
  it("forEach test 4", function () {
    let brojevi = [2, 3, 4];
    brojevi.forEach(myfunction);
    function myfunction(value, index, arr) {
      arr[index] = value * 2;
    }
    expect(brojevi).to.eql([4, 6, 8]);
  });
  it("forEach test 5", function () {
    let brojevi = [4, 6, 8];
    brojevi.forEach(myfunction);
    function myfunction(value, index, arr) {
      arr[index] = value / 2;
    }
    expect(brojevi).to.eql([2, 3, 4]);
  });
});

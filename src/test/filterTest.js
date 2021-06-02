const chai = require("chai");
const { expect } = chai;

describe("Filter exercise", function () {
  it("filter test 1", function () {
    let rijeci = [
      "kompjuter",
      "jabuka",
      "televizija",
      "sok",
      "policija",
      "tri",
    ];
    const result = rijeci.filter((rijec) => rijec.length > 6);
    expect(result).to.eql(["kompjuter", "televizija", "policija"]);
  });
  it("filter test 2", function () {
    let rijeci = [
      "kompjuter",
      "jabuka",
      "televizija",
      "sok",
      "policija",
      "tri",
    ];
    const result = rijeci.filter((rijec) => rijec.length < 7);
    expect(result).to.eql(["jabuka", "sok", "tri"]);
  });
  it("filter test 3", function () {
    function veceOd(value) {
      return value >= 10;
    }
    let filter = [25, 11, 2, 9, 30].filter(veceOd);
    expect(filter).to.eql([25, 11, 30]);
  });
  it("filter test 4", function () {
    function manjeOd(value) {
      return value <= 10;
    }
    let filtriraj = [25, 11, 2, 9, 30].filter(manjeOd);
    expect(filtriraj).to.eql([2, 9]);
  });
  it("filter test 5", function () {
    function prostiBr(value) {
      return value % 2 == 0;
    }
    var filtriraj = [20, 38, 57, 19, 88].filter(prostiBr);
    expect(filtriraj).to.eql([20, 38, 88]);
  });
});

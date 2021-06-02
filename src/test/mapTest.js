const chai = require("chai");
const { expect } = chai;
const {
  mapa,
  duljinaSlova,
  dijeljenje,
  zbrajanje,
  oduzimanje,
  malaSlova,
  velikaSlova,
} = require("../mapexamples.js");

describe("Map examples", function () {
  it("should return correct array", function () {
    expect(mapa()).to.eql([10, 20, 40]);
  });
  it("should return numbers divide by 2", function () {
    expect(dijeljenje()).to.eql([2, 5, 4, 8]);
  });
  it("should return numbers sum by 10", function () {
    expect(zbrajanje()).to.eql([10, 20, 15, 40]);
  });
  it("should return numbers deduct by 5", function () {
    expect(oduzimanje()).to.eql([2, 6, 19, 15]);
  });
  it("should return correct letter length", function () {
    expect(duljinaSlova()).to.eql([1, 2, 3, 4]);
  });
  it("should return lowercased words", function () {
    expect(malaSlova(["DAnaS", "JE", "LijeP", "DAN"])).to.eql([
      "danas",
      "je",
      "lijep",
      "dan",
    ]);
  });
  it("should return uppercased words", function () {
    expect(velikaSlova(["DAnaS", "JE", "LijeP", "DaN"])).to.eql([
      "DANAS",
      "JE",
      "LIJEP",
      "DAN",
    ]);
  });
});

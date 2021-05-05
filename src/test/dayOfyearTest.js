var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const dayOfYear = require("../dayOfYear");

describe("Day of year", function () {
  it("dayOfYear should be a function", function () {
    dayOfYear(1);
  });
  it("should return 1 for 2010/1/1", function () {
    expect(dayOfYear(2010, 1, 1)).to.equal(1);
  });
  it("should return 32 for 2010/2/1", function () {
    expect(dayOfYear(2010, 2, 1)).to.equal(32);
  });
  it("should return 61 for 2008/3/1", function () {
    expect(dayOfYear(2008, 3, 1)).to.equal(61);
  });
  it("should return 60 for 2018/3/1", function () {
    expect(dayOfYear(2018, 3, 1)).to.equal(60);
  });
  it("should return 91 for 2015/4/1", function () {
    expect(dayOfYear(2015, 4, 1)).to.equal(91);
  });
});

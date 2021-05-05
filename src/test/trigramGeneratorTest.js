var assert = require("assert");
var chai = require("chai");
const trigram = require("../trigramGenerator");
var expect = chai.expect;
var should = chai.should;

describe("trigram", function () {
  it("trigram should be a function", function () {
    trigram("");
  });
  it("function should throw error if parameter is not string", function () {
    expect(() => trigram(1)).to.throw(Error);
  });
  it("function should return array", function () {
    expect(trigram("")).to.deep.equal([""]);
  });
  it("function should return value in array", function () {
    expect(trigram("text")).to.deep.equal(["text"]);
  });
});

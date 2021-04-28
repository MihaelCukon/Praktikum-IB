var assert = require('assert');
var chai = require("chai");
const priceListFormatter = require('../hotelPrices');
var expect = chai.expect;
var should = chai.should;

describe('hotel price list test', function() {
    it('priceListFormatter should be a function', function () {
        priceListFormatter(1);
    });
});
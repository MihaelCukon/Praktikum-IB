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
});

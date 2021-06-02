function mapa() {
  const polje1 = [5, 10, 20];
  const polje2 = polje1.map((vrijednost) => {
    return vrijednost * 2;
  });
  return polje2;
}

function dijeljenje() {
  var poljeBrojeva = [4, 10, 8, 16];
  return poljeBrojeva.map((broj) => {
    return broj / 2;
  });
}

function zbrajanje() {
  var poljeBrojeva = [0, 10, 5, 30];
  return poljeBrojeva.map((broj) => {
    return broj + 10;
  });
}

function oduzimanje() {
  var poljeBrojeva = [7, 11, 24, 20];
  return poljeBrojeva.map((broj) => {
    return broj - 5;
  });
}

function duljinaSlova() {
  var slova = ["a", "bb", "ccc", "dddd"];
  var duljina = slova.map(function (slovo) {
    return slovo.length;
  });
  return duljina;
}

function malaSlova(slova) {
  return slova.map((slovo) => slovo.toLowerCase());
}

function velikaSlova(slova) {
  return slova.map((slovo) => slovo.toUpperCase());
}

module.exports = {
  mapa,
  dijeljenje,
  zbrajanje,
  oduzimanje,
  duljinaSlova,
  malaSlova,
  velikaSlova,
};

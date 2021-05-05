function trigram(text) {
  if (typeof text != "string") throw Error();

  return [text];
}

module.exports = trigram;

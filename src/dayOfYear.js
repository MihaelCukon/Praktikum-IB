dayOfYear = (y, m, d) => {
  const mj = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
    ++mj[1];
  }
  var Y = 0;
  for (var i = 0; i < m - 1; ++i) {
    Y += mj[i];
  }
  return Y + d;
};
module.exports = dayOfYear;

function repeatStr(str, count) {
  if (count < 0) throw new Error("negative counts are not valid");
  return str.repeat(count);
}

module.exports = repeatStr;
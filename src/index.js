
exports.min = function min (array) {
  return (typeof array ==="undefined" || array.length === 0)?0: array.sort((a,b) => a-b)[0];
}

exports.max = function max (array) {
  return (typeof array ==="undefined"|| array.length === 0)?0: array.sort((a,b) => b-a)[0];
}

exports.avg = function avg (array) {
  return (typeof array ==="undefined"|| array.length === 0)?0: array.reduce((a,b) => a+b)/array.length;
}

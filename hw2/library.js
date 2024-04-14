
// invertBoolean:
//   Accepts a single boolean argument and returns its inverted value.
//   If the argument is not a boolean, it should throw an error.
function invertBoolean(value) {
  if (typeof value !== 'boolean') {
    throw new Error('invertBoolean requires a boolean argument');
  }
  return !value;
}

module.exports = {invertBoolean};
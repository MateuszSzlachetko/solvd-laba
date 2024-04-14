// invertBoolean:
//   Accepts a single boolean argument and returns its inverted value.
//   If the argument is not a boolean, it should throw an error.
function invertBoolean(value) {
  if (typeof value !== 'boolean') {
    throw new Error('invertBoolean requires a boolean argument');
  }
  return !value;
}

// convertToNumber:
//   Accepts a single argument of any type and attempts to convert it to a number.
//   For strings, use parseFloat() or parseInt() for conversion.
//   For other types, use appropriate operations or functions to perform the conversion.
//   If the conversion is not possible, it should throw an error.
function convertToNumber(value) {
  switch (typeof value) {
    case 'string':
      const result = parseFloat(value);
      if (isNaN(result)) {
        throw new Error(`Cannot convert string: '${value}' to number`);
      }
      return result;

    case 'boolean':
      return value ? 1 : 0;

    case 'number':
      return value;

    case 'object' && value === null:
      return 0;

    case 'object' && value === []:
      return 0;

    case 'undefined':
      throw new Error('Cannot convert undefined to number');

    default:
      const num = Number(value);
      if (isNaN(num)) {
        throw new Error(`Cannot convert ${value} to number`);
      }
      return num;
  }
}

// stringifyValue:
//   Accepts a single argument of any type and converts it to a string representation.
//   For objects and arrays, use JSON.stringify() for serialization.
//   For other types, use the appropriate built-in methods or operations to convert them to strings.
function stringifyValue(value) {
  if (typeof value === 'object' && value !== null) {
    return JSON.stringify(value);
  }
  return String(value);
}

module.exports = {invertBoolean,convertToNumber,stringifyValue};
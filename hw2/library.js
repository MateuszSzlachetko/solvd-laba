//addValues: Accepts two arguments of any type and performs the appropriate addition operation
// based on the types of the arguments. The function should return the result of the addition.
// If the addition is not possible, it should throw an error.
function addValues(a, b) {
  const typeA = Array.isArray(a) ? 'array' : typeof a;
  const typeB = Array.isArray(b) ? 'array' : typeof b;

  if (typeA === typeB) {
    switch (typeA) {
      case 'number':
        return a + b;
      case 'string':
        return a + b;
      case 'bigint':
        return a + b;
      case 'boolean':
        return Number(a) + Number(b);
      case 'array':
        return a.concat(b);
      case 'object':
        if (a === null || b === null) throw new Error('Cannot add null objects');
        return {...a, ...b}
      default:
        throw new Error('Incompatible types for addition');
    }
  } else {
    throw new Error('Incompatible types for addition');
  }
}

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

// coerceToType:
//    Accepts two arguments: value and type.
//    It attempts to convert the value to the specified type using type coercion.
//    The function should return the coerced value if successful.
//    If the coercion is not possible, it should throw an error.
function coerceToType(value, type) {
  switch (type.toLowerCase()) {
    case 'string':
      return stringifyValue(value);
    case 'number':
      return convertToNumber(value)
    case 'boolean':
      return Boolean(value);
    case 'object':
      try {
        return JSON.parse(value);
      } catch {
        throw new Error(`Cannot coerce '${value}' to object`);
      }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
}

module.exports = {addValues,invertBoolean,convertToNumber,stringifyValue,coerceToType};
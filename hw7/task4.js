function promisify(callbackStyleFunc) {
  return function (arg) {
    return new Promise((resolve, reject) => {
      function callback(error, result) {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }

      callbackStyleFunc(arg, callback);
    });
  }
}

function callbackStyleFunction(value, callback) {
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2);
    } else {
      callback("Invalid value", null);
    }
  }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
  .then(result => {
    console.log("Promised function result:", result); // Expected: 6
  })
  .catch(error => {
    console.error("Promised function error:", error);
  });
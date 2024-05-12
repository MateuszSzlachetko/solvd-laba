function promiseAll(promisesArray) {
  const resolvedValues = []
  let completed = 0;
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      promise.then(
        resolvedValue => {
          resolvedValues[index] = resolvedValue;
          completed++;
          if (completed === promisesArray.length) {
            resolve(resolvedValues);
          }
        }
      ).catch(rejectedValue => {
          reject(rejectedValue);
        }
      )
    })
  });
}

const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

const promisesWithOneRejection = [
  Promise.resolve(1),
  Promise.reject("rejected 2"),
  Promise.resolve(3)
];

const promisesWithTwoRejections = [
  Promise.resolve(1),
  Promise.reject("rejected 2"),
  Promise.reject("rejected 3"),
];

promiseAll(promises)
  .then(results => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });

promiseAll(promisesWithOneRejection)
  .then(results => {
    console.log("All promises resolved:", results);
  })
  .catch(error => {
    console.error("At least one promise rejected:", error); // At least one promise rejected: rejected 2
  });

promiseAll(promisesWithTwoRejections)
  .then(results => {
    console.log("All promises resolved:", results);
  })
  .catch(error => {
    console.error("At least one promise rejected:", error); // At least one promise rejected: rejected 2
  });
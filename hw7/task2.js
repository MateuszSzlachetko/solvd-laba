function promiseAllSettled(promisesArray) {
  const result = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise, index) => {
      promise
        .then(value => {
          result[index] = {
            status: 'fulfilled',
            value: value,
          };
        })
        .catch(reason => {
          result[index] = {
            status: 'rejected',
            reason: reason,
          };
        })
        .finally(_ => {
          completed++;
          if (completed === promisesArray.length)
            resolve(result);
        })
    });
  });
}

const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3)
];

promiseAllSettled(promises)
  .then(results => {
    console.log("All promises settled:", results);
    // Expected: [{ status: 'fulfilled', value: 1 },
    //            { status: 'rejected', reason: 'Error occurred' },
    //            { status: 'fulfilled', value: 3 }]
  });
function onScroll(event) {
  // Handle scroll event
  console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 5000);

window.addEventListener("scroll", throttledScrollHandler);

function throttle(func, interval) {
  let lastExecutionTime = 0;

  return function(...args) {
    const now = Date.now();
    if (now - lastExecutionTime > interval) {
      lastExecutionTime = now;
      func.apply(this, args);
    }
  };
}
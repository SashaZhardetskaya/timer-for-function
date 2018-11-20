var timer = null;
const timerInterval = 1000;
const criticalTime = 3000;
var lastObserveTime = Date.now();

function observe() {
  // do some actions
}

function onObserver() { // invoke this function so the func 'observe' won't be invoked more often then onse per 3 seconds
  if (timer) {
    clearTimeout(timer);
  }

  const currentTime = Date.now();
  if (currentTime - lastObserveTime > criticalTime) {
    lastObserveTime = currentTime;
    observe();
  } else {
    timer = setTimeout(() => {
      lastObserveTime = Date.now();
    observe();
  }, timerInterval);
  }
}
function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args){
    const now = new Date().getTime();
    if(now - lastCall >= delay){
      fn.apply(this, args);
      lastCall = now;
    }
  }
}
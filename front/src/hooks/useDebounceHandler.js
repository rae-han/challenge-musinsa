const useDebounceHandler = (handler, delay = 500) => {
  let timer = null;

  return (...args) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      handler.apply(this, args);
    }, delay)
  }
};

export default useDebounceHandler;
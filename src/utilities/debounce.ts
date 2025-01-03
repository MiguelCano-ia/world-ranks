export const debounce = (callback: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId); 
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

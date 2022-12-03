import {useRef} from 'react';

export function useThrottle (callback, delay) {
  let timeId = useRef(null);

  return event => {
    if (timeId.current) {
      return;
    }

    timeId.current = setTimeout(() => {
      callback(event);
      timeId.current = null;
    }, delay, event);
  };
}
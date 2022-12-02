export const classnames = (...rest) => {
  return rest.flatMap(item => {
    if (typeof item === 'string') {
      return item;
    }

    if (typeof item === 'object') {
      return Object.entries(item).reduce((acc, cur) => {
        const [key, value] = cur;

        return value ? [...acc, key] : acc;
      }, [])
    }
  }).join(' ');
};
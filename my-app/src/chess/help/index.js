export const arrayEqual = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  return a.every((_, i) => a[i] === b[i]);
};
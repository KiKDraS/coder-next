export const getSubSet = (arr, offset) => {
  const start = offset * 12;

  return arr.slice(start, start + 12);
};

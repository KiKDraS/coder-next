export const getSubSet = ({ arr, offset, limit }) => {
  const start = offset * limit;

  return arr.slice(start, start + limit);
};

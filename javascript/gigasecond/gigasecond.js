export const gigasecond = (date) => {
  const gigaMs = Math.pow(10, 12);
  // expects milli seconds
  return new Date(date.getTime() + gigaMs);
};

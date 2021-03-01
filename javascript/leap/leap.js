export const isLeap = (year) => {
  const isDivisible4 = year % 4 == 0;
  const isDivisible100 = year % 100 == 0;
  const isDivisible400 = year % 400 == 0;

  return (isDivisible4 && !isDivisible100) || isDivisible400
};

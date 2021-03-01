const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

export const decodedValue = (codes) => {
  let atMostTwoCodes = codes.slice(0, 2);
  return parseInt(atMostTwoCodes.map(code => COLORS[code]).join(''));
};

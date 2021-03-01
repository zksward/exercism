//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const letters = {};
  for (let point in old) {
    old[point].forEach(letter => {
      letters[letter.toLowerCase()] = +point;
    })
  }
  return letters;
};

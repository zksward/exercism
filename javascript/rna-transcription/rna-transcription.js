const DNA_TO_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export const toRna = (strand) => {
  return strand
    .split('')
    .map(nucleotide => 
      DNA_TO_RNA[nucleotide])
    .join('');
};

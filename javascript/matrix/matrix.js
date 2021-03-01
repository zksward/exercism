//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
// [[1,2,3,4]
//  [5,6,7,8]
//  [9,8,7,6]]
//

export class Matrix {
  constructor(input) {
    this._rows = input.split('\n').map(r => r.split(' ').map(n => +n));
    this._columns = this._rows[0].map((_, index) => this._rows.map(r => r[index]));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}

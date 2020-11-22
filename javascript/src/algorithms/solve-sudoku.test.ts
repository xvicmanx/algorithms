import { expect } from 'chai';
import solveSudoku from './solve-sudoku';

describe('solveSudoku', () => {
  it('fails if the state param is not provided', () => {
    expect(() => { solveSudoku({}); }).to.throw();
  });

  describe('Large sudoku', () => {
    it('solves it', () => {
      const state = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
      ];
  
      expect(solveSudoku({ state })).to.eq(true);
      expect(state).to.eql([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ]);
    });
  });

  describe('Small sudoku', () => {
    it('solves it', () => {
      const state = [
        [1, 0, 4, 0],
        [4, 3, 0, 2],
        [3, 4, 2, 1],
        [2, 1, 3, 4],
      ];      
  
      expect(solveSudoku({ state, size: 'SMALL' })).to.eq(true);
      expect(state).to.eql([
        [1, 2, 4, 3],
        [4, 3, 1, 2],
        [3, 4, 2, 1],
        [2, 1, 3, 4],
      ]);
    });
  });
});
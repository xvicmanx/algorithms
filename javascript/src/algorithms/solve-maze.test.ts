import { expect } from 'chai';
import solveMaze from './solve-maze';

describe('solveMaze', () => {
  it('fails if the maze param is not provided', () => {
    expect(() => { solveMaze({ currentRow: 0, currentColumn: 0 }); }).to.throw();
  });

  it('fails if the row param is not provided', () => {
    expect(() => { solveMaze({ maze: [], currentColumn: 0 }); }).to.throw();
  });

  it('fails if the column param is not provided', () => {
    expect(() => { solveMaze({ maze: [], currentRow: 0 }); }).to.throw();
  });

  it('solves it', () => {
    const maze = [
      [0, -1, -1, -1],
      [0, 0, 0, 0],
      [-1, -1, 0, -1],
      [-1, 0, 0, 0],
    ];

    const solved = solveMaze({
      maze,
      currentRow: 0,
      currentColumn: 0,
    });
    expect(solved).to.eq(true);
    expect(maze).to.eql([
      [1, -1, -1, -1],
      [1, 1, 1, 0],
      [-1, -1, 1, -1],
      [-1, 0, 1, 1],
    ]);
  });
});
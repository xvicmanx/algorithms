// @ts-check

import solvePuzzle, { Puzzle } from '../common/solve-puzzle';
import {
  missingParam,
  throwMissingParamError,
} from '../helpers';

interface Action {
  row: number;
  column: number;
  value: number;
}

type Size = 'SMALL' | 'LARGE';

class SudokuPuzzle implements Puzzle {
  private state: Array<Array<number>>;
  private cache: { [key: string]: Array<Action> };
  private blocks: number;
  private numbers: number;

  constructor(state: Array<Array<number>>, size: Size = 'LARGE') {
    this.state = state;
    this.cache = {};
    this.blocks = size === 'SMALL' ? 2 : 3;
    this.numbers = size === 'SMALL' ? 4 : 9;
  }
  
  getInitialActions(): Array<Action> {
    return this.getNextAvailableActions(0, 0);
  }

  getActions(action: Action): Array<Action> {
    const {
      row,
      column,
    } = action;
  
    const key = `${row}:${column}`;
  
    if (!this.cache[key]) {
      this.cache[key] = this.getNextAvailableActions(row, column);
    }
    
    return this.cache[key];
  }

  canApply(action: Action): boolean {
    const {
      row,
      column,
      value,
    } = action;
    return !this.isInRow(row, value) &&
      !this.isInColumn(column, value) &&
      !this.isInBlock(row, column, value);
  }

  applyAction(action: Action) {
    const {
      row,
      column,
      value,
    } = action;
    this.state[row][column] = value;
  }

  rollbackAction(action: any) {
    const {
      row,
      column,
    } = action;
    this.state[row][column] = 0;
  }

  isSolved(): boolean {
    for (let r = 0; r < this.state.length; r += 1) {
      for (let c = 0; c < this.state[r].length; c += 1) {
        if (!this.state[r][c]) {
          return false;
        }
      }
    }

    return true;
  }

  private isInBlock(row: number, column: number, value: number) {
    const blockStartRow = row - (row % this.blocks);
    const blockStartColumn = column - (column % this.blocks);

    for (let r = 0; r < this.blocks; r += 1) {
      for (let c = 0; c < this.blocks; c += 1) {
        if (this.state[r + blockStartRow][c + blockStartColumn] === value) {
          return true;
        }
      }
    }

    return false;
  }

  private isInRow(row: number, value: number): boolean {
    for (let c = 0; c < this.state[row].length; c += 1) {
      if (this.state[row][c] === value) {
        return true;
      }
    }

    return false;
  }

  private isInColumn(column: number, value: number): boolean {
    for (let row = 0; row < this.state.length; row += 1) {
      if (this.state[row][column] === value) {
        return true;
      }
    }

    return false;
  }

  private getNextAvailableActions(startRow: number, startColumn: number): Array<Action> {
    let row = -1;
    let column = -1;

    for (let r = startRow; r < this.state.length; r += 1) {
      let columnValue = r === startRow ? startColumn : 0;
      for (let c = columnValue; c < this.state[r].length; c += 1) {
        if (!this.state[r][c]) {
          row = r;
          column = c;
          break;
        }
      }

      if (row >= 0) {
        break;
      }
    }

    if (row < 0) {
      return [];
    }

    const actions = [];

    for (let value = 1; value <= this.numbers; value += 1) {
      actions.push({
        row,
        column,
        value,
      });
    }

    return actions;
  }
}

interface Payload {
  state?: Array<Array<number>>;
  size?: Size;
}

/**
 * Solves a sudoku pluzzle
 * @param {Payload} payload - payload
 * @return {boolean} to indicate if the sudoku was solved
 */
const solveSudoku = (payload: Payload): boolean => {
  if (missingParam(payload, 'state')) {
    throwMissingParamError('state');
  }

  const sudokuPuzzle = new SudokuPuzzle(
    payload.state,
    payload.size,
  );

  return solvePuzzle(sudokuPuzzle);
};

export default solveSudoku;
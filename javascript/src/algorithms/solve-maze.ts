// @ts-check

import solvePuzzle, { Puzzle } from '../common/solve-puzzle';
import {
  missingParam,
  throwMissingParamError,
} from '../helpers';

type Action = 'UP' | 'RIGHT' | 'DOWN' | 'LEFT';
const ACTIONS: Array<Action> = ['UP', 'RIGHT', 'DOWN', 'LEFT'];

class MazePluzzle implements Puzzle {
  private maze: Array<Array<number>>;
  private currentRow: number;
  private currentColumn: number;

  constructor(
    maze: Array<Array<number>>,
    currentRow: number,
    currentColumn: number,
  ) {
    this.maze = maze;
    this.currentRow = currentRow;
    this.currentColumn = currentColumn;
    this.maze[this.currentRow][this.currentColumn] = 1;
  }
  
  getInitialActions(): Array<Action> {
    return ACTIONS;
  }

  getActions(): Array<Action> {
    return ACTIONS;
  }

  canApply(action: Action): boolean {
    const {
      row,
      column
    } = this.getNextPosition(action);

    if (row < 0 || row >= this.maze.length) {
      return false;
    }

    if (column < 0 || column >= this.maze[0].length) {
      return false;
    }

    return !this.maze[row][column];
  }

  applyAction(action: Action) {
    const {
      row,
      column
    } = this.getNextPosition(action);
    this.maze[row][column] = 1;
    this.currentRow = row;
    this.currentColumn = column;
  }

  rollbackAction(action: any) {
    this.maze[this.currentRow][this.currentColumn] = 0;
    const {
      row,
      column
    } = this.getRollbackPosition(action);
    this.currentRow = row;
    this.currentColumn = column;
  }

  isSolved(): boolean {
    return (this.currentRow === this.maze.length - 1) && 
    (this.currentColumn === this.maze[0].length - 1);
  }

  private getNextPosition(action: Action) {
    let rowOffset = 0;
    let columnOffset = 0;

    switch (action) {
      case 'UP':
        rowOffset = -1;
        break;
      case 'DOWN':
        rowOffset = 1;
        break;
      case 'LEFT':
        columnOffset = -1;
        break;
      case 'RIGHT':
        columnOffset = 1;
        break;
    }

    return {
      row: this.currentRow + rowOffset,
      column: this.currentColumn + columnOffset, 
    };
  }

  private getRollbackPosition(action: Action) {
    let rowOffset = 0;
    let columnOffset = 0;

    switch (action) {
      case 'UP':
        rowOffset = 1;
        break;
      case 'DOWN':
        rowOffset = -1;
        break;
      case 'LEFT':
        columnOffset = 1;
        break;
      case 'RIGHT':
        columnOffset = -1;
        break;
    }

    return {
      row: this.currentRow + rowOffset,
      column: this.currentColumn + columnOffset, 
    };
  }
}

interface Payload {
  maze?: Array<Array<number>>;
  currentRow?: number;
  currentColumn?: number;
}

/**
 * Solves a maze
 * @param {Payload} payload - payload
 * @return {boolean} to indicate if the maze was solved
 */
const solveMaze = (payload: Payload): boolean => {
  if (missingParam(payload, 'maze')) {
    throwMissingParamError('maze');
  }

  if (missingParam(payload, 'currentRow')) {
    throwMissingParamError('currentRow');
  }

  if (missingParam(payload, 'currentColumn')) {
    throwMissingParamError('currentColumn');
  }

  const puzzle = new MazePluzzle(
    payload.maze,
    payload.currentRow,
    payload.currentColumn,
  );

  return solvePuzzle(puzzle);
};

export default solveMaze;
// @ts-check

export interface Puzzle {
  getInitialActions(): Array<any>; 
  getActions(action: any): Array<any>;
  canApply(action: any): boolean;
  applyAction(action: any);
  rollbackAction(action: any);
  isSolved(): boolean;
}

interface Payload {
  puzzle: Puzzle;
}

const internalSolvePuzzle = (puzzle: Puzzle, actions: Array<any>) => {
  if (puzzle.isSolved()) {
    return true;
  }

  for (let action of actions) {
    if (puzzle.canApply(action)) {
      puzzle.applyAction(action);

      const solved = internalSolvePuzzle(
        puzzle,
        puzzle.getActions(action),
      );

      if (solved) {
        return true;
      } else {
        puzzle.rollbackAction(action);
      }
    }
  }

  return false;
};

/**
 * Solves a puzzle using the backtracking algorithm
 * @param {Puzzle} puzzle - puzzle to solve
 * @return {boolean} to indicate if the puzzle was solved
 */
const solvePuzzle = (puzzle: Puzzle): boolean => internalSolvePuzzle(
  puzzle,
  puzzle.getInitialActions(),
);

export default solvePuzzle;
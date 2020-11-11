// @ts-check

import {
  Graph,
  Stack,
} from '../data-structures';

interface Payload {
  graph?: Graph;
  callback?: Function;
}

const missingParam = (payload: Payload, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';
const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

/**
 * Visits the nodes of the graph performing the depth first search strategy.
 * It consists of visiting all nodes going deeply to next levels before visiting all nodes at a certain levels.
 * @param {Payload} payload - payload
 */
const depthFirstSearch = (payload: Payload) => {
  if (missingParam(payload, 'graph')) {
    throwMissingParamError('graph');
  }

  const stack = new Stack();
  const seen = {};

  payload.graph.vertices().forEach((vertice) => {
    stack.push(vertice);
    seen[vertice] = true;
  });

  while (!stack.empty()) {
    const vertice = stack.pop();
    seen[vertice] = true;

    if (payload.callback) {
      payload.callback(vertice);
    }

    payload.graph.adjacents(vertice).forEach((adjacentVertice) => {
      if (!seen[adjacentVertice]) {
        stack.push(adjacentVertice);
        seen[adjacentVertice] = true;
      }
    });
  }
};


export default depthFirstSearch;

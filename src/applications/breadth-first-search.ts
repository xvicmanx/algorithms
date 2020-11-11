// @ts-check

import {
  Graph,
  Queue,
} from '../data-structures';

interface Payload {
  startVertice?: any;
  graph?: Graph;
  callback?: Function;
}

const missingParam = (payload: Payload, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';
const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

/**
 * Visits the nodes of the graph performing the breadth first search strategy.
 * It consists of visiting all nodes by each level before moving to the next one.
 * @param {Payload} payload - payload
 */
const breadthFirstSearch = (payload: Payload) => {
  if (missingParam(payload, 'startVertice')) {
    throwMissingParamError('startVertice');
  }

  if (missingParam(payload, 'graph')) {
    throwMissingParamError('graph');
  }

  if (!payload.graph.vertices().includes(payload.startVertice)) {
    throw new Error('Invalid vertice. Please, provide a vertice that belongs to graph.');
  }

  const queue = new Queue();
  const seen = {};

  queue.enqueue(payload.startVertice);

  while (!queue.empty()) {
    const vertice = queue.dequeue();
    seen[vertice] = true;

    if (payload.callback) {
      payload.callback(vertice);
    }

    payload.graph.adjacents(vertice).forEach((adjacentVertice) => {
      if (!seen[adjacentVertice]) {
        queue.enqueue(adjacentVertice);
        seen[adjacentVertice] = true;
      }
    });
  }
};


export default breadthFirstSearch;

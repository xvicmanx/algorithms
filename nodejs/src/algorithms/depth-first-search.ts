// @ts-check

import { Graph } from '../data-structures';

interface Payload {
  graph?: Graph;
  callback?: Function;
}

const missingParam = (payload: Payload, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';
const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

const depthFirstSearchVisit = (
  graph: Graph,
  vertice: any,
  seen: Object,
  callback: Function,
) => {
  if (seen[vertice]) {
    return;
  }

  seen[vertice] = true;

  graph.adjacents(vertice).forEach((adjacentVertice) => {
    if (!seen[adjacentVertice]) {
      depthFirstSearchVisit(
        graph,
        adjacentVertice,
        seen,
        callback
      );
    }
  });

  if (callback) {
    callback(vertice);
  }
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

  const seen: Object = {};

  payload.graph.vertices().forEach((vertice) => {
    depthFirstSearchVisit(
      payload.graph,
      vertice,
      seen,
      payload.callback,
    );
  });
};


export default depthFirstSearch;

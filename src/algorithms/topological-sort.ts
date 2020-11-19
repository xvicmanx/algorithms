// @ts-check

import { Graph } from '../data-structures';
import depthFirstSearch from './depth-first-search';

interface Payload {
  graph?: Graph;
}

const missingParam = (payload: Payload, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';
const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

/**
 * Finds the topological order of a graph
 * @param {Payload} payload - payload
 */
const topologicalSort = (payload: Payload) => {
  if (missingParam(payload, 'graph')) {
    throwMissingParamError('graph');
  }

  const items = [];

  depthFirstSearch({
    graph: payload.graph,
    callback: item => items.push(item),
  });

  items.reverse();

  return items;
};


export default topologicalSort;

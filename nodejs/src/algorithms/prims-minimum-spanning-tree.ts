// @ts-check

import { Graph } from '../data-structures';

interface Payload {
  graph?: Graph;
  startingVertice?: any;
}

const missingParam = (payload: Payload, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';
const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

/**
 * Finds the minimum spanning stree from a graph
 * @param {Payload} payload - payload
 */
const primsMinimumSpanningTree = (payload: Payload) => {
  if (missingParam(payload, 'graph')) {
    throwMissingParamError('graph');
  }

  const maxValue = Number.MAX_SAFE_INTEGER;
  const distances = {};
  const parent = {};
  const visited = {};
  const vertices = payload.graph.vertices();

  vertices.forEach((vertice) => {
    distances[vertice] = maxValue;
    visited[vertice] = false;
  });

  parent[vertices[0]] = null;

  const getNonVisitedVerticeWithMinimumDistance = () => {
    let minimum = maxValue;
    let minimumVertice = null;

    for (let i = 0; i < vertices.length; i += 1) {
      const vertice = vertices[i];
      if (!visited[vertice] && distances[vertice] <= minimum) {
        minimum = distances[vertice];
        minimumVertice = vertice;
      }
    }

    return minimumVertice;
  };

  for (let i = 0; i < vertices.length - 1; i += 1) {
    const vertice = getNonVisitedVerticeWithMinimumDistance();
    visited[vertice] = true;

    for (let j = 0; j < vertices.length; j += 1) {
      const anotherVertice = vertices[j];
      const value = payload.graph.getEdgeValue(vertice, anotherVertice);
      if (
        !visited[anotherVertice] &&
        value &&
        value < distances[anotherVertice]
      ) {
        distances[anotherVertice] = value;
        parent[anotherVertice] = vertice;
      }
    }
  }

  return parent;
};


export default primsMinimumSpanningTree;

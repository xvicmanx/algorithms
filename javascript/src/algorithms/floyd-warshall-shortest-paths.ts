// @ts-check

import { Graph } from '../data-structures';

interface Payload {
  graph?: Graph;
}

const missingParam = (payload: Payload, name: string): boolean => payload[name] === null || typeof payload[name] === 'undefined';
const throwMissingParamError = (name: string) => {
  throw new Error(`Please, provide the "${name}" parameter`);
};

/**
 * Finds the shortest paths from all vertices to the other ones in a graph
 * @param {Payload} payload - payload
 */
const floydWarshallShortestPaths = (payload: Payload) => {
  if (missingParam(payload, 'graph')) {
    throwMissingParamError('graph');
  }

  const maxValue = Number.MAX_SAFE_INTEGER;
  const distances = {};
  const vertices = payload.graph.vertices();

  vertices.forEach((vertice) => {
    distances[vertice] = {};
    vertices.forEach((otherVertice) => {
      if (vertice === otherVertice) {
        distances[vertice][otherVertice] = 0;
      } else {
        const value = payload.graph.getEdgeValue(vertice, otherVertice);
        distances[vertice][otherVertice] = value || maxValue;
      }
    });
  });

  vertices.forEach((a) => {
    vertices.forEach((b) => {
      vertices.forEach((c) => {
        const newDistance = distances[a][b] + distances[b][c];
        if (newDistance < distances[a][c]) {
          distances[a][c] = newDistance;
        }
      });
    });
  });
  

  return distances;
};


export default floydWarshallShortestPaths;

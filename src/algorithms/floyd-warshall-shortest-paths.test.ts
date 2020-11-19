import { expect } from 'chai';

import Graph from '../data-structures/graph';
import floydWarshallShortestPaths from './floyd-warshall-shortest-paths';


describe('floydWarshallShortestPaths', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph(true);
    const vertices = ['A', 'B', 'C', 'D', 'E'];
    const edges = [
      ['A', 'B', 2],
      ['A', 'C', 4],
      ['B', 'C', 2],
      ['B', 'D', 4],
      ['B', 'E', 2],
      ['C', 'E', 3],
      ['E', 'D', 3],
      ['D', 'F', 2],
      ['E', 'F', 2]
    ];

    vertices.forEach((vertice) => {
      graph.addVertice(vertice);
    });

    edges.forEach((edge) => {
      graph.addEdge(edge[0], edge[1], edge[2]);
    });
  });

  it('fails if the graph is missing', () => {
    expect(() => {
      floydWarshallShortestPaths({});
    }).to.throw();
  });

  it('finds the shortest path as expected', () => {
    const distances = floydWarshallShortestPaths({
      graph,
    });

    const maxValue = Number.MAX_SAFE_INTEGER;
    const expectedDistances = {
      A: {
        A: 0,
        B: 2,
        C: 4,
        D: 6,
        E: 4,
        F: 6,
      },
      B: {
        A: maxValue,
        B: 0,
        C: 2,
        D: 4,
        E: 2,
        F: 4,
      },
      C: {
        A: maxValue,
        B: maxValue,
        C: 0,
        D: 6,
        E: 3,
        F: 5,
      },
      D: {
        A: maxValue,
        B: maxValue,
        C: maxValue,
        D: 0,
        E: maxValue,
        F: 2,
      },
      E: {
        A: maxValue,
        B: maxValue,
        C: maxValue,
        D: 3,
        E: 0,
        F: 2,
      },
      F: {
        A: maxValue,
        B: maxValue,
        C: maxValue,
        D: maxValue,
        E: maxValue,
        F: 0,
      },
    };

    expect(distances).to.eql(expectedDistances);
  });
});
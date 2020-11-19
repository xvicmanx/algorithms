import { expect } from 'chai';

import Graph from '../data-structures/graph';
import dijkstraShortestPath from './dijkstra-shortest-path';


describe('dijkstraShortestPath', () => {
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
      dijkstraShortestPath({
        startingVertice: 'A',
      });
    }).to.throw();
  });

  it('fails if the startingVertice is missing', () => {
    expect(() => {
      dijkstraShortestPath({
        graph,
      });
    }).to.throw();
  });

  it('finds the shortest path as expected', () => {
    const distances = dijkstraShortestPath({
      graph,
      startingVertice: 'A',
    });

    expect(distances).to.eql({ A: 0, B: 2, C: 4, D: 6, E: 4, F: 6 });
  });
});
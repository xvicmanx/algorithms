import { expect } from 'chai';

import Graph from '../data-structures/graph';
import topologicalSort from './topological-sort';


describe('topologicalSort', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph(true);
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
    const edges = [
      ['A', 'C'],
      ['A', 'D'],
      ['B', 'D'],
      ['B', 'E'],
      ['C', 'F'],
      ['F', 'E']
    ];

    vertices.forEach((vertice) => {
      graph.addVertice(vertice);
    });

    edges.forEach((edge) => {
      graph.addEdge(edge[0], edge[1]);
    });
  });

  it('fails if the graph is missing', () => {
    const visitedItems = [];
    expect(() => {
      topologicalSort({});
    }).to.throw();
  });

  it('finds the topological order', () => {
    const items = topologicalSort({ graph });

    expect(items).to.eql(['B', 'A', 'D', 'C', 'F', 'E']);
  });
});
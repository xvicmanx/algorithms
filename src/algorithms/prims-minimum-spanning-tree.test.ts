import { expect } from 'chai';

import Graph from '../data-structures/graph';
import primsMinimumSpanningTree from './prims-minimum-spanning-tree';


describe('primsMinimumSpanningTree', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
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
      primsMinimumSpanningTree({});
    }).to.throw();
  });

  it('finds the minimum spanning tree as expected', () => {
    const tree = primsMinimumSpanningTree({
      graph,
    });

    const expectedTree = {
      A: 'B',
      B: 'E',
      C: 'B',
      D: 'F',
      E: 'F',
    };

    expect(tree).to.eql(expectedTree);
  });
});
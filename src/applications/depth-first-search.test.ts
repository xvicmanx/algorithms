import { expect } from 'chai';

import Graph from '../data-structures/graph';
import depthFirstSearch from './depth-first-search';


describe('depthFirstSearch', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    const vertices = ['A', 'B', 'C', 'D', 'E'];
    const edges = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'D'],
      ['C', 'E'],
      ['C', 'D'],
      ['E', 'F']
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
      depthFirstSearch({
        callback: (vertice) => visitedItems.push(vertice),
      });
    }).to.throw();
  });

  it('visits all nodes as expected', () => {
    const visitedItems = [];

    depthFirstSearch({
      graph,
      callback: (vertice) => visitedItems.push(vertice),
    });

    expect(visitedItems).to.eql(['F', 'E', 'D', 'C', 'B', 'A']);
  });
});
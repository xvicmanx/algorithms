import { expect } from 'chai';

import Graph from '../data-structures/graph';
import breadthFirstSearch from './breadth-first-search';


describe('breadthFirstSearch', () => {
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

  it('fails if the vertice is missing', () => {
    const visitedItems = [];
    expect(() => {
      breadthFirstSearch({
        graph,
        callback: (vertice) => visitedItems.push(vertice),
      });
    }).to.throw();
  });

  it('fails if the vertice does not belong to the graph', () => {
    const visitedItems = [];
    expect(() => {
      breadthFirstSearch({
        startVertice: 'Z',
        graph,
        callback: (vertice) => visitedItems.push(vertice),
      });
    }).to.throw();
  });

  it('fails if the graph is missing', () => {
    const visitedItems = [];
    expect(() => {
      breadthFirstSearch({
        startVertice: 'A',
        callback: (vertice) => visitedItems.push(vertice),
      });
    }).to.throw();
  });

  it('visits all nodes as expected', () => {
    const visitedItems = [];

    breadthFirstSearch({
      startVertice: 'A',
      graph,
      callback: (vertice) => visitedItems.push(vertice),
    });

    expect(visitedItems).to.eql(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});
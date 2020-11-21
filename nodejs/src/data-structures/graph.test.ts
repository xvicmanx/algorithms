import { expect } from 'chai';
import Graph from './graph';


describe('Graph', () => {
  let ds;
  let vertices;
  let edges;

  const initGraph = (directed = false) => {
    ds = new Graph(directed);
    vertices = ['A', 'B', 'C', 'D', 'E'];
    edges = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'D'],
      ['C', 'E'],
      ['C', 'D'],
      ['E', 'F']
    ];

    vertices.forEach((vertice) => {
      ds.addVertice(vertice);
    });

    edges.forEach((edge) => {
      ds.addEdge(edge[0], edge[1]);
    });
  };

  context('Undirected', () => {
    beforeEach(() => {
      initGraph(false);
    });
  
    describe('vertices', () => {
      it('does return all the vertices', () => {
        expect(ds.vertices()).eql([...vertices, 'F']);
      });
    });
  
    describe('adjacents', () => {
      it('does return adjacents for each vertice', () => {
        expect(ds.adjacents('A')).eql(['B', 'C']);
        expect(ds.adjacents('B')).eql(['A', 'D']);
        expect(ds.adjacents('C')).eql(['A', 'E', 'D']);
        expect(ds.adjacents('D')).eql(['B', 'C']);
        expect(ds.adjacents('E')).eql(['C', 'F']);
        expect(ds.adjacents('F')).eql(['E']);
      });
  
      it('does return an empty collection for a newly added vertice', () => {
        ds.addVertice('G');
        expect(ds.adjacents('G')).eql([]);
      });
    });
  
    describe('clear', () => {
      it('removes all the elements from the collection', () => {
        ds.clear();
        expect(ds.vertices()).eql([]);
      });
    });
  
    describe('toString', () => {
      it('returns an empty string by default when there are no elements', () => {
        ds.clear();
        expect(ds.toString()).equal('');
      });
    
      it('returns a string representation of the structure', () => {
        const expectedString = [
          'A => B, C',
          'B => A, D',
          'C => A, E, D',
          'D => B, C',
          'E => C, F',
          'F => E',
        ].join('\n');
        expect(ds.toString()).equal(expectedString);
      });
    });
  });

  context('Directed', () => {
    beforeEach(() => {
      initGraph(true);
    });
  
    describe('vertices', () => {
      it('does return all the vertices', () => {
        expect(ds.vertices()).eql([...vertices, 'F']);
      });
    });
  
    describe('adjacents', () => {
      it('does return adjacents for each vertice', () => {
        expect(ds.adjacents('A')).eql(['B', 'C']);
        expect(ds.adjacents('B')).eql(['D']);
        expect(ds.adjacents('C')).eql(['E', 'D']);
        expect(ds.adjacents('D')).eql([]);
        expect(ds.adjacents('E')).eql(['F']);
        expect(ds.adjacents('F')).eql([]);
      });
  
      it('does return an empty collection for a newly added vertice', () => {
        ds.addVertice('G');
        expect(ds.adjacents('G')).eql([]);
      });
    });
  
    describe('clear', () => {
      it('removes all the elements from the collection', () => {
        ds.clear();
        expect(ds.vertices()).eql([]);
      });
    });
  
    describe('toString', () => {
      it('returns an empty string by default when there are no elements', () => {
        ds.clear();
        expect(ds.toString()).equal('');
      });
    
      it('returns a string representation of the structure', () => {
        const expectedString = [
          'A => B, C',
          'B => D',
          'C => E, D',
          'D => ',
          'E => F',
          'F => ',
        ].join('\n');
        expect(ds.toString()).equal(expectedString);
      });
    });
  });

  context('Weighted graph', () => {
    let weightedEdges;

    const initWeightedGraph = (directed = false) => {
      ds = new Graph(directed);
      const vertices = ['A', 'B', 'C', 'D', 'E'];
      weightedEdges = [
        ['A', 'B', 10],
        ['A', 'C', 20],
        ['B', 'D', 30],
        ['C', 'E', 40],
        ['C', 'D', 50],
        ['E', 'F', 60]
      ];
  
      vertices.forEach((vertice) => {
        ds.addVertice(vertice);
      });
  
      weightedEdges.forEach((edge) => {
        ds.addEdge(edge[0], edge[1], edge[2]);
      });
    };

    beforeEach(() => {
      initWeightedGraph(true);
    });
  
    describe('getEdgeValue', () => {
      it('does return the correct value for each edge', () => {
        weightedEdges.forEach((edge) => {
          const value = ds.getEdgeValue(edge[0], edge[1]);
          expect(value).to.eql(edge[2]);
        });
      });
    });
  });
});
// @ts-check

const DEFAULT_KEY_GENERATOR = (value: any) => `${value}`;

/**
 * A Graph
 * */
class Graph {
  // To store the graph's vertices
  private _vertices: Array<any>;
  // To store vertices adjacents
  private _adjacents: { [key: string]: Object };
  // A generator of a key for the vertice
  private _keyGenerator: Function;
  // To indicate if the graph is directed or not
  private _directed: boolean;

  /**
   * Graph Constructor
   */
  constructor(
    directed: boolean = false,
    keyGenerator: Function = DEFAULT_KEY_GENERATOR,
  ) {
    this._vertices = [];
    this._adjacents = {};
    this._directed = directed;
    this._keyGenerator = keyGenerator
  }

  /**
   * Adds a vertice to the graph
   * @param {any} vertice - The item to be inserted
   */
  addVertice(vertice: any) {
    if (!this._vertices.includes(vertice)) {
      this._vertices.push(vertice);
    }
  }

  /**
   * Adds an edge between vertices
   * @param {any} vertice first vertice
   * @param {any} anotherVertice second vertice
   * @param {any} value value of the edge
   */
  addEdge(vertice: any, anotherVertice: any, value: any = 1) {
    if (
      !this._validVertice(vertice) ||
      !this._validVertice(anotherVertice)
    ) {
      return;
    }

    this.addVertice(vertice);
    this.addVertice(anotherVertice);
    this._addAdjacent(vertice, anotherVertice, value);

    if (!this._directed) {
      this._addAdjacent(anotherVertice, vertice, value);
    }
  }

  getEdgeValue(vertice: any, anotherVertice): any {
    if (!this._adjacents[vertice]) {
      return undefined;
    }

    return this._adjacents[vertice][anotherVertice];
  }

  /**
   * Returns graph vertices
   * @return {Array} The vetices
   */
  vertices(): Array<any> {
    return [...this._vertices];
  }

  /**
   * Returns graph vertices
   * @return {Array} The vetices
   */
  adjacents(vertice: any): Array<any> {
    if (!this._validVertice(vertice)) {
      return [];
    }

    const verticeKey = this._keyGenerator(vertice);
    this._adjacents[verticeKey] = this._adjacents[verticeKey] || {};
    return Object.keys(this._adjacents[verticeKey]);
  }

  /**
   * Clears the graph
   */
  clear() {
    this._vertices = [];
    this._adjacents = {};
  }

  /**
   * Returns the string representation of the graph
   * @return {string} the string representation of the graph.
   */
  toString(): string {
    return this._vertices.map((vertice) => {
      const adjacents = this.adjacents(vertice);
      return `${vertice} => ${adjacents.join(', ')}`;
    }).join('\n');
  }

  private _validVertice(vertice: any): boolean {
    return vertice !== null && vertice !== undefined;
  }

  private _addAdjacent(vertice: string, adjacentVertice: any, value: any) {
    const verticeKey = this._keyGenerator(vertice);
    this._adjacents[verticeKey] = this._adjacents[verticeKey] || {};
    const adjacents = Object.keys(this._adjacents[verticeKey]);
    if (!adjacents.includes(adjacentVertice)) {
      this._adjacents[verticeKey][adjacentVertice] = value;
    }
  }
}

export default Graph;

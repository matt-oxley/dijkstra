// Sample Input:
// const graph = {
//   a: [{ b: 7 }, { c: 3 }],
//   b: [{ a: 7 }, { c: 1 }],
//   c: [{ a: 3 }, { b: 1 }, { d: 2 }],
//   d: [{ c: 2 }, { b: 2 }, { e: 4 }],
//   e: [{ d: 4 }, { e: 6 }]
// };

export default function dijkstra(graph, source) {
  const distances = {};
  const previousVertices = {};
  const visited = [];
  let unvisited = Object.keys(graph);

  unvisited.forEach(k => {
    distances[k] = k === source ? 0 : Infinity;
    previousVertices[k] = null;
  });

  while (unvisited.length) {
    const currentNode = unvisited.shift();
    const neighbours = graph[currentNode];
    neighbours.forEach(node => {
      const [key, length] = Object.entries(node)[0];
      if (visited.indexOf(key) > -1) {
        return;
      }
      const distanceViaCurrent = distances[currentNode] + length;
      if (distances[key] > distanceViaCurrent) {
        distances[key] = distanceViaCurrent;
        previousVertices[key] = currentNode;
      }
    });
    visited.push(currentNode);
    // now need to sort the unvisited nodes
    unvisited = unvisited.sort((a, b) => distances[a] - distances[b]);
  }
  return distances;
}

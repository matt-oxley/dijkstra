## Sample Input

```
import djikstra from 'djikstra';

const graph = {
  a: [{ b: 7 }, { c: 3 }],
  b: [{ a: 7 }, { c: 1 }],
  c: [{ a: 3 }, { b: 1 }, { d: 2 }],
  d: [{ c: 2 }, { b: 2 }, { e: 4 }],
  e: [{ d: 4 }, { e: 6 }]
};

const distancesFromA = djikstra(graph, 'a');

// { a: 0, b: 4, c: 3, d: 5, e: 9 }
```

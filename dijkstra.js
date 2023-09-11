// data
const graphData = {
  start: {
    a: 5,
    b: 2
  },
  a: { c: 4, d: 2 },
  b: { a: 8, d: 7 },
  c: { d: 6, finish: 3 },
  d: { finish: 1 },
  finish: null
};

const costsData = {
  finish: Infinity,
  a: 5,
  b: 2,
  c: 9,
  d: 15
};

const parents = {
  a: "start",
  b: "start",
  finish: null
};

const findLowesCostNode = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (const node in costs) {
    const cost = costs[node];

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
};

// dijkstra algorithm

const dijkstra = (graph, costs, parents) => {
  const processedNodes = [];
  let node = findLowesCostNode(costs, processedNodes);

  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (const n in neighbors) {
      const newCost = cost + Number(neighbors[n]);

      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    processedNodes.push(node);
    node = findLowesCostNode(costs, processedNodes);
  }
  
  return { costs, parents };
};

// shortest path weight:
// finish: 8
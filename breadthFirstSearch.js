// data
const mangoSeller = 'thom';

const graphData = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
};

// predicate
const isMangoSeller = (name, sellerName) => name === sellerName;

// bts algorithm
const breadthFirstSearch = (graph, startName) => {
  const searchQueue = [...graph[startName]];
  const searched = [];

  while (searchQueue) {
    const personName = searchQueue.shift();

    if (!searched.includes(personName)) {
      if (isMangoSeller(personName, mangoSeller)) {
        console.log(`${personName} is a mango seller!`);
        return true;
      }

      searchQueue.push(...graph[personName]);
      searched.push(personName);
    }
  }

  return false;
};

// result

breadthFirstSearch(graphData, 'you'); // true
// thom is a mango seller! 
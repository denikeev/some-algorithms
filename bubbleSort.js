const items = [2, 3, -4, 3, 1, 32, 4, 5, 101, 2, -0];

const bubbleSort = (coll) => {
  let stepsCount = coll.length - 1;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < stepsCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;
        swapped = true;
      }
    }
    stepsCount -= 1;
  } while (swapped)

  return coll;
};

bubbleSort(items); // [-4, 0, 1, 2, 2, 3, 3, 4, 5, 32, 101]
import fs from "fs";

fs.readFile("./assets/day-05.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  // Part One
  {
    let state = 0;
    const stackInput = [];
    let stacks;

    const transpose = (array) => {
      const matrix = [];
      for (const line of array) {
        const vector = [];
        for (const char of line.split("")) vector.push(char);
        matrix.push(vector);
      }
      return matrix[0].map((_, i) => matrix.map((j) => j[i]));
    };

    const getStacks = (array) =>
      transpose(array)
        .filter((_, index) => (index - 1) % 4 === 0)
        .map((value) => value.reverse().join("").trim().split(""));

    for (const line of data.split("\r\n")) {
      if (!line) {
        if (state === 0) {
          state = 1;
          stackInput.splice(stackInput.length - 1, 1);
          stacks = getStacks(stackInput);
        }
        continue;
      }
      if (state === 0) stackInput.push(line);
      else {
        const args = line.split(" ");
        const [amount, from, to] = [
          Number(args[1]),
          Number(args[3]) - 1,
          Number(args[5]) - 1,
        ];
        stacks[to].push(
          ...stacks[from].splice(stacks[from].length - amount, amount).reverse()
        );
      }
    }
    console.log(
      stacks.reduce((acc, stack) => acc + stack[stack.length - 1], "")
    );
  }

  // Part Two
  {
    let state = 0;
    const stackInput = [];
    let stacks;

    const transpose = (array) => {
      const matrix = [];
      for (const line of array) {
        const vector = [];
        for (const char of line.split("")) vector.push(char);
        matrix.push(vector);
      }
      return matrix[0].map((_, i) => matrix.map((j) => j[i]));
    };

    const getStacks = (array) =>
      transpose(array)
        .filter((_, index) => (index - 1) % 4 === 0)
        .map((value) => value.reverse().join("").trim().split(""));

    for (const line of data.split("\r\n")) {
      if (!line) {
        if (state === 0) {
          state = 1;
          stackInput.splice(stackInput.length - 1, 1);
          stacks = getStacks(stackInput);
        }
        continue;
      }
      if (state === 0) stackInput.push(line);
      else {
        const args = line.split(" ");
        const [amount, from, to] = [
          Number(args[1]),
          Number(args[3]) - 1,
          Number(args[5]) - 1,
        ];
        stacks[to].push(
          ...stacks[from].splice(stacks[from].length - amount, amount)
        );
      }
    }
    console.log(
      stacks.reduce((acc, stack) => acc + stack[stack.length - 1], "")
    );
  }
});

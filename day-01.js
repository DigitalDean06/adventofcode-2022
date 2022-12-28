import fs from "fs";

fs.readFile("./assets/day-01.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  // Part One
  {
    let max = Number.MIN_VALUE;
    let sum = 0;
    for (const line of data.split("\r\n")) {
      if (!line) {
        if (sum > max) max = sum;
        sum = 0;
      } else sum += Number(line);
    }
    if (sum > max) max = sum;
    console.log(max);
  }

  // Part Two
  {
    const top = [];
    let sum = 0;
    for (const line of data.split("\r\n")) {
      if (!line) {
        top.push(sum);
        top.sort((a, b) => b - a);
        if (top.length > 3) delete top[3];
        sum = 0;
      } else sum += Number(line);
    }
    console.log(top.reduce((a, b) => a + b, 0));
  }
});

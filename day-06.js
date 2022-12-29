import fs from "fs";

fs.readFile("./assets/day-06.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  // Part One
  {
    const chars = data.split("");
    for (let i = 0; i < chars.length - 4; i++) {
      const sequence = chars.slice(i, i + 4);
      let valid = true;
      for (let j = 0; j < sequence.length - 1; j++) {
        if (!sequence.slice(j + 1, sequence.length).includes(sequence[j]))
          continue;
        valid = false;
        break;
      }
      if (!valid) continue;
      console.log(i + 4);
      break;
    }
  }

  // Part Two
  {
    const chars = data.split("");
    for (let i = 0; i < chars.length - 14; i++) {
      const sequence = chars.slice(i, i + 14);
      let valid = true;
      for (let j = 0; j < sequence.length - 1; j++) {
        if (!sequence.slice(j + 1, sequence.length).includes(sequence[j]))
          continue;
        valid = false;
        break;
      }
      if (!valid) continue;
      console.log(i + 14);
      break;
    }
  }
});

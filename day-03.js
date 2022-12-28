import fs from "fs";

fs.readFile("./assets/day-03.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  // Part One
  {
    let sum = 0;
    for (const line of data.split("\r\n")) {
      const first = line.slice(0, line.length / 2);
      const second = line.slice(line.length / 2, line.length);
      let common;
      for (const char of first.split("")) {
        if (!second.includes(char)) continue;
        common = char;
        break;
      }
      if (!common) continue;
      let value = common.charCodeAt(0) - "a".charCodeAt(0) + 1;
      if (value < 1 || value > 26)
        value = common.charCodeAt(0) - "A".charCodeAt(0) + 27;
      sum += value;
    }
    console.log(sum);
  }

  // Part Two
  {
    let sum = 0;
    let buffer = [];
    for (const line of data.split("\r\n")) {
      buffer.push(line);
      if (buffer.length === 3) {
        let common;
        for (const char of buffer[0].split("")) {
          if (!buffer[1].includes(char) || !buffer[2].includes(char)) continue;
          common = char;
          break;
        }
        buffer.length = 0;
        if (!common) continue;
        let value = common.charCodeAt(0) - "a".charCodeAt(0) + 1;
        if (value < 1 || value > 26)
          value = common.charCodeAt(0) - "A".charCodeAt(0) + 27;
        sum += value;
      }
    }
    console.log(sum);
  }
});

import fs from "fs";

fs.readFile("./assets/day-02.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  // Part One
  {
    const replacedData = data
      .replaceAll("X", "A")
      .replaceAll("Y", "B")
      .replaceAll("Z", "C");
    let sum = 0;
    for (const line of replacedData.split("\r\n")) {
      const args = line.split(" ");
      const char = "A".charCodeAt(0);
      const char1 = args[0].charCodeAt(0) - char;
      const char2 = args[1].charCodeAt(0) - char;
      sum +=
        char2 + 1 + (char1 === char2 ? 3 : char1 === (char2 + 1) % 3 ? 0 : 6);
    }
    console.log(sum);
  }

  // Part Two
  {
    let sum = 0;
    for (const line of data.split("\r\n")) {
      const args = line.split(" ");
      const char = "A".charCodeAt(0);
      const char1 = args[0].charCodeAt(0) - char;
      const char2 = args[1];
      sum +=
        char2 === "X"
          ? ((char1 + 2) % 3) + 1
          : char2 === "Y"
          ? char1 + 1 + 3
          : ((char1 + 1) % 3) + 1 + 6;
    }
    console.log(sum);
  }
});

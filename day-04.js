import fs from "fs";

fs.readFile("./assets/day-04.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  // Part One
  {
    let count = 0;
    for (const line of data.split("\r\n")) {
      if (!line) continue;
      const parts = line.split(",");
      const args1 = parts[0].split("-").map((a) => Number(a));
      const args2 = parts[1].split("-").map((a) => Number(a));
      if (
        (args1[0] <= args2[0] && args1[1] >= args2[1]) ||
        (args1[0] >= args2[0] && args1[1] <= args2[1])
      )
        count++;
    }
    console.log(count);
  }

  // Part Two
  {
    let count = 0;
    for (const line of data.split("\r\n")) {
      if (!line) continue;
      const parts = line.split(",");
      const args1 = parts[0].split("-").map((a) => Number(a));
      const args2 = parts[1].split("-").map((a) => Number(a));
      if (
        (args1[0] >= args2[0] && args1[0] <= args2[1]) ||
        (args1[1] >= args2[0] && args1[1] <= args2[1]) ||
        (args2[0] >= args1[0] && args2[0] <= args1[1]) ||
        (args2[1] >= args1[0] && args2[1] <= args1[1])
      )
        count++;
    }
    console.log(count);
  }
});

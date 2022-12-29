import fs from "fs";

class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  getSize = () => this.size;
}

class Directory extends File {
  constructor(name, files) {
    super(
      name,
      files.reduce((acc, file) => acc + file.size(), 0)
    );
    this.files = files;
  }

  getSize = () => this.files.reduce((acc, file) => acc + file.getSize(), 0);

  getFile = (stack) => {
    for (const file of this.files)
      if (file.name === stack[0]) {
        if (stack.length === 1) return file;
        const copy = [...stack];
        copy.shift();
        return file.getFile(copy);
      }
  };

  getDirectorySizes = () => {
    return [
      ...this.files.reduce((acc, file) => {
        if (file instanceof Directory) acc.push(...file.getDirectorySizes());
        return acc;
      }, []),
      this.getSize(),
    ];
  };
}

fs.readFile("./assets/day-07.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  // Part One
  {
    const root = new Directory("", []);
    let current = root;
    const stack = [];

    for (const line of data.split("\r\n")) {
      if (!line) continue;
      const args = line.split(" ");
      if (args[0] === "$" && args[1] === "cd") {
        if (args[2] === "/") stack.length = 0;
        else if (args[2] === "..") stack.pop();
        else stack.push(args[2]);
        current = stack.length ? root.getFile(stack) : root;
      } else if (args[0] === "dir")
        current.files.push(new Directory(args[1], []));
      else if (args[1] !== "ls")
        current.files.push(new File(args[1], Number(args[0])));
    }
    console.log(
      root
        .getDirectorySizes()
        .filter((size) => size <= 100000)
        .reduce((acc, size) => acc + size, 0)
    );
  }

  // Part Two
  {
    const root = new Directory("", []);
    let current = root;
    const stack = [];

    for (const line of data.split("\r\n")) {
      if (!line) continue;
      const args = line.split(" ");
      if (args[0] === "$" && args[1] === "cd") {
        if (args[2] === "/") stack.length = 0;
        else if (args[2] === "..") stack.pop();
        else stack.push(args[2]);
        current = stack.length ? root.getFile(stack) : root;
      } else if (args[0] === "dir")
        current.files.push(new Directory(args[1], []));
      else if (args[1] !== "ls")
        current.files.push(new File(args[1], Number(args[0])));
    }
    const requiredSpace = 30000000 - 70000000 + root.getSize();
    console.log(
      root
        .getDirectorySizes()
        .filter((size) => size >= requiredSpace)
        .reduce((acc, size) => Math.min(acc, size), Number.MAX_VALUE)
    );
  }
});

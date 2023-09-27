const spinner = (array) => {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${array[i]}   `);
    }, 100 + 200 * i);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, 100 + 200 * array.length);
};

const spin = ["|", "/", "-", "\\", "|", "/", "-", "\\"];
spinner(spin);

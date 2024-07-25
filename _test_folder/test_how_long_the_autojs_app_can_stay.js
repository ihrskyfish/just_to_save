// toast('Hello, World');

// let counter = 0;
// setInterval(() => {
//   counter += 1;
//   fs.writeFile('counter.txt', counter.toString(), (err) => {
//     if (err) {
//       console.error('Failed to write to file:', err);
//     } else {
//       console.log(`File written with counter value: ${counter}`);
//     }
//   });
// }, 60000); // 60000 milliseconds = 1 minute


// const writeFile = util.promisify(fs.writeFile);

// let counter = 0;

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// async function incrementAndWriteFile() {
//   while (true) { // 无限循环
//     await sleep(60000); // 等待60000毫秒（1分钟）
//     counter += 1;
//     await writeFile('counter.txt', counter.toString())
//       .then(() => console.log(`File written with counter value: ${counter}`))
//       .catch(err => console.error('Failed to write to file:', err));
//   }
// }

// incrementAndWriteFile();

// files.file_path
  // TODO  need require syntax to refactor

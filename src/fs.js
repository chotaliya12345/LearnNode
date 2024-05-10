const fs = require("fs");

// fs.mkdir("./src/assets/data", {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log('file created.');
// })

fs.writeFile("./src/assets/data/demo.txt", "hello world", (err) => {
  if (err) {
    console.log(err);
  }
});

// fs.appendFile("./src/assets/data/demo.txt", "i am a devloper", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.readFile("./src/assets/data/demo.txt", "utf-8" (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// });

// fs.rename("./src/assets/data/demo.txt", "./src/assets/data/demo1.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });


// fs.unlink("./src/assets/data/demo1.txt", (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

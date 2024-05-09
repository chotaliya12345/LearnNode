const path = require('path')

// console.log(__dirname);
// console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.join("assest", "image", "hero1"));
console.log(path.join(__dirname, "assest", "image", "hero1"));

console.log(path.resolve("assest", "images", "image"));
console.log(path.parse(__filename).ext);
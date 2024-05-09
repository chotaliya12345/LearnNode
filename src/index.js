const rect = require("./rectangle");

//1
// rect.area(10, 20)
// console.log("peramitir of rectangle: ", rect.peramitir(4, 5));

//2
// const solveRect = (l, w) => {
//   if (l <= 0 || w <= 0) {
//     console.log(new Error("Length or Width of rectangle greater then zero."));
//   } else {
//     rect.area(l, w);
//     console.log("peramitir of rectangle: ", rect.peramitir(l, w));
//   }
// };

// solveRect(10, 20);
// solveRect(10, -20);

//3
// rect(10, 20, (erro, reactObj) => {
//   if (erro) {
//     console.log("error");
//   } else {
//     console.log(reactObj.area);
//     console.log(reactObj.paremeter);
//   }
// });

// ---------------------------

// const bonus = require("./salary");

// bonus(20000, (erro, salaryOBj) => {
//   if (erro) {
//     console.log(erro);
//   } else {
//     console.log("Bouns is", salaryOBj);
//   }
// });

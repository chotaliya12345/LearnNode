// const area = (l, w) => {
//     let ans = l * w;

//     console.log("area of rectangle: ", ans);
// }

// const peramitir = (l, w) => {
//     let ans = 2 * (l+w)
//     return ans
// }

// module.exports = {
//     area,
//     peramitir
// }
module.exports = (l, w, callback) => {
  if (l <= 0 || w <= 0) {
    callback(new Error("please enter grater than lenth and width"), null);
  } else {
    //    console.log(callback,l,w);
    callback(null, {
      area: l * w,
      paremeter: 2 *(l + w)
    })
  }
};

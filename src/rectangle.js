const area = (l, w) => {
    let ans = l * w;

    console.log("area of rectangle: ", ans);
}

const peramitir = (l, w) => {
    let ans = 2 * (l+w)
    return ans
}

module.exports = {
    area,
    peramitir
}

// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];

    if(matrix == null) return [];

    matrix.forEach((item, index) => {
        if(index % 2 != 0) {
            item.reverse()
        }
        item.forEach(n => arr.push(n))
    })
  return arr;
}

import MLR from "ml-regression-multivariate-linear";


const x = [
  //x0 = telas, x1 = objetos, x2 = classes, x3 = API
  [2, 3, 4, 1],
  [4, 6, 4, 8],
  [9, 3, 7, 1],
  [3, 4, 5, 2],
  [8, 1, 2, 6],
  [3, 8, 12,1],
];
// Y0 = X0 * 2, Y1 = X1 * 2, Y2 = X0 + X1
const y = [
  [7.1],
  [13.2],
  [17.1],
  [9.8],
  [13.2],
  [17.1],
];
const mlr = new MLR(x, y);
console.log(mlr.predict([1, 3, 4, 9]));

//1 +0.6+4+4.5

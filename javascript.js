let array = [1, 2, 3, 4];
let bool = false;

console.log(typeof array); // 타입: 배열
console.log(typeof bool); // 타입: boolean

// 타입이 배열, boolean 다 사라지고 string으로 변함
console.log(array + bool, `type: ${typeof (array + bool)}`);

function divide(a, b) {
  return a / b;
}
console.log(divide(2, 3)); // 0.6666666666666666
console.log(divide("xixixix")); // NAN 에러 발생 없이 실행 중

// 런타임 에러
// 코드 실행 전까지는 에러가 있는지 모름
const nico = { name: "nico" };
nico.hello(); // Uncaught TypeError TypeError: nico.hello is not a function

// 위의 이유들로 자바스크립트에서 타입스크립트로 떠남

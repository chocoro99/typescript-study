// 변수에 type 할당하기

// let a: number = 1;
// let b: string = "il";
// let c: boolean[] = [true];

//  ?를 사용함으로 player에 age가 없어도 에러가 발생 안함
// const player: {
//   name: string;
//   age?: number;
// } = {
//   name: "nico",
// };

// 중복되는 내용을 줄임
// type Player = {
//   name: string;
//   age?: number;
// };

// const playerNico: {
//   name: string;
//   age?: number;
// } = {
//   name: "nico",
// };

// const playerLynn: {
//   name: string;
//   age?: number;
// } = {
//   name: "lynn",
//   age: 12,
// };

//
// type Name = string;
// type Age = number;
// type Player = {
//   name: Name;
//   age?: Age;
// };

// const playerNico: Player = {
//   name: "nico",
// };

// const playerLynn: Player = {
//   name: "lynn",
//   age: 12,
// };

// 함수에 타입 할당하기

type Name = string;
type Age = number;
type Player = {
  name: Name;
  age?: Age;
};

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }

// const nico = playerMaker("nico");
// nico.age = 22;

// 화살표 함수 ver.
const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker("nico");
nico.age = 12;

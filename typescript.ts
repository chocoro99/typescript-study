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

// type Name = string;
// type Age = number;
// type Player = {
//   name: Name;
//   age?: Age;
// };

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }

// const nico = playerMaker("nico");
// nico.age = 22;

// 화살표 함수 ver.
// const playerMaker = (name: string): Player => ({ name });
// const nico = playerMaker("nico");
// nico.age = 12;

// readonly 읽기만 가능
// type Name = string;
// type Age = number;
// type Player = {
//   readonly name: Name;
//   age?: Age;
// };

// const playerMaker = (name: string): Player => ({ name });
// const nico = playerMaker("nico");
// nico.age = 12;

// readonly라 읽기만 가능
// nico.name = "kas";

// const numbers: readonly number[] = [1, 2, 3, 4]
// number.push(3);

// const names: readonly string[] = ["1", "2"];
// names.push("2")

// filter, map은 가능
// names.filter
// names.map

// let a : undefined = undefined;
// let b:  null = null

// const a: any[] = [1, 2, 3, 4];
// const b: any = true;

// unkown
// let a: unknown;

// let  b = a + 1;

// if (typeof a === "number") {
//   let b = a + 1;
// }
// if (typeof a === "string") {
//   let b = a.toUpperCase();
// }

//  void = 아무것도 return하지않는 함수
// function hello() {
//   console.log("x");
// }
// const a = hello();
// a.toUpperCase();

// never 함수가 절대 return 하지 않을 때
function hello(name: string | number): never {
  // return "X";
  throw new Error();
}

function hello1(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}

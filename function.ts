// call signatures
// 다형성 polymorphism
// 오버로딩 overloading
// 제네릭generic

function add(a: number, b: number) {
  return a + b;
}

const add2 = (a: number, b: number) => a + b;

// call signatures 인자의 타입, 함수의 반환 타입
type Add = (a: number, b: number) => number;
// type Add = {
//     (a: number, b: number): number
// };

const add3: Add = (a, b) => a + b;

// overload 함수가 서로 다른 여러개의 call signatures를 가질 때 발생
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add4: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// 자주 보게될 오버로딩 예시
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add5: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add5(1, 2);
add5(1, 2, 3);

//  polymorphism

type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);

// generic는 placeholder 같은 것
type SuperPrint2 = {
  <T>(arr: T[]): T;
};

const superPrint2: SuperPrint2 = (arr) => arr[0];
const a = superPrint2([1, 2, 3, 4]);
const b = superPrint2([true, false, true]);
const c = superPrint2(["a", "b", "c"]);
const d = superPrint2([1, 2, true, false, "hello"]);

// Generics Recap
type SuperPrint3 = <T, M>(a: T[], b: M) => T;

const superPrint3: SuperPrint3 = (a) => a[0];
const a2 = superPrint3([1, 2, 3, 4], "x");
const b2 = superPrint3([true, false, true], 1);
const c2 = superPrint3(["a", "b", "c"], false);
const d2 = superPrint3([1, 2, true, false, "hello"], []);

// Conclusions
function superPrint4<V>(a: V[]) {
  return a[0];
}

const a3 = superPrint4([1, 2, 3, 4]);
const b3 = superPrint4([true, false, true]);
const c3 = superPrint4(["a", "b", "c"]);
const d3 = superPrint4([1, 2, true, false, "hello"]);

// 코드 저장
type Player<E> = {
  name: string;
  extraInfo: E;
};
type NicoExtra = {
  favFood: string;
};
type NicoPlayer = Player<NicoExtra>;

// const nico: Player<{favFood:string}> = {
//   name: "nico",
//   extraInfo: {
//     favFood: "kimchi",
//   },
// };

const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

//
type A = Array<number>;

let a4: A = [1, 2, 3, 4];

//
function printAllNumbers(arr: Array<number>) {}

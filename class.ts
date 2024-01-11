// 추상 클래스
abstract class User {
  constructor(
    // private로 추상 클래스 내에서만 사용 가능
    // private firstName: string,
    // private lastName: string,
    // private nickname: string,

    // protected로 바꾸면 상속 받은 클래스에서 사용 가능
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  //   추상 메소드
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// 추상 클래스 상속 받는 중
class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const nico = new Player("nico", "las", "니꼬");

nico.getFullName();

//
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("Kimchi", "한국 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

// Interface
type Team = "read" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// type Player1 = {
//     nickname: string
//     team: Team,
//     health: Health
// }
interface Player1 {
  nickname: string;
  team: Team;
  health: Health;
}

const nico1: Player1 = {
  nickname: "nico",
  team: "yellow",
  health: 1,
};

//
interface User1 {
  name: string;
}
interface Player2 extends User1 {}

const nico2: Player2 = {
  name: "nico",
};

type User2 = {
  name: string;
};
type Player3 = User2 & {};

const nico3: Player3 = {
  name: "nico",
};

//
abstract class User3 {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
class Player4 extends User3 {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

//
interface User4 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}
class Player5 implements User4, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

function makeUser(user: User4): User4 {
  return {
    firstName: "nico",
    lastName: "las",
    fullName: () => "x",
    sayHi: (name) => "He",
  };
}
makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "x",
  sayHi: (name) => "He",
});

//
type PlayerA = {
  name: string;
};
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerA: PlayerAA = {
  name: "nico",
  lastName: "las",
};
//
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
interface PlayerBB {
  health: number;
}
const playerB: PlayerBB = {
  name: "nico",
  lastName: "las",
  health: 2,
};

//
type PlayerC = {
  firstName: string;
};

interface PlayerD {
  firstName: string;
}
class User5 implements PlayerD {
  constructor(public firstName: string) {}
}

// Polymorphism
interface SStorage<T> {
  [key: string]: T;
}
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
const stringsStorage = new LocalStorage<string>();

stringsStorage.get("key");
stringsStorage.set("hello", "how are you?");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx");
booleansStorage.set("hello", true);

function add(num1: number, num2: number) {
  return num1 * num2;
}
console.log(add(2, 9));

type User = {
  name: string;
  id: number;
};

const user: User = {
  name: "fsdf",
  id: 224,
};
console.log(user);

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Alice",
};
person.age = 27;

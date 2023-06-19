var employed = false; // boolean
var age = 24; // number
var name = "First Last"; // string

console.info(typeof employed);
console.info(typeof age);

var person = {
  name: "Crevian",
  age: 38,
  employed: true,
};

function h() {
  return "h";
}

const f = function myFn() {
  return "f";
};

const a = () => {
  return "a";
};

console.info(f(), a());

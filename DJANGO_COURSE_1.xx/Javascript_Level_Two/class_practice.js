function hello() {
  console.log("Hello World!");
}

function helloYou(name) {
  console.log("hello " + name);
}

function addNum(num1, num2) {
  console.log(num1 + num2);
}

function helloSomeone(name="Leon") {
  console.log("hello: " + name);
}

function formal(name='Leon', title='Sir') {
  return title + " " + name;
}

function timesFive(numInput) {
  var result = numInput * 5;
  return result;
}

var v = "Global v";
var stuff = "Global stuff";

function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff indise the fun";
  console.log(stuff);
}

fun()
console.log(stuff);

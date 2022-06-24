let x = window.prompt("Enter the first number");
let y = window.prompt("Enter the second number");

x = parseFloat(x);
y = parseFloat(y);

let z = x+y;
let a = x-y;
let b = x*y;
let c = x/y;

alert(`the sum of given numbers is:${z}`);
alert(`the difference of given numbers is:${a}`);
alert(`the product of given numbers is:${b}`);
alert(`the quotient of given numbers is:${c}`);
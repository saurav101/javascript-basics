// add(2, 3);
// function add(a, b) {
//   console.log(a + b);
// }

// addExpression(2, 3);
// var addExpression = function (num1, num2) {
//   console.log(num1 + num2);
// };

// let addArrowFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

// this.add(2, 3);
// this.addExpression(3, 4);

// // arrow function task
// let ask = (question, yes, no) => {
//   result = confirm(question) ? yes() : no();
//   return result;
// };
// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed");
//   },
//   () => {
//     alert("you canceled the execution");
//   }
// );

// function highOrder() {
//   let count = 0;
//   function canAccessCount() {
//     count++;
//     console.log(count);
//   }
//   return canAccessCount;
// }
// const logCount = highOrder();
// logCount();
// logCount();
// const logCount2 = highOrder();
// logCount2();

// // ask user for which data they want()
// const person = {
//   fullName: "saurabh",
//   age: 21,
//   isMarried: false,
//   father: {
//     name: "Father name",
//   },
// };
// const property = prompt(
//   "Which property do you want to access?: fullName , age, isMarried"
// ); //dynamically  vnya kunai variable bata auxa vnya ho
// console.log(person[property]); //person.name

// const obj = {};
// while (true) {
//   const key = prompt("Enter key");
//   if (key === "exit") {
//     break;
//   }
//   const value = prompt("Enter value");
//   obj[key] = value;
// }
// console.log(obj);

// for (let key in person) {
//   console.log(key, person[key]);
//   //obj ma loop launey tarika
// }

// const person = {
//   namee: "saurabh",
//   age: 10,
//   school: "samm",
//   greetArrow: () => {
//     console.log(this);
//   },
//   greet: function () {
//     console.log(this);
//     const arrowFunc = () => {
//       console.log("arrow vitra this", this);
//     };
//     arrowFunc();
//   },
// };
// person.greetArrow();
// person.greet();

// console.log(arr[0]);
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // loop in array
// for (let num of arr) {
//   console.log(num);
// }

// const studentMarks = [80, 20, 40, 30];
// const result = [];
// for (i = 0; i < studentMarks.length; i++) {
//   result[i] = studentMarks[i] + 5;
//   console.log(result[i]);
// }

//map vnya array ko high order function

// const increaseNumberBy5 = (num) => num + 5;
// const resultUsingMap = studentMarks.map(increaseNumberBy5);
// console.log(resultUsingMap);

// const addDiscount = (product) => {
//   product.discount = (10 / 100) * product.price;
//   return product;
// };

// const products = [
//   { name: "laptop", price: "300" },
//   { name: "mobile", price: "600" },
//   { name: "tablet", price: "700" },
//   { name: "airpods", price: "500" },
// ];
// const productsWithDiscount = products.map((product) => {
//   const newProduct = {
//     name: product.name,
//     price: product.price,
//     discount: (10 / 100) * product.price,
//   };
//   return newProduct;
// });
// console.log(productsWithDiscount);
// console.log(products);

// const students = [
//   { name: "Rachana", score: 90 },
//   { name: "Astha", score: 85 },
//   { name: "Sulav", score: 40 },
//   { name: "Saurav", score: 50 },
// ];
// const updatedScore = students.map((newScore) => {
//   const increasedScore = {
//     name: newScore.name,
//     score: newScore.score + 0.05 * newScore.score,
//   };
//   return increasedScore;
// });
// console.log(students);
// console.log(updatedScore);

// const studentsWithHigherThan80 = students.filter((student) => {
//   return student.score > =80;
// });
// console.log(studentsWithHigherThan80);

// let goodStudents = 0;
// for (let student of students) {
//   if (student.score >= 80) {
//     goodStudents++;
//   }
// }
// if (students.length === goodStudents) {
//   console.log("school is good");
// } else {
//   console.log("school is bad");
// }

// let goodStudents = (score) => score >= 80;
// {
//   if (students.every(goodStudents) === false) {
//     console.log("Bad School");
//   }
// }

// const nameSpecific = students.find((nam) => nam.name === "Saurav");
// nameSpecific.name = "Kathayat";
// console.log(nameSpecific);

// const numbers = [1, 10, 15, 20];
// let sum = 0;
// for (let num of numbers) {
//   sum = sum + num;
// }
// console.log(sum);

// const result = numbers.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(result);

// const students = [
//   { name: "Rachana", score: 90, favFruit: "apple" },
//   { name: "Astha", score: 85, favFruit: "apple" },
//   { name: "Sulav", score: 40, favFruit: "orange" },
//   { name: "Saurav", score: 50, favFruit: "pineapple" },
// ];
//needed ouput:apple=2,orange-1,pineappple-1

// const result = [];

// for (let student of students) {
//   if (result[student.favFruit] === undefined) {
//     result[student.favFruit] = 1;
//   } else {
//     result[student.favFruit]++;
//   }
// }
// console.log(result);

// const final = students.reduce((prev, curr) => {
//   if (prev[curr.favFruit] === undefined) {
//     prev[curr.favFruit] = 1;
//   } else {
//     prev[curr.favFruit]++;
//   }
//   return prev;
// }, {}); //prev ma empty object pass garya
// console.log(final);



// withdraw ,deposit ,check balance ,exit
// let total = 1000;
// let isCondition = true;
// while (isCondition) {
//   let z = prompt("its your choice: check balance/withdraw/deposit/exit");
//   if (z === "check balance") {
//     console.log("Your current balance is Nrs.", total);
//   } else if (z === "withdraw") {
//     let n = +prompt("Enter amount to withdraw: ");
//     total -= n;
//     console.log("Your account is debited by Nrs.", n);
//     console.log("Your total balance is Nrs.", total);
//   } else if (z === "deposit") {
//     let c = +prompt("Enter amount to deposit: ");
//     total = total + c;
//     console.log("Your account is credited by Nrs.", c);
//     console.log("Your total balance is Nrs.", total);
//   } else if (z === "exit") {
//     isCondition = false;
//     break;
//   }
// }

// const marks = prompt("Enter your marks: ");
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 70) {
//   console.log("B");
// } else if (marks >= 50) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// //variables and data types ex1:

// const age = 21;
// const fullName = "Saurabh Raj Kathayat";
// const isStudent = true;
// let height = 5.8;
// console.log(typeof age);
// console.log(typeof fullName);
// console.log(typeof isStudent);
// console.log(typeof height);

// //type conversion ex2:
// console.log(Number("123") + age);
// console.log(String(age) + " years old");

// //comparison operators
// console.log(123 == "123"); // == converts string to number so true
// console.log(123 === "123"); // === doesnot perform conversion  so false
// if (18 <= age <= 30) {
//   console.log("In age range");
// } else {
//   console.log("Out of range");
// }

// //logical operators
// if (age > 18 && isStudent === true) {
//   console.log("Eligible for student discount");
// }
// if (height < 5.5 || age > 60) {
//   console.log("Special Consideration required");
// }

// //LOOPS

// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// var i = 1;
// while (i <= 5) {
//   console.log("Hello");
//   i++;
// }

// const day = +prompt("Enter a number to display the day:");
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("no day found");
// }

// let count = 0;
// let playAgain = true;
// while (playAgain) {
//   for (var i = 1; i <= 3; i++) {
//     const questionNumber = +prompt("Enter your choice: 1/2/3");
//     switch (questionNumber) {
//       case 1:
//         console.log(
//           "What is the capital of France?: 1.Berlin 2.Madrid 3.Paris 4.Rome"
//         );
//         question_1Answer = +prompt("Enter your answer?");
//         if (question_1Answer === 3) {
//           console.log("That is correct");
//           count++;
//         } else {
//           console.log("That is incorrect");
//         }
//         break;
//       case 2:
//         console.log(
//           "What is the capital of Nepal?: 1.Biratnagar 2.Kathmandu 3.Bhaktapur 4.Lalitpur"
//         );
//         question_2Answer = +prompt("Enter your answer?");
//         if (question_2Answer === 2) {
//           console.log("That is correct");
//           count++;
//         } else {
//           console.log("That is incorrect");
//         }
//         break;
//       case 3:
//         console.log(
//           "What is the capital of India?: 1.Delhi 2.Mumbai 3.Punjab 4.Bangalore"
//         );
//         question_3Answer = +prompt("Enter your answer?");
//         if (question_3Answer === 1) {
//           console.log("That is correct");
//           count++;
//         } else {
//           console.log("That is incorrect");
//         }
//         break;
//       default:
//         console.log("invalid choice");
//         break;
//     }
//   }
//   console.log("Your final score is", count);
//   if (count === 3) {
//     console.log("Perfect Score");
//   } else {
//     console.log(" Better luck next time");
//   }
//   count = 0;
//   playAgain = confirm("Wanna play again?");
//   if (playAgain === true) {
//     true;
//   } else {
//     false;
//   }
// }

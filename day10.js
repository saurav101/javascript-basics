// function constructor
// const Aastha={
//     name:'Ash',
//     age:30,
//     school:'samriddhi',
//     greet:function(){
//         console.log(`${this.name}:Bello Guys!`)
//     },
// };
// const sathi={
//     name:'pasa',
//     age:20,
// };
// //using proto we are able to get access of greet from sathi otherwise it say sathi.greet is not function
// sathi.__proto__=Aastha
// console.log(sathi.greet())

// ............................................................................

// function Person(name,age){
//     // this={}
//     this.name=name,
//     this.age=age,
//     this.greet=function(){
//         console.log(`${this.name}:Bello!`)
//     };
//     // return this
// }

// Person.prototype.greetV2=function(){
//     console.log(`${this.name}:Hie!wassup`)
// }
// const Ash=new Person('Aastha',22);
// console.log(Ash.greetV2())
// console.log(Ash)

// ............................................................................

// function Person(name, age) {
//   // this={}
//   (this.name = name),
//     (this.age = age),
//     (this.greet = function () {
//       console.log(`${this.name}:Bello!`);
//     });
//   // return this
// }

// Person.prototype.greetV2 = function () {
//   console.log(`${this.name}:Hie!wassup`);
// };
// function Student(name, age, major) {
//   (this.name = name), (this.age = age), Person.call(this, name, age);
//   this.major = major;
// }
// Object.setPrototypeOf(Student.prototype, Person.prototype); //setting student with the prototype of Person now instead of copying the objects inside the function it will get or point the prototype of person
// const Ash = new Student("Aastha", 22, "MERN");
// console.log(Ash.greetV2());
// console.log(Ash);

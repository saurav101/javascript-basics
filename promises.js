////promise;
//// initial (pedning)
// //resolve () => then  (fullfilled)
//// reject  => catch (rejected)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value");
//   }, 5000);
// });
// promise.then((value) => {
//   console.log(value);
// });

// console.log("hello");

// const promiseReject = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("error");
//   });
// });
// promiseReject.catch((error) => {
//   console.log(error);
// });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     res.json().then((posts) => {
//       let titles = "";
//       for (let post of posts) {
//         titles += `<li> ${post.title}</li>`;
//         console.log(post);
//       }
//       document.getElementById("post").innerHTML = titles;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     res.json().then((users) => {
//       let data = "";
//       for (let id of users) {
//         data += `
//         <li> ${id.id}</li>
//         <li> ${id.name}</li>
//         <li> ${id.username}</li>
//         <li> ${id.email}</li>
//         <li> ${id.address.street}</li>
//         <li> ${id.phone}</li>
//         <li> ${id.website}</li>
//         <li> ${id.company.name}</li></br>

//         `;
//         console.log(id);
//       }
//       document.getElementById("id").innerHTML = data;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();
//     let data = "";
//     for (let id of users) {
//       data += `
//           <li> ${id.id}</li>
//           <li> ${id.name}</li>
//           <li> ${id.username}</li>
//           <li> ${id.email}</li>
//           <li> ${id.address.street}</li>
//           <li> ${id.phone}</li>
//           <li> ${id.website}</li>
//           <li> ${id.company.name}</li></br>

//           `;
//       console.log(id);
//     }
//     document.getElementById("id").innerHTML = data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     res.json().then((post) => {
//       console.log(post);
//       document.getElementById("post").innerHTML = `
//       <li> ${post.userId}</li>
//       <li> ${post.id}</li>
//       <li> ${post.title}</li>
//       <li> ${post.body}</li>
//       `;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function getPost() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const post = await res.json();
//     document.getElementById("post").innerHTML = `
//       <li> ${post.userId}</li>
//       <li> ${post.id}</li>
//       <li> ${post.title}</li>
//       <li> ${post.body}</li>
//       `;
//   } catch (error) {
//     console.log(error);
//   }
// }
// getPost();

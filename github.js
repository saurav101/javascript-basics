//.then.catch===>>>>

// const formRef = document.getElementById("github-form");
// formRef.addEventListener("submit", (e) => {
//   e.preventDefault(); //page refresh huna didaina
//   const userInputRef = document.getElementById("username");
//   const username = userInputRef.value;
//   fetch(`https://api.github.com/users/${username}`).then((res) => {
//     res.json().then((user) => {
//       console.log(user);
//       document.getElementById("user").innerHTML = `
//       <li> ${user.name}</li>
//       <li> ${user.followers}</li>
//       <li> ${user.following}</li>
//       <li> ${user.location}</li>
//      <img src=${user.avatar_url} width= "100px"/>
//       `;
//       fetch(`https://api.github.com/users/Basanta-Kc/followers`).then((res) => {
//         res.json().then((users) => {
//           let data = "";
//           for (let follow of users) {
//             data += `
//             <li> ${follow.id}</li>
//             <li> ${follow.login}</li></br>
//              <img src=${follow.avatar_url} width= "100px"/>
//           `;
//             console.log(follow);
//           }
//           document.getElementById("follow").innerHTML = data;
//         });
//         fetch(`https://api.github.com/users/Basanta-Kc/following`).then(
//           (res) => {
//             res.json().then((users) => {
//               let db = "";
//               for (let roll of users) {
//                 db += `
//             <li> ${roll.id}</li>
//             <li> ${roll.login}</li></br>
//              <img src=${roll.avatar_url} width= "100px"/>
//           `;
//                 console.log(roll);
//               }
//               document.getElementById("roll").innerHTML = db;
//             });
//           }
//         );
//       });
//     });
//   });
// });

// async...await===>>>>

// const formRef = document.getElementById("github-form");
// formRef.addEventListener("submit", async (e) => {
//   e.preventDefault(); //page refresh huna didaina
//   const userInputRef = document.getElementById("username");
//   const username = userInputRef.value;
//   const res = await fetch(`https://api.github.com/users/${username}`);
//   const user = await res.json();
//   const followersRes = await fetch(user.followers_url);
//   const followers = await followersRes.json();
//   const followingRes = await fetch(
//     `https://api.github.com/users/Basanta-Kc/following`
//   );
//   const following = await followingRes.json();
//   console.log(user);
//   document.getElementById("user").innerHTML = `
//         <li> ${user.name}</li>
//         <li> ${user.location}</li>
//        <img src=${user.avatar_url} width= "100px"/>
//         `;
//   let data = "";
//   for (let follow of followers) {
//     data += `
//             <li> ${follow.id}</li>
//             <li> ${follow.login}</li>
//             <img src=${follow.avatar_url} width= "100px"/>
//            `;
//     console.log(follow);
//   }
//   document.getElementById("follow").innerHTML = data;

//   let db = "";
//   for (let roll of following) {
//     db += `
//             <li> ${roll.id}</li>
//             <li> ${roll.login}</li>
//             <img src=${roll.avatar_url} width= "100px"/>
//            `;
//     console.log(roll);
//   }
//   document.getElementById("roll").innerHTML = db;
// });

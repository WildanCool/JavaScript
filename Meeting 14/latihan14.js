// Soal 1 Skillvul
// function helloWorld() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello World!");
//     }, 2000);
//   });
// }

// async function messages() {
//   var msg = await helloWorld();
//   console.log(msg);
// }

// messages();

// Soal 2 Skillvul
function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users);
    })
    
}

ambilDataUser();
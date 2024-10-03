// Soal 1 GDrive
// let fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched!");
//     }, 3000);
//   });
// };

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Soal 2 GDrive
// const number = [3, 7, 1, 6];
// function checkNumber() {
//   return new Promise((resolve, reject) => {
//     if (number[1] > 5) {
//       resolve("Number is too high");
//     } else {
//       reject("Number is too low");
//     }
//   });
// }

// checkNumber()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Soal 3 GDrive
// function fetchStep1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Step 1 Complete");
//     }, 1000);
//   });
// }
// function fetchStep2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Step 2 Complete");
//     }, 2000);
//   });
// }
// function fetchStep3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Step 3 Complete");
//     }, 3000);
//   });
// }

// Promise.all([fetchStep1(), fetchStep2(), fetchStep3()])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Soal 4 GDrive
let duration = 1000;
function simulateTask() {
  return new Promise((resolve, reject) => {
    if (duration <= 2000) {
      setTimeout(() => {
        resolve("Task Success");
      }, duration);
    } else {
      reject("Task Failed");
    }
  });
}

simulateTask()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Task completed.");
  });

// Soal 5 GDrive
// function fetchDataA() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data A");
//     }, 1000);
//   });
// }
// function fetchDataB() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data b");
//     }, 2000);
//   });
// }

// Promise.all([fetchDataA(), fetchDataB()])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

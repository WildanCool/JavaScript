// Nomer 1
let hari = "Selasa";
switch (hari) {
  case "Senin":
    console.log("Weekday");
    break;
  case "Selasa":
    console.log("Weekday");
    break;
  case "Rabu":
    console.log("Weekday");
    break;
  case "Kamis":
    console.log("Weekday");
    break;
  case "Jumat":
    console.log("Weekday");
    break;
  case "Sabtu":
    console.log("Weekend");
    break;
  case "Ahad":
    console.log("Weekend");
    break;
}

// Nomer 2
for (let angka = 1; angka <= 40; angka++) {
  if (angka % 3 === 0 && angka % 5 === 0) {
    console.log("FizzBuzz");
  } else if (angka % 3 === 0) {
    console.log("Fizz");
  } else if (angka % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(angka);
  }
}

// Nomer 3
for (let a = 1; a <= 10; a++) {
  console.log(a);
  if (a % 2 === 0) {
    console.log("Genap");
  }
}

// Nomer 4
for (let i = 1; i <= 15; i++) {
  console.log(i);
  if (i % 3 === 0) {
    console.log("Multiple of 3");
  }
}

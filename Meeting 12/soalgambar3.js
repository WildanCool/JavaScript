// Gambar 3 GDrive
function greet(name, callback) {
  console.log(`Hello ${name}`);
  setTimeout(callback, 1000);
}

function sayGoodbye() {
  console.log("Goodbye");
}

greet("Wildan", sayGoodbye);
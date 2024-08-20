// Nomer 1 Skilvul
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  tidur() {
    return `${this.nama} sedang tidur`;
  }

  makan() {
    return `${this.nama} sedang makan`;
  }
}

// Tulis kode kamu di bawah ini
class Pelajar extends Orang {
  constructor(nama, umur, namaSekolah) {
    super(nama, umur);
    this.namaSekolah = namaSekolah;
  }

  belajar() {
    return `${this.nama} belajar di ${this.namaSekolah}`;
  }
}

let user = new Pelajar("Terra", 17, "Skilvul");
console.log(user);

// Nomer 2 Skilvul
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  makan() {
    return "Hewan sedang makan";
  }
}

// Buat kode kamu di bawah ini
class Harimau extends Hewan {
  constructor(nama) {
    super(nama);
  }

  makan() {
    return `${this.nama} makan daging`;
  }
}

let harimauSumatra = new Harimau("Harimau Sumatra");
console.log(harimauSumatra.makan());

// Nomer 1 Soal GDrive
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log("Vehicle is starting");
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  start() {
    console.log("Car is starting");
  }
}

let Mobil = new Car("Toyota", "Avanza");
console.log(Mobil);
Mobil.start();

// Nomer 2 Soal GDrive
class Shape {
  draw() {
    return `Drawing Shape`;
  }
}

class Ritangle extends Shape {
  draw() {
    return `Drawing Rectangle`;
  }
}

// function renderShape(Shape) {
//   Shape.draw();
// }

const bentuk = new Ritangle();
console.log(bentuk.draw());

// Nomer 3 Soal GDrive
class person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, my name is ${this.name}`;
  }
}

class employee extends person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am an ${this.position}`;
  }
}

class manager extends employee {
  constructor(name, position) {
    super(name, position);
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am an ${this.position} and I am manage a team`;
  }
}

const person1 = new person("wildan", "manager");
console.log(person1.introduce());
const person2 = new employee("wildan", "manager");
console.log(person2.introduce());
const person3 = new manager("wildan", "manager");
console.log(person3.introduce());

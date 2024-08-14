// Nomer 1
const person = {
  name: "Wildan",
  age: 16,
  city: "Cisauk",
};
console.log(person.age);
console.log(person["age"]);

var umur = person.age + 5;
console.log(umur);
var umur = person["age"] + 5;
console.log(umur);

delete person.city;
console.log(person.city);

// Nomer 2
const { name, age } = person;
console.log(name, age);

const { name: namaSaya, age: umurSaya, city: kotaSaya } = person;
console.log(namaSaya, umurSaya, kotaSaya);

// Nomer 3
class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
  updateAuthor(newAuthor) {
    this.author = newAuthor;
  }
}

var myBook = new book("JavaScript Essentials", "Jane Doe");
console.log(myBook.getDetails());

myBook.updateAuthor("Wildan");
console.log(myBook.getDetails());

// Essay Nomer 1
const abudzar = {
  kepsek: "UstYahya",
  umur: 22,
  kota: "Madinah",
};

console.log(abudzar.kota);
console.log(abudzar["kota"]);

var usia = abudzar.umur + 5;
console.log(usia);
var usia = abudzar["umur"] + 5;
console.log(usia);

// Essay Nomer 2
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const myProduct = new Product("Keyboard", 100000);
const myProduct2 = new Product("Mouse", 50000);
const myProduct3 = new Product("Headset", 200000);

console.log(myProduct);
console.log(myProduct2);
console.log(myProduct3);

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
console.log(myBook.getDetails())
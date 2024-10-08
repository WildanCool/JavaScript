// Soal 1 Skilvul
function luasPersegi(s) {
  return s * s;
}

console.log(luasPersegi(8));

// Soal 1 GDrive
function registerUser(name, userType) {
  if (userType === "VIP") {
    return `Welcome VIP ${name}!`;
  } else {
    return `Welcome ${name}!`;
  }
}

console.log(registerUser("Nina", "VIP"));
console.log(registerUser("Nina", "NON VIP"));

function applyDiscount(userType, purchaseAmount) {
  if (userType === "VIP") {
    var discount = 0.2;
  } else {
    var discount = 0.1;
  }

  return purchaseAmount - purchaseAmount * discount;
}

console.log(applyDiscount("VIP", 200));
console.log(applyDiscount("NON VIP", 200));

// Soal 2 GDrive
function calculatePrice(quantity, pricePerItem, isMember) {
  if (isMember === true) {
    return quantity * pricePerItem - quantity * pricePerItem * 0.15;
  } else {
    return quantity * pricePerItem;
  }
}

console.log(calculatePrice(3, 15000, true));
console.log(calculatePrice(3, 15000, false));
var totalPrice = calculatePrice(3, 15000, true);

function confirmPurchase(isConfirmed, totalPrice) {
  if (isConfirmed === true) {
    return `Purchase confirmed with total price ${totalPrice}.`;
  } else {
    return `Purchase not confirmed.`;
  }
}

console.log(confirmPurchase(true, totalPrice));
console.log(confirmPurchase(false, totalPrice));

// Soal 3 GDrive
var Stock = 50;
const requestedQuantity = 60;
function checkStock(requestedQuantity, item) {
  if (requestedQuantity > Stock) {
    return `Stock insufficient for ${item}.`;
  } else {
    return `Stock sufficient for ${item}.`;
  }
}

console.log(checkStock(60, "Laptop"));
console.log(checkStock(50, "Laptop"));

function restockItem(item, additionalStock) {
  var newStock = Stock + additionalStock;

  if (newStock >= requestedQuantity) {
    return `Restock complete for ${item}.`;
  } else {
    return `Restock needed for ${item}.`;
  }
}

console.log(restockItem("Laptop", 10));
console.log(restockItem("Laptop", 5));

// Soal 4 GDrive
function calculateTax(price, location) {
  if (location == "Jakarta") {
    return price * 0.1;
  }
  if (location == "Bandung") {
    return price * 0.05;
  }
}

var finalPrice = calculateTax(10000, "Jakarta");
console.log(finalPrice);

function displayResult(finalPrice, paymentStatus) {
  if (paymentStatus == "paid") {
    return `Payment successful! Total amount:` + finalPrice;
  } else {
    return `Payment pending`;
  }
}

console.log(displayResult(finalPrice, "paid"));

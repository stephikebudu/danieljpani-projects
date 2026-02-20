// The store's inventory
const inventory = [
  { name: "Apple", category: "Fruit", price: 1.5, quantity: 12, organic: true },
  { name: "Banana", category: "Fruit", price: 0.8, quantity: 0, organic: false },
  { name: "Broccoli", category: "Vegetable", price: 2.0, quantity: 5, organic: true },
  { name: "Milk", category: "Dairy", price: 3.5, quantity: 2, organic: false },
  { name: "Cheddar", category: "Dairy", price: 5.0, quantity: 8, organic: false },
  { name: "Spinach", category: "Vegetable", price: 1.2, quantity: 0, organic: true }
];



// Task 1 - What items are out of stock?
function isAvailable() {
  let outOfStock = [];

  // Write code below this line: Loop through inventory and check if quantity in each item in inventory is 0. If yes, add item to outOfStock array created above
  // Loop through the inventory
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity === 0) {
      outOfStock.push(inventory[i].name);
    }
  }

  return outOfStock;
}

console.log(isAvailable());



// Task 2 - What items are on discount?
function isOnDiscount() {
  let discountedItems = [];

  // Write code below this line: Loop through inventory and check if price of each item in inventory is greater than 3. If yes, add item to discountedItems array created above
  for (let i = 0; i < inventory.length; i++) {
    // Example logic: if price is less than 2.0
    if (inventory[i].price < 2.0) {
      discountedItems.push(inventory[i].name);
    }
  }

  return discountedItems;
}

console.log(isOnDiscount());

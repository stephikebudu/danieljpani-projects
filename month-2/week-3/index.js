// Orders
const orders = [
  { id: 101, customer: { firstName: "alice", lastNane: "smith", city: "New York" }, item: "Wireless Mouse", price: 25.99 },
  { id: 102, customer: { firstName: "BOB", lastNane: "JOHNSON", city: "chicago" }, item: "Mechanical Keyboard", price: 75.50 },
  { id: 103, customer: { firstName: "charlie", lastNane: "brown", city: "LOS ANGELES" }, item: "USB-C Hub", price: 40.00 }
];

// Task 1 - Format name of each order for shipping label printing
/*
  * Create an arrow function called formatName for each order. Return their full name in Title Case (e.g., "alice smith" becomes "Alice Smith"). Update to lower case > Capitalize the first letter > Join both first and last with space.
*/

// Task 2 - Generate label for each order
/*
  * Create a function called generateLabel for each order. Use Object Destructuring to extract id, item, and the customer's name. Hint: Use nested destructuring to extract name and city from the customer object. Use a template literal to return a multi-line string formatted like below:
  ORDER #101
  Customer: Alice Smith (From: New York)
  Item: Wireless Mouse
*/
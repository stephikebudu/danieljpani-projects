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
const formatName = (order) => {
    // 1. Convert everything to lowercase first (to handle inputs like "BOB")
    const first = order.customer.firstName.toLowerCase();
    const last = order.customer.lastName.toLowerCase();

    // 2. Capitalize the first letter and join them
    const formattedFirst = first.charAt(0).toUpperCase() + first.slice(1);
    const formattedLast = last.charAt(0).toUpperCase() + last.slice(1);

    return `${formattedFirst} ${formattedLast}`;
};

// Task 2 - Generate label for each order
/*
  * Create a function called generateLabel for each order. Use Object Destructuring to extract id, item, and the customer's name. Hint: Use nested destructuring to extract name and city from the customer object. Use a template literal to return a multi-line string formatted like below:
  ORDER #101
  Customer: Alice Smith (From: New York)
  Item: Wireless Mouse
*/
const generateLabel = (order) => {
    // 1. Destructure id, item, and customer from the order
    const { id, item, customer } = order;
    const { city } = customer;

    // 2. Fix applied: Passing the ENTIRE order, not just customer
    const fullName = formatName(order); 

    // 3. Return the formatted string
    return `ORDER #${id}
Customer: ${fullName} (From: ${city})
Item: ${item}`;
};

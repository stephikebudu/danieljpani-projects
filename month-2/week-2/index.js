// Smart devices in home
const devices = [
  { name: "Living Room Light", type: "light", isOn: false },
  { name: "Air Conditioner", type: "ac", isOn: true },
  { name: "Front Door Lock", type: "security", isOn: true }
];

let activeDevices = [];

// Task 1 - Check device type
/*
 * Write a regular function called deviceType. It should take a parameter: device (an object) and display the type (property) of the device (object) in the console.
*/
function deviceType(device) {
    console.log(`Device Type: ${device.type}`);
}
function deviceType() {
  return
}


// Task 2 - Check for devices that are on
/*
 * Write an arrow function and assign it to activeDevices. It should take devices array as a parameter and filter out devices that are off (use filter() callback function).
*/
activeDevices = devices.filter(device => device.isOn === true);


// Task 3 - Why can you update activeDevices variable from within your function.
/*
* Answer: 
I can update activeDevices because it is declared in the Global Scope using 'let', 
making it accessible and reassignable from anywhere in this script.
*/
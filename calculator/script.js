const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// When number or operator is clicked
buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.innerText;
    display.innerText = currentInput;
  });
});

// Clear button
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.innerText = "0";
});

// Equals button
equalsBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch {
    display.innerText = "Error";
    currentInput = "";
  }
});


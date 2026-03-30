// Quiz Questions
/*
*1. If you set a setTimeout to 0 milliseconds, the code inside of it will run immediately before any other code in your script. True or False? Explain.
False, because setTimeout always waits for the current script to finish and the Event Loop to become empty before running its callback.

*2. Explain what happens to a Promise if you do not include a .catch() block or a try/catch block, and the Promise is rejected.
If a rejected Promise isn’t handled with .catch() or try/catch, it triggers an unhandledrejection event and typically logs a "Uncaught (in promise)" error to the console, which can crash Node.js processes or leave browser applications in an unpredictable state.

*3. If you attach an event listener to a button and the user clicks it 10 times very fast. How many times will the callback function be added to the Task Queue? Explain.
The callback function will be added to the Task Queue exactly 10 times, because each individual click creates a unique event that the browser must queue and process sequentially
*//

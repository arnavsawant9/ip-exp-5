// Basic calculator function using Promises
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      // Check if the inputs are numbers
      if (typeof num1 !== "number" || typeof num2 !== "number") {
        reject("Both inputs must be numbers.");
      }
  
      // Handle the operations
      switch (operation) {
        case "add":
          resolve(num1 + num2);
          break;
        case "subtract":
          resolve(num1 - num2);
          break;
        case "multiply":
          resolve(num1 * num2);
          break;
        case "divide":
          if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject("Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.");
      }
    });
  }
  

  calculator(10, 5, "add")
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));
  
  calculator(10, 0, "divide")
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));
  
  calculator(10, 5, "invalid")
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));
  
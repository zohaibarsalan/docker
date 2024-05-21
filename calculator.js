import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const calculate = async () => {
  try {
    const num1 = parseFloat(await askQuestion("Enter the first number: "));
    const num2 = parseFloat(await askQuestion("Enter the second number: "));
    const operation = await askQuestion(
      "Enter the operation (add, subtract, multiply, divide): ",
    );

    let result;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          console.log("Error: Division by zero is not allowed.");
          rl.close();
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log(
          "Invalid operation. Please enter add, subtract, multiply, or divide.",
        );
        rl.close();
        return;
    }

    console.log(
      `The result of ${operation}ing ${num1} and ${num2} is: ${result}`,
    );
  } catch (error) {
    console.log("An error occurred:", error);
  } finally {
    rl.close();
  }
};

calculate();

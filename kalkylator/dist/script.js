const button = document.querySelectorAll("button");
console.log("button", { button });
const input = document.getElementById("textfield");
console.log(button);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    const num1 = input.getAttribute("placeholder");
    const square = "&radic;";

    const operators = ["+", "-", "/", "*", "√"];

    if (operators.includes(button[i].innerHTML)) {
      input.placeholder += " " + button[i].innerHTML + " ";
    } else {
      input.placeholder += button[i].innerHTML;
    }

    const op = (num) => {
      const split = num.split(" ");
      const numberOne = Number(split[0]);
      const operator = split[1];
      const numberTwo = Number(split[2]);
      switch (operator) {
        case "+":
          input.placeholder = numberOne + numberTwo;
          break;
        case "-":
          input.placeholder = numberOne - numberTwo;
          break;
        case "*":
          input.placeholder = numberOne * numberTwo;
          break;
        case "/":
          input.placeholder = numberOne / numberTwo;
          break;
        case "√":
          input.placeholder = Math.sqrt(numberTwo);
          break;
        default:
          console.log("something went wrong");
      }
    };
    if (i === 7) {
      op(num1);
    }

    console.log(num1);

    if (i === 16) {
      input.placeholder = "";
    }
  });
}
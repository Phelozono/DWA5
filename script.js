// scripts.js
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Scenario: Validation when values are missing
  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Scenario: An invalid division should log an error in the console
  if (divider < 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.error("Invalid divider provided:", divider);
    return;
  }

  // Scenario: Providing anything that is not a number should crash the program
  if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input provided:", { dividend, divider });
    return;
  }

  // Scenario: Dividing numbers result in a whole number
  const divisionResult = Math.floor(dividend / divider);
  result.innerText = divisionResult;
});

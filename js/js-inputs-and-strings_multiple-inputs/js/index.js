/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
  const selectedOption = document.querySelector(
    'input[name="option"]:checked'
  ).value;

  switch (selectedOption) {
    case "option1":
      secondInput.value = firstInput.value;
      console.log(secondInput.value);
      break;
    case "option2":
      secondInput.value = firstInput.value.toUpperCase();
      break;
    case "option3":
      const one = firstInput.value;
      const two = secondInput.value;
      firstInput.value = two;
      secondInput.value = one;
      break;
    default:
      console.log("Keine Option ausgewählt");
      break;
  }
});

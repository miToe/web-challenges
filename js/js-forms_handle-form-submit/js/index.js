console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted");
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  const age = data.age;
  const badness = data.badness;
  const sum = Number(age) + Number(badness);
  const firstName = event.target.firstName.value;

  console.log(`The age-badness-sum of ${firstName} is ${sum}`);

  event.target.reset();
  event.target.firstName.focus();
});

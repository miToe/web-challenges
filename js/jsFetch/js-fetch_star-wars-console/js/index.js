import { renderElement } from "./utils.js";

console.clear();

async function fetchData() {
  //   const url = "https://swapi.dev/api/people";
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  const r2d2 = data.results[2].eye_color;
  const nameOnly = data.results.map((user) => user.name);
  console.log(nameOnly);
  console.log(r2d2);
  return data.results[2].eye_color;
}

console.log(fetchData());

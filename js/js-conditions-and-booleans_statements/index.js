console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "h4x0r1337";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log(number + " is odd");
} else {
  console.log(number + " is even");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("Price to pay: " + numberOfHotdogs * 2 + " euro");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("Price to pay: " + numberOfHotdogs * 1.5 + " euro");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("Price to pay: " + numberOfHotdogs * 1 + " euro");
} else {
  console.log("Price to pay: " + numberOfHotdogs * 0.1 + " euro");
}

// Part 4: Daytime
const currentHour = 12;

// let currentHour = new Date().getHours();
const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const name = "Horst";

const greeting = name === coachName ? "Hello Coach!" : "Hello " + name + "!";

console.log(greeting);

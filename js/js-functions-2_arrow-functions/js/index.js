console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

// function getCurrentHour() {
//   const now = new Date();
//   const currentHour = now.getHours();
//   if (currentHour === 0) {
//     return "12am";
//   } else if (currentHour === 12) {
//     return "12pm";
//   } else if (currentHour <= 11) {
//     return currentHour + "am";
//   } else {
//     return currentHour - 12 + "pm";
//   }
// }

// function getVectorLength(x, y, z) {
//   return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// }

// function cleanInput(string) {
//   return string.toLowerCase().trim();
// }

const getCurrentHour = () => {
  const currentHour = new Date().getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

// const isOddAndSmall = (number) => {
//   if (number > 10) {
//     return false;
//   }

//   if (number % 2 === 0) {
//     return false;
//   }

//   return true;
// };

// const add3 = (a, b, c) => a + b + c;

// const repeat10 = (string) => string.repeat(10);

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

function add3(a, b, c) {
  return a + b + c;
}

function repeat10(string) {
  return string.repeat(10);
}

console.log(getCurrentHour());
console.log(getVectorLength(12, 21, 21));
console.log(cleanInput("askdjasld JKLJHFDSF"));
console.log(isOddAndSmall(15));
console.log(add3(2, 54253, 3425));
console.log(repeat10("miToe "));

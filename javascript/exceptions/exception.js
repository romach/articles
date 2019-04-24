'use strict';

class AgeError extends Error {}

const askAge = () => {
  const answer = prompt("How old are you?");
  if (Number.isInteger(Number.parseFloat(answer))) {
    const age = Number.parseInt(answer);
    if (age <= 0) {
      throw new AgeError("Age can't be less or equal zero!");
    }
    return age;
  } else {
    throw new Error("Wrong input");
  }
};

try {
  const age = askAge();
  document.getElementsByTagName('body')[0].innerText =`Your age is: ${age}`;
} catch (error) {
  // print error and error stack trace if error is AgeError. Otherwise, rethrow error
  if (error instanceof AgeError) {
    document.getElementsByTagName('body')[0].innerText =`${error}\n${error.stack}`;
  } else {
    throw error;
  }
} finally {
  // this block is executed in any case
  document.getElementsByTagName('body')[0].innerText +=`\nAge was prompted!`;
}
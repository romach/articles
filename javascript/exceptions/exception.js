'use strict';

const askAge = () => {
  const answer = prompt("How old are you?");
  if (Number.isInteger(Number.parseFloat(answer))) {
    return Number.parseInt(answer);
  } else {
    throw new Error("Invalid age");
  }
};

try {
  const age = askAge();
  document.getElementsByTagName('body')[0].innerText =`Your age is: ${age}`;
} catch (error) {
  document.getElementsByTagName('body')[0].innerText =`${error}`;
}

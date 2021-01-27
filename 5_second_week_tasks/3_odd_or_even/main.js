const oddEven = () => {
  let num = Number(prompt("Enter your number"));

  let solution = document.querySelector("#solution");
  let text;

  if (num >= 0 && num % 2 == 0) {
    text = `${num} is even`;
  } else if (num >= 0 && num % 2 !== 0) {
    text = `${num} is odd`;
  } else {
    text = `${num} is negative number`;
  }
  solution.textContent = text;
};

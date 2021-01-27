const countSalary = () => {
  let hSalary = Number(document.querySelector("#hsalary").value);
  let hours = Number(document.querySelector("#hours").value);
  let solution = document.querySelector("#solution");

  let overPay1 = hSalary * 1.5;
  let overPay2 = hSalary * 2;
  let result;

  if (hours <= 7) {
    result = hSalary * hours;
  } else if (hours >= 8 && hours <= 9) {
    result = hSalary * 7 + overPay1 * (hours - 7);
  } else if (hours > 9) {
    result = hSalary * 7 + overPay1 * 2 + overPay2 * (hours - 9);
  }
  solution.textContent = `You earned today result ${result} euros`;
};

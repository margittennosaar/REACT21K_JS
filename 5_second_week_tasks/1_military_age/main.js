const militaryAge = () => {
  let age = prompt("How old are you?");
  let solution = document.querySelector("#solution");
  let text;

  if (age < 18) {
    text = "You are too young";
  } else if (age < 27) {
    text = "Right age for military service";
  } else if (age < 41) {
    text = "You are in reserve";
  } else if (age < 55) {
    text = "You are in backup reserve";
  } else {
    text = "too aged";
  }

  solution.textContent = text;
};

const bmiCalc = () => {
  let height = Number(document.querySelector("#height").value) / 100;
  let weight = Number(document.querySelector("#weight").value);
  let solution = document.querySelector("#solution");

  let bmi = weight / (height * height);

  let text;

  if (bmi < 18.5) {
    text = `BMI is ${bmi} - Underweight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    text = `BMI is ${bmi} - Normal or Healthy Weight`;
  } else if (bmi > 25.0 && bmi < 29.9) {
    text = `BMI is ${bmi} - Overweight`;
  } else if (bmi > 30.0) {
    text = `BMI is ${bmi} - Obese`;
  }

  solution.textContent = text;
};

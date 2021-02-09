let form = document.querySelector("form");

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let text = document.querySelector("p");

let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = (e) => {
  e.preventDefault();
  let selectedValue;

  for (const v of direction) {
    if (v.checked) {
      selectedValue = v.value;
    }
  }

  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

  text.textContent = `background-image: linear-gradient(to right, ${color1.value}, ${color2.value});`;
};

form.addEventListener("submit", setGradient);

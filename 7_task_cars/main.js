let formInput = document.querySelector("#inputData");
let formSearch = document.querySelector("#searchData");

function Car(licence, maker, model, price, color) {
  this.licencePlate = licence;
  this.manufacturer = maker;
  this.carModel = model;
  this.carPrice = price;
  this.carColor = color;
}

let carArray = [];

const addCar = (event) => {
  event.preventDefault();
  let licence = document.getElementById("licence").value;
  let maker = document.getElementById("maker").value;
  let model = document.getElementById("model").value;
  let price = document.getElementById("price").value;
  let color = document.getElementById("color").value;
  let newCar = new Car(licence, maker, model, price, color);
  carArray.push(newCar);
  console.table(carArray);
  formInput.reset();
};

const searchCar = (event) => {
  event.preventDefault();

  let licence = document.getElementById("searchLicence").value;
  let text = document.querySelector("p");

  if (carArray.length == 0) {
    text.textContent = "Please enter car first";
  } else {
    for (let i = 0; i < carArray.length; i++) {
      if (carArray[i].licencePlate == licence) {
        text.textContent = `Licence number ${carArray[i].licencePlate} is ${carArray[i].manufacturer} ${carArray[i].carModel} `;
      } else {
        text.textContent = "whaaaaat?";
      }
    }
  }
  formSearch.reset();
};

formInput.addEventListener("submit", addCar);
formSearch.addEventListener("submit", searchCar);

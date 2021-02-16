let formInput = document.querySelector("#inputData");
let formSearch = document.querySelector("#searchData");

function Car(licence, maker, model, price, color) {
  this.licencePlate = licence;
  this.manufacturer = maker;
  this.carModel = model;
  this.carPrice = price;
  this.carColor = color;
  this.discount = function () {
    if (this.carPrice >= 20000) {
      this.discount = this.carPrice * 0.25;
    } else if (this.carPrice <= 5000) {
      this.discount = this.carPrice * 0.1;
    } else {
      this.discount = this.carPrice * 0.15;
    }
  };
  this.discount();
}

let carArray = [];

const addCar = (event) => {
  event.preventDefault();
  let licence = document.querySelector("#licence").value;
  let maker = document.querySelector("#maker").value;
  let model = document.querySelector("#model").value;
  let price = document.querySelector("#price").value;
  let color = document.querySelector("#color").value;
  let newCar = new Car(licence, maker, model, price, color);
  carArray.push(newCar);
  console.table(carArray);
  formInput.reset();
};

const searchCar = (event) => {
  event.preventDefault();

  let licence = document.querySelector("#searchLicence").value;
  let text = document.querySelector("p");
  formSearch.reset();
  if (carArray.length == 0) {
    text.textContent = "Please enter car first";
  } else {
    for (const i of carArray) {
      if (i.licencePlate == licence) {
        return (text.textContent = `Licence number ${i.licencePlate} is ${i.manufacturer} ${i.carModel} and your discount is ${i.discount}`);
      } else {
        text.textContent = `There is no car with that licence plate added to the system. Try again?`;
      }
    }
  }
};

formInput.addEventListener("submit", addCar);
formSearch.addEventListener("submit", searchCar);

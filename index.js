const inputEl = document.querySelector("#unit");
const convertBtnEl = document.querySelector("#convert-btn");

inputEl.value = 10; //default value
let meterToFeet =
  (feetToMeter =
  literToGallon =
  gallonToLiter =
  kgToPound =
  PoundToKg =
    0);

window.addEventListener("load", () => {
  document.querySelector(".pre-loader").style.display = "none";

  conversion(); //calling to convert default value

  inputEl.addEventListener("keyup", isNumber);
  convertBtnEl.addEventListener("click", conversion);
});

/**Function to allow only Number value in text box.. */
function isNumber() {
  let temp = inputEl.value;
  temp = temp.replace(/^0{2,}/, ""); //Remove initial zeros from text box

  if (/^\d*\.?\d*$/.test(temp) === false) {
    temp = temp.split("");
    temp.pop();
    temp = temp.join("");
  }

  inputEl.value = temp;
}

function conversion() {
  const unit = Number(inputEl.value);
  inputEl.value = unit;

  /*....................
  1 meter = 3.281 feet
  1 liter = 0.264 gallon
  1 kilogram = 2.204 pound
  ..........................*/

  meterToFeet = (unit * 3.281).toFixed(4);
  feetToMeter = (unit / 3.281).toFixed(4);

  literToGallon = (unit * 0.264).toFixed(4);
  gallonToLiter = (unit / 0.264).toFixed(4);

  kgToPound = (unit * 2.204).toFixed(4);
  PoundToKg = (unit / 2.204).toFixed(4);

  display(unit);
}

function display(unit) {
  const lengthConversionEl = document.querySelector("#length-conversion");
  const volumeConversionEl = document.querySelector("#volume-conversion");
  const massConversionEl = document.querySelector("#mass-conversion");

  lengthConversionEl.textContent = `${unit} meter = ${meterToFeet} feet | ${unit} feet = ${feetToMeter} meters`;
  volumeConversionEl.textContent = `${unit} liters = ${literToGallon} gallons | ${unit} gallons = ${gallonToLiter} liters`;
  massConversionEl.textContent = `${unit} kilos = ${kgToPound} pounds | ${unit} pounds = ${PoundToKg} kilos`;
}

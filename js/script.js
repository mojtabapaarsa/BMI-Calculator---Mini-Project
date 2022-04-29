let weightInput = document.querySelector("#weight");
let weightVal = document.querySelector("#weight-val");
let heightInput = document.querySelector("#height");
let heightVal = document.querySelector("#height-val");
let result = document.querySelector("#result");
let category = document.querySelector("#category");

weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);

function bmiCalculator() {
  let weightInputValue = weightInput.value;
  let heightInputValue = heightInput.value;
  weightVal.innerHTML = weightInputValue + " kg";
  heightVal.innerHTML = heightInputValue + " cm";

  let bmiValue = (
    weightInputValue / Math.pow(heightInputValue / 100, 2)
  ).toFixed(1);
  result.innerHTML = bmiValue;

  if (bmiValue < 18.5) {
    category.innerHTML = "Under Weight";
    result.style.cssText = "color:#ffc44d;";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    category.innerHTML = "Normal Weight";
    result.style.cssText = "color:#0be881;";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    category.innerHTML = "Over Weight";
    result.style.cssText = "color:#ff884d;";
  } else if (bmiValue > 30) {
    category.innerHTML = "Obese";
    result.style.cssText = "color:#ff5d4e;";
  }
}

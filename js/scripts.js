document.addEventListener("DOMContentLoaded", addFeatures);

function calculate(order) {
  var result;
  var firstInput = parseInt(document.getElementById("firstinput").value);
  var secondInput = parseInt(document.getElementById("secondinput").value);

  if (order === "add") {
    result = add(firstInput, secondInput);
  } else if (order === "subtract") {
    result = subtract(firstInput, secondInput);
  } else if (order === "pi") {
    result = pi();
  } else if (order === "pow") {
    result = pow(firstInput, secondInput);
  }

  document.getElementById("final-result").innerText = result;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const pi = () => {
  return Math.PI;
};

const pow = (a, b) => {
  return Math.pow(a, b);
};

const sqrt = (a) => {
  return parseInt(Math.sqrt(a));
};

function addFeatures() {
  addPIBtn();
  addPowBtn();
  addSqrtBtn();
}

// get the div container with the input and button elements
const getDivEl = (el) => {
  const _divEl = document.getElementsByTagName("div")[0];
  _divEl.setAttribute("id", "input-item");

  return _divEl.appendChild(el);
};

const addPIBtn = () => {
  let _piBtn = document.createElement("button");
  _piBtn.innerText = "PI";
  _piBtn.setAttribute("onclick", "calculate('pi')");

  getDivEl(_piBtn);
};

const addPowBtn = () => {
  let _powBtn = document.createElement("button");
  _powBtn.innerText = "Pow";
  _powBtn.setAttribute("onclick", "calculate('pow')");
  _powBtn.setAttribute("style", "margin-left: 4px");

  getDivEl(_powBtn);
};

const addSqrtBtn = () => {
  let _sqrtBtn = document.createElement("button");
  _sqrtBtn.textContent = "Sqrt";
  _sqrtBtn.setAttribute("onclick", "calcSqrt('sqrt')");
  _sqrtBtn.setAttribute("style", "margin-left: 4px");
  getDivEl(_sqrtBtn);
};

const calcSqrt = () => {
  var result = document.getElementById("final-result").innerText;
  var _newDivEl = document.createElement("div");
  _newDivEl.setAttribute("id", "sqrt-result");
  _newDivEl.innerText = sqrt(result);
  document.body.appendChild(_newDivEl);

  document.getElementById("final-result").style.display = "none";
};

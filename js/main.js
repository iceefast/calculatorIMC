import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAllertError = notNumber(weight) || notNumber(height);

  if (showAllertError) {
    AlertError.open();
    return;
  }
  AlertError.close();

  const result = imc(weight, height);
  const message = `Seu IMC e de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

function notNumber(value) {
  return;
}

Modal.buttonClose.onclick = () => Modal.close();

function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

window.addEventListener("keydown", handleEscClick);

function handleEscClick(event) {
  if (event.key == "Escape") {
    Modal.close();
  }
}

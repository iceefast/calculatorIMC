const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),
  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = imc(weight, height);
  const message = `Seu IMC e de ${result}`;

  Modal.message.innerText = message;

  Modal.open();
  console.log(result);
};

Modal.buttonClose.onclick = () => Modal.close();

function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

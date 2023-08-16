const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal button.close");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = imc(weight, height);
  const message = `Seu IMC e de ${result}`;

  modalMessage.innerText = message;

  modalWrapper.classList.add("open");
  console.log(result);
};

modalBtnClose.onclick = () => modalWrapper.classList.remove("open");

function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

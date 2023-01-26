const numA = document.querySelector("input.campo-a");
const numB = document.querySelector("input.campo-b");
const submitBtn = document.querySelector(".btn");

function checkNumber(e) {
  e.preventDefault();
  console.log(numA.value, numB.value);
  if (numA.value < numB.value) {
    alert("Validado :)");
  } else if (numA.value === null && numB.value === null) {
    alert("Insira valores válidos");
  } else {
    alert("Não validado. Tente novamente");
  }
}

submitBtn.addEventListener("click", checkNumber);

const form = document.querySelector("form");
const inputName = document.querySelector("input#name");
const inputPhone = document.querySelector("input#phone");
const button = document.querySelector("button");
const table = document.querySelector("tbody");

function addContact(name, phone) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${name}</td><td>${phone}</td>`;
  table.appendChild(tr);
}

button.addEventListener("click", (e) => {
  if (inputName.value && inputPhone.value) {
    addContact(inputName.value, inputPhone.value);
    inputName.value = "";
    inputPhone.value = "";
  }
});

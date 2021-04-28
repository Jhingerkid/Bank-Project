import { transactionFormScreenCreator } from "./formScreens/transactionForm.js";
import { userFormScreenCreator } from "./formScreens/userForm.js";

document.querySelector("#userFormButton").addEventListener("click", function () {
  document.querySelector("#userFormButton").style.display = "none";
  document.querySelector("#transactionFormButton").style.display = "none";
  userFormScreenCreator();
});

document.querySelector("#transactionFormButton").addEventListener("click", function () {
  document.querySelector("#userFormButton").style.display = "none";
  document.querySelector("#transactionFormButton").style.display = "none";
  transactionFormScreenCreator();
});
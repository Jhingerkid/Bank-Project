import { transactionFormScreenCreator } from "./formScreens/transactionForm.js";
import { userFormScreenCreator } from "./formScreens/userForm.js";

window.check = false;

document.querySelector("#userFormButton").addEventListener("click", function () {
  // switch menus and clean them up before accessing them
  document.querySelector("#userFormButton").style.display = "none";
  document.querySelector("#transactionFormButton").style.display = "none";
  document.querySelector("#user").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#balance").value = "";
  document.querySelector("#currency").value = "";
  userFormScreenCreator();
});

document.querySelector("#transactionFormButton").addEventListener("click", function () {
  // switch menus and clean them up before accessing them
  document.querySelector("#userFormButton").style.display = "none";
  document.querySelector("#transactionFormButton").style.display = "none";
  document.querySelector("#object").value = "";
  document.querySelector("#amount").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#date").style.color = "black";
  transactionFormScreenCreator();
});
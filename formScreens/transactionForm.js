export function transactionFormScreenCreator() {
    let transactionForm = document.querySelector(".transactionForm")
    transactionForm.style.display = "flex";
    let back = document.createElement("button");
    back.innerHTML = "Back";
    back.classList.add("back");
    back.addEventListener("click", function () {
      userForm.style.display = "none";
      document.querySelector("#userFormButton").style.display = "block";
      document.querySelector("#transactionFormButton").style.display = "block";
      back.remove();
    });
    transactionForm.append(back);
}
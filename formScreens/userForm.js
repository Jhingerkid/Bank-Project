export function userFormScreenCreator() {
    let userForm = document.querySelector(".userForm")
    userForm.style.display = "flex";
    let back = document.createElement("button");
    back.innerHTML = "Back";
    back.classList.add("back");
    back.addEventListener("click", function () {
      userForm.style.display = "none";
      document.querySelector("#userFormButton").style.display = "block";
      document.querySelector("#transactionFormButton").style.display = "block";
      back.remove();
    });
    userForm.append(back);
}
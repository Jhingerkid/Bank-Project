export function transactionFormScreenCreator() {
    let transactionForm = document.querySelector(".transactionForm")
    transactionForm.style.display = "flex";
    let back = document.createElement("button");
    back.innerHTML = "Back";
    back.classList.add("back");
    back.addEventListener("click", function () {
      let byeText = document.getElementsByClassName("text");
      while (byeText.length > 0) { 
        byeText[0].parentNode.removeChild(byeText[0]);
      } 
      transactionForm.style.display = "none";
      document.querySelector("#userFormButton").style.display = "block";
      document.querySelector("#transactionFormButton").style.display = "block";
      back.remove();
    });
    transactionForm.append(back);
}

document.querySelector("#username").addEventListener("change", function (event) {
  let newUrl = "http://localhost:5000/api/accounts/" + document.querySelector("#username").value + "/transactions"
  document.querySelector(".transactionForm").action = newUrl;
});

document.querySelector(".createTransaction").addEventListener("click", function (event) {
  window.check=false;
  // clear out any existing errors from the last attempt
  document.querySelector("#object").style.color = "black";
  document.querySelector("#amount").style.color = "black";
  // byeText is a live HTML collection so we use a while loop to make sure all elements are removed
  let byeText = document.getElementsByClassName("text");
  while (byeText.length > 0) { 
    byeText[0].parentNode.removeChild(byeText[0]);
  } 
  // grab the values of the form
  let object = document.querySelector("#object").value;
  let amount = document.querySelector("#amount").value;
  let date = document.querySelector("#date").value;
  let username = document.querySelector("#username").value;
  // for each form input, check it against a set of conditions
  // prevent the POST if any of them fail their respective checks
  if (checkObject(object)){
    event.preventDefault();
  }
  if (checkAmount(amount)){
    event.preventDefault();
  }
  if (checkDate(date)){
    event.preventDefault();
  }
  if (checkUsername(username)){
    event.preventDefault();
  }
  // if the form is successful, go back to the main menu
  if (!window.check){
    let transactionForm = document.querySelector(".transactionForm")
    transactionForm.style.display = "none";
    document.querySelector("#userFormButton").style.display = "block";
    document.querySelector("#transactionFormButton").style.display = "block";
    document.querySelector(".back").remove();
  }
});

function checkObject(object){
  let text = document.createElement("span")
  text.classList.add("text");
  // check for empty input
  if (!object.trim().length) {
    text.innerHTML = "Please input a value";
    document.querySelector("#object").after(text);
    window.check=true;
    return true;
  }
}

function checkAmount(amount){
  let text = document.createElement("span")
  text.classList.add("text");
  // check empty input
  if (amount === '') {
    text.innerHTML = "Please input a value";
    document.querySelector("#amount").after(text);
    window.check=true;
    return true;
  }
  // check for negative value
  if (Number(amount) === 0) {
    text.innerHTML = "Amount cannot equal 0";
    document.querySelector("#amount").after(text);
    window.check=true;
    return true;
  }
  // check for valid format
  let regex = /^[0-9\.\-]+$/ // see regexInfo.text for more information
  let isValid = regex.test(amount) // test amount string against regex
  if (!isValid) { // if the amount string had something outside the defined regex, isValid will be false
    document.querySelector("#amount").style.color = "red";
    text.innerHTML = "Input must be in ~XX.XX format";
    document.querySelector("#amount").after(text);
    window.check=true;
    return true;
  }
}

function checkDate(date){
  let text = document.createElement("span")
  text.classList.add("text");
  // check for valid date
  let regex = /^[A-Za-z0-9\:\-]+$/ // see regexInfo.text for more information
  let isValid = regex.test(date) // test date string against regex
  if (!isValid) { // if the date string has a character that doesn't belong, deny it - format is taken care of by input type
    document.querySelector("#date").style.color = "red";
    text.innerHTML = "Date format is invalid";
    document.querySelector("#date").after(text);
    window.check=true;
    return true;
  }
}

function checkUsername(username){
  let text = document.createElement("span")
  text.classList.add("text");
  // check for empty input
  if (!username.trim().length) {
    text.innerHTML = "Please select a user";
    document.querySelector("#username").after(text);
    window.check=true;
    return true;
  }
}
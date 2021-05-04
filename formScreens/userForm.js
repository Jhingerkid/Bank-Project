export function userFormScreenCreator() {
    let userForm = document.querySelector(".userForm")
    userForm.style.display = "flex";
    // this back button code may look familiar... I like it
    let back = document.createElement("button");
    back.innerHTML = "Back";
    back.classList.add("back");
    back.addEventListener("click", function () {
      var byeText = document.getElementsByClassName("text");
      while (byeText.length > 0) { 
        byeText[0].parentNode.removeChild(byeText[0]);
      } 
      userForm.style.display = "none";
      document.querySelector("#userFormButton").style.display = "block";
      document.querySelector("#transactionFormButton").style.display = "block";
      back.remove();
    });
    userForm.append(back);
}

document.querySelector(".createUser").addEventListener("click", function (event) {
  window.check=false;
  // clear out any existing errors from the last attempt
  document.querySelector("#user").style.color = "black";
  document.querySelector("#description").style.color = "black";
  document.querySelector("#balance").style.color = "black";
  // byeText is a live HTML collection so we use a while loop to make sure all elements are removed
  let byeText = document.getElementsByClassName("text");
  while (byeText.length > 0) { 
    byeText[0].parentNode.removeChild(byeText[0]);
  } 
  // grab the values of the form
  let user = document.querySelector("#user").value;
  let desc = document.querySelector("#description").value;
  let bal = document.querySelector("#balance").value;
  let cur = document.querySelector("#currency").value;
  // for each form input, check it against a set of conditions
  // prevent the POST if any of them fail their respective checks
  if (checkUser(user)){
    event.preventDefault();
  }
  if (checkDescription(desc)){
    event.preventDefault();
  }
  if (checkBalance(bal)){
    event.preventDefault();
  }
  if (checkCurrency(cur)){
    event.preventDefault();
  }
  // if the form is successful, go back to the main menu
  if (!window.check){
    let userForm = document.querySelector(".userForm")
    userForm.style.display = "none";
    document.querySelector("#userFormButton").style.display = "block";
    document.querySelector("#transactionFormButton").style.display = "block";
    document.querySelector(".back").remove();
  }
  // add the newly created user to the recent users list (stateless)
  let newUserOption = document.createElement("option");
  newUserOption.innerHTML = user;
  document.querySelector("#userlist").append(newUserOption);
});

function checkUser(user){
  // the order of the if statements matters - makes sure correct message is displayed for all scenarios
  var text = document.createElement("span")
  text.classList.add("text");
  // check for blank input
  if (!user.trim().length){
    text.innerHTML = "Please input a value";
    document.querySelector("#user").after(text);
    window.check=true;
    return true;
  }
  // check for special characters
  let regex = /^[A-Za-z0-9\s]+$/ // see regexInfo.text for more information
  let isValid = regex.test(user) // test user string against regex
  if (!isValid) { // if the user string had a special character, isValid will be false
    document.querySelector("#user").style.color = "red";
    text.innerHTML = "Input must not contain special characters";
    document.querySelector("#user").after(text);
    window.check=true;
    return true;
  }
  // check for user w/ at least 8 chars
  if (user.length < 8){
    document.querySelector("#user").style.color = "red";
    text.innerHTML = "User must be 8 characters long";
    document.querySelector("#user").after(text);
    window.check=true;
    return true;
  }
}

function checkDescription(desc){
  let text = document.createElement("span")
  text.classList.add("text");
  // check for blank input
  if (!desc.trim().length) {
    text.innerHTML = "Please input a value";
    document.querySelector("#description").after(text);
    window.check=true;
    return true;
  }
}

function checkBalance(bal){
  let text = document.createElement("span")
  text.classList.add("text");
  // check for blank input
  if (!bal.trim().length) {
    text.innerHTML = "Please input a value";
    document.querySelector("#balance").after(text);
    window.check=true;
    return true;
  }
  // check for negative value
  if (bal < 0) {
    text.innerHTML = "Balance cannot be negative";
    document.querySelector("#balance").after(text);
    window.check=true;
    return true;
  }
  // check for less than $50
  if (bal < 50 && bal >= 0) {
    text.innerHTML = "Balance must be at least $50";
    document.querySelector("#balance").after(text);
    window.check=true;
    return true;
  }
  // check for non numbers/"."
  let regex = /^[0-9\.]+$/ // see regexInfo.text for more information
  let isValid = regex.test(bal) // test currency string against regex
  if (!isValid) { // if the currency string had something outside the defined regex, isValid will be false
    document.querySelector("#balance").style.color = "red";
    text.innerHTML = "Input must be in ~XX.XX format";
    document.querySelector("#balance").after(text);
    window.check=true;
    return true;
  }
}

function checkCurrency(cur){
  let text = document.createElement("span")
  text.classList.add("text");
  // check for blank input
  if (!cur.trim().length) {
    text.innerHTML = "Please input a value";
    document.querySelector("#currency").after(text);
    window.check=true;
    return true;
  }
}
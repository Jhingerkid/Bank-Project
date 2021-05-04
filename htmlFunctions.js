function fixBal(num){
    num = Number(num);
    num = num.toFixed(2);
    document.querySelector("#balance").value = num;
  }

function fixAmount(num){
  num = Number(num);
  num = num.toFixed(2);
  document.querySelector("#amount").value = num;
}
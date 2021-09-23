const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    if(billAmount.value>0) {

    }
    else {
         errorMessage.innerText = "The bill amount should be greater than 0"
    }
});
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    errorMessage.getElementsByClassName.display ="none";
    if(billAmount.value>0) {
        if(cashGiven.value >0){
            if(cashGiven.value >= billAmount.value ){
                const amountToBeReturned = cashGiven - billAmount;
            }
            else 
            {
                showMessage("The Cash provided should be atleast equal to the bill amount");
            }
        }
    }
    else {
        showMessage("The bill amount should be greater than 0");
    }
});

function calculateChange() {
    
}

function showMessage(message) {
    errorMessage.getElementsByClassName.display = "block"; 
        errorMessage.innerText = message;
}
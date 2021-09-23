const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelector(".no-of-notes")

const availableNotes  = [2000,500,100,20,10,5,1]

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    errorMessage.style.display ="none";
    if(billAmount.value>0) {
        if(cashGiven.value >0){
            if(cashGiven.value >= billAmount.value ){
                const amountToBeReturned = cashGiven - billAmount;
                calculateChange(amountToBeReturned);
                
            }
            else 
            {
                showMessage("Do you wanna wash plates?");
            }
        }
    }
    else {
        showMessage("The bill amount should be greater than 0");
    }
});

function calculateChange(amountToBeReturned) {
    for(let i = 0; i<availableNotes.length;i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned /availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(message) {
        errorMessage.style.display = "block"; 
        errorMessage.innerText = message;
}
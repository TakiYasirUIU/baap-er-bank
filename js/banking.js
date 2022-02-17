// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = newdepositAmount + previousDepositAmount;
    depositTotal.innerText = newDepositTotal ;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = PreviousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal; 


    // clear the deposit input field
    depositInput.value = '';
});
// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const PreviousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = PreviousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; 

    // clear withdraw input 
    withdrawInput.value = '';

    


})

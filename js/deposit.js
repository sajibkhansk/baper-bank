document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    

    const depositTotalElement =document.getElementById('deposit-total');
    const privousDepositTotalString = depositTotalElement.innerText;
    const privousDepositTotal = parseFloat(privousDepositTotalString ); 
    

    
    const currentDepositTotal = privousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal ;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const privousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = privousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal
    
    depositField.value='';

})
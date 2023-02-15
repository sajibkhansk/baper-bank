    document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw = parseFloat(withdrawField.value);
    console.log(withdraw);


    const withdrawTotal = document.getElementById('withdraw-total');
    const totalWithdraw =parseFloat(withdrawTotal.innerText);
    console.log(totalWithdraw);
    
     
    const total = withdraw + totalWithdraw; 
    withdrawTotal.innerText = total; 
    console.log(withdraw.innerText);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const privousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = privousBalanceTotal -withdraw ;
    balanceTotalElement.innerText = currentBalanceTotal;
    
                    const balance = parseFloat(balanceTotalElement.innerText);
                    
    withdrawField.value='';
})
//Step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //Step-2: get the email address inside teh email input field
    //for input field- >  value 
    const emailField = document.getElementById('user-email')
   const email=emailField.value;
   //Step3: getPassword
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;
                console.log(email, password);
    if(email==='pola@gmail.com' &&  password==='bap'){
        window.location.href='bank.html';
    }
    else{
        alert("Invalid User");
    }
})
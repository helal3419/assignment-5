// donation card number 01
document.getElementById('donation-card-btn-noakhali').addEventListener('click',function (event) {
    event.preventDefault();
    

    const donetionOne = getInputFieldValueById('donation-amount-one');
    const balance = getTextFieldValueById('Account-Balance-one');
    const newBalance = balance + donetionOne;

    document.getElementById('Account-Balance-one').innerText = newBalance;

    if (donetionOne<=0   ) {
        alert(' Donetion faild please try again.')
        
    }



}) ;

document.getElementById('donation-card-btn-noakhali').addEventListener('click',function (event) {
    event.preventDefault();
    

    const donetionOne = getInputFieldValueById('donation-amount-one');
    const balance = getTextFieldValueById('Total-Balance');
    const newBalance = balance - donetionOne;

    document.getElementById('Total-Balance').innerText = newBalance;

 

}) ;


// donation card number 02
document.getElementById('donation-card-btn-feni').addEventListener('click',function (event) {
    event.preventDefault();
    

    const donetionOne = getInputFieldValueById('donation-amount-two');
    const balance = getTextFieldValueById('Account-Balance-two');
    const newBalance = balance + donetionOne;

    document.getElementById('Account-Balance-two').innerText = newBalance;

    if (donetionOne<=0   ) {
        alert(' Donetion faild please try again.')
        
    }



}) ;

document.getElementById('donation-card-btn-feni').addEventListener('click',function (event) {
    event.preventDefault();
    

    const donetionOne = getInputFieldValueById('donation-amount-two');
    const balance = getTextFieldValueById('Total-Balance');
    const newBalance = balance - donetionOne;

    document.getElementById('Total-Balance').innerText = newBalance;

 

}) ;


// donation card number 03
document.getElementById('quota-movement').addEventListener('click',function (event) {
    event.preventDefault();
    

    const donetionOne = getInputFieldValueById('donation-amount-three');
    const balance = getTextFieldValueById('Account-Balance-three');
    const newBalance = balance + donetionOne;

    document.getElementById('Account-Balance-three').innerText = newBalance;

    if (donetionOne<=0   ) {
        alert(' Donetion faild please try again.')
        
    }



}) ;

document.getElementById('quota-movement').addEventListener('click',function (event) {
    event.preventDefault();
    

    const donetionOne = getInputFieldValueById('donation-amount-three');
    const balance = getTextFieldValueById('Total-Balance');
    const newBalance = balance - donetionOne;

    document.getElementById('Total-Balance').innerText = newBalance;

 

}) ;


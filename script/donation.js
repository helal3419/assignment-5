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

    document.getElementById('donation-amount-one').value =""
    document.getElementById('Total-Balance').innerText = newBalance;

    if (donetionOne>balance   ) {
        alert(' Donetion faild please try again.')
        
        
    }


            const div = document.createElement('div');
            div.classList.add('border');
            div.innerHTML =`
                 <p class='p-1 px-2'> You Donation : ${donetionOne} Taka at Noakhali, Bangladesh. Your Available Balance: ${newBalance}  </p>
                 <p class=' px-2'> transation time at</p>
                <p class='p-1 px-2'>${new Date().toISOString()}</p>
                <br>

                           `
                           document.getElementById('all-history').appendChild(div);
            //  this is transation history end

 

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

     document.getElementById('donation-amount-two').value =""
    document.getElementById('Total-Balance').innerText = newBalance;
    


    if (donetionOne>balance   ) {
        alert(' Donetion faild please try again.')
        
        
    }


            const div = document.createElement('div');
            div.classList.add('border');
            div.innerHTML =`
                 <p class='p-1 px-2'> You Donation : ${donetionOne} Taka at feni, Bangladesh. Your Available Balance: ${newBalance}  </p>
                 <p class=' px-2'> transation time at</p>
                <p class='p-1 px-2'>${new Date().toISOString()}</p>
                <br>

                           `
                           document.getElementById('all-history').appendChild(div);
            //  this is transation history end

 

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

     document.getElementById('donation-amount-three').value =""
    document.getElementById('Total-Balance').innerText = newBalance;
    


    if (donetionOne>balance   ) {
        alert(' Donetion faild please try again.')
        
        
    }


            const div = document.createElement('div');
            div.classList.add('border');
            div.innerHTML =`
                 <p class='p-1 px-2'> You Donation : ${donetionOne} Taka at quota movement, Bangladesh. Your Available Balance: ${newBalance}  </p>
                 <p class=' px-2'> transation time at</p>
                <p class='p-1 px-2'>${new Date().toISOString()}</p>
                <br>

                           `
                           document.getElementById('all-history').appendChild(div);
            //  this is transation history end

 

}) ;







    // show donetion button and hide history button

    document.getElementById('donetion-btn').addEventListener('click',function () {
        document.getElementById('donetion-three-card').classList.remove('hidden' );
        document.getElementById('all-history').classList.add('hidden');
        
    });

    // show history button  and hidden donition button
    document.getElementById('history-btn').addEventListener('click',function () {
        document.getElementById('donetion-three-card').classList.add('hidden');
        document.getElementById('all-history').classList.remove('hidden');
        
    });



    
    // show background colour donetion button and hide background coloue history button

    document.getElementById('donetion-btn').addEventListener('click',function () {
        document.getElementById('history-btn').classList.remove('bg-[#B4F461]' );
        document.getElementById('donetion-btn').classList.add('bg-[#B4F461]');
        
    });

    // show background color history button  and hidden background color donition button
    document.getElementById('history-btn').addEventListener('click',function () {
        document.getElementById('history-btn').classList.add('bg-[#B4F461]');
        document.getElementById('donetion-btn').classList.remove('bg-[#B4F461]');
        
    });

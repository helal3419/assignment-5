// challanging part
// donation common function 

//  use for input value
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
    
}

// use for text value

function getTextFieldValueById(id) { 
    const inputText = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputText);
    return inputNumber;
    
}
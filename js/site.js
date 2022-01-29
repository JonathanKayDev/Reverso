// CONTROLLER FUNCTION(S)
// Get string from the page
function getString() {
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);

    document.getElementById("alert").classList.add("invisible");
    // if input string is valid, then display reversed string 
    if (validateString(userString)) {
        displayString(revString);
    }
    
}


// LOGIC FUNCTION(S)
// Reverse the string
function reverseString(uString) {
    let revString = [];

    // reverse a string using a for loop
    for (let index = uString.length - 1; index >= 0; index--) {
        revString += uString[index];
    }

    return revString;
}

function validateString(uString) {
    let output = true;

    // check if string is empty or has only white spaces
    if (uString.length === 0 || !uString.trim()) {
        alert("Please enter a string for REVERSO!")
        output = false;
    }

    return output;
}


// VIEW FUNCTION(S)
// Display the reversed string to the user
function displayString(rString) {
    // write message to page
    document.getElementById("msg").innerHTML = `${rString} !`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}
/*
    Function: playCraps()
    Description: This is the main function called by the HTML button.
    It handles getting the user name, generating random numbers,
    implementing the specific game rules, and updating the webpage.
*/
function playCraps() {
    // console.log to help with debugging
    console.log("playCraps() started");

    // 1. Generate 2 random numbers between 1 and 6
    // Math.random() gives 0-0.99. Multiply by 6 gives 0-5.99. Floor it (0-5). Add 1 (1-6).
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    // 2. Calculate the sum of the two dice
    var sum = die1 + die2;

    // 3. Output the raw numbers to the HTML page
    // Using .innerHTML to update the text on the screen
    document.getElementById("die1Res").innerHTML = "Die 1: " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2: " + die2;
    document.getElementById("sumRes").innerHTML = "Total: " + sum;

    // 4. Implement the specific Craps Rules
    // Rule 1: If sum = 7 or sum = 11, output CRAPS – you lose!
    if (sum == 7 || sum == 11) {
        document.getElementById("finalMessage").innerHTML = "CRAPS - you lose!";
    }
    // Rule 2: If dice are equal (doubles) AND they are even (2, 4, 6)
    // We check if die1 equals die2 AND if die1 is even (die1 % 2 == 0)
    else if (die1 == die2 && die1 % 2 == 0) {
        // Call our second helper function to display a winning message with the name
        greetUser("You won!");
    }
    // Rule 3: Any other result
    else {
        document.getElementById("finalMessage").innerHTML = "You pushed!";
    }
}

/*
    Function: greetUser(resultMessage)
    Parameters: resultMessage - a string containing the win status
    Description: This satisfies the requirement to create a function that takes a 
    parameter. It grabs the user's name from the form and combines it with the result.
*/
function greetUser(resultMessage) {
    // Get the value typed into the input box with id "playerName"
    var name = document.getElementById("playerName").value;
    
    // If the user didn't type a name, default to "Player"
    if (name == "") {
        name = "Player";
    }

    // Combine the name and the message
    var fullMessage = name + ", " + resultMessage;

    // Output the final combined string to the page
    document.getElementById("finalMessage").innerHTML = fullMessage;
}
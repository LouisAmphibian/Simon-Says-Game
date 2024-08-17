// Step 3: Array to hold button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Step 4: Empty array to store the game pattern
var gamePattern = [];

// Step 5: Empty array to store the user's clicked pattern
var userClickedPattern = [];

/* Step 7 */
// A variable to track whether the game has started
var started = false;

// A variable to track the current level
var level = 0;

// Detect a keyboard keypress to start the game
/*$(document).keydown(function() {
    // Only start the game if it hasn't started already
    if (!started) {
        // Update the h1 to show the level
        $("#level-title").text("Level " + level);
        
        // Call nextSequence() to start the game
        nextSequence();
        
        // Set started to true to prevent starting the game again on subsequent keypresses
        started = true;
    }
});*/

$(document).keydown(startGame);
$("body").click(function() {
    if (!started) {
        startGame();
    }

function startGame() {
    // Condition to start the game if it hasn't started already
    if (!started) {
        // Update the h1 to show the level
        $("#level-title").text("Level " + level);
        
        // Call nextSequence() to start the game
        nextSequence();
}
}
/* End-Step 7 */


/* Step 4 */
// Function to generate a new random number and sequence
function nextSequence() {

    // Reset userClickedPattern for the next level
    userClickedPattern = [];

    // Increase the level by 1
    level++;
    
    // Update the h1 to reflect the current level
    $("#level-title").text("Level " + level);

    // Generate a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);

    // Use the random number to select a random color from the buttonColours array
    var randomChosenColour = buttonColours[randomNumber];

    // Add the randomChosenColour to the gamePattern array
    gamePattern.push(randomChosenColour);

    // jQuery to select the button with the same id as the chosen color and animate it
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    // Play the sound for the selected button color
    playSound(randomChosenColour);
}
/* End-Step 4 */


/* Step 5 */
// Detect when any button is clicked and trigger a handler function
$(".btn").click(function() {
    // Store the id of the clicked button in userChosenColour
    var userChosenColour = $(this).attr("id");
    
    // Add the clicked color to the userClickedPattern array
    userClickedPattern.push(userChosenColour);

    // Play sound corresponding to the clicked color
    playSound(userChosenColour);

    // Call animatePress() to animate the button press
    animatePress(userChosenColour);

    // Call checkAnswer() to check the user's answer
    checkAnswer(userClickedPattern.length - 1);

});
/* End-Step 5 */


/* Step 6 */
// Function to animate button presses
function animatePress(currentColour) {
    // Add "pressed" class to the button that gets clicked
    $("#" + currentColour).addClass("pressed");

    // Remove the "pressed" class after 100 milliseconds
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
/* End-Step 6 */


/* Step 8 */
// Function to check the user's answer against the game pattern
function checkAnswer(currentLevel) {
    // Check if the most recent user answer is the same as the game pattern
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        // Check if the user has finished their sequence
        if (userClickedPattern.length === gamePattern.length) {
            // Call nextSequence() after a 1000 millisecond delay
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
       // Play wrong sound if user clicked the wrong sequence
       var wrong = new Audio("sounds/wrong.mp3");
       wrong.play();

        // Add the "game-over" class to the body to create a flash effect
        $("body").addClass("game-over");

        // Remove the "game-over" class after 200 milliseconds
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        // Change the h1 title to "Game Over, Press Any Key to Restart"
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // Reset the game
        startOver();
    }
}
/* End-Step 8 */


/* Step 9 */
// Function to play sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
/*End-Step 9*/

/*Step 10*/
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
/*End-Step 10*/

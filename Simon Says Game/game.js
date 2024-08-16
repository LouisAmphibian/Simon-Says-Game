var buttonColours = ["red", "blue", "green", "yellow"];

//Empty array to store the game pattern
var gamePattern = [];

var userClickedPattern = [];

/*Step 5*/
//Detect when any button is clicked and trigger a handler function
$(".btn").click(function(){

    //Store the id of the clicked button in userChosenColou
   var userChosenColour = $(this).attr("id");
    
   userClickedPattern.push(userClickedPattern);
});
/*End-Step 5*/

/*Step 4*/
//function generate a new random number
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*3+1);

    //the random number to select a random color from the buttonColours array
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    // jQuery to select the button with the same id as the
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100);

    // Play the sound for the selected button color
    var audio = new  Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}
/*End-Step 4*/


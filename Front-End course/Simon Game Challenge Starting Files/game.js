var gamePattern = [];
var userClickedPattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.trunc(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playsound(randomChosenColor);
  level++;
  $("#level-title").text("LEVEL " + level);
  userClickedPattern=[];
}

var level=0;
var started=false;
$(document).keydown(function () {
    if(!started){   // !started = true cause started = false before
        $("#level-title").text("LEVEL " + level);
        nextSequence();
        started=true;   
    }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playsound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userChosenColor.length-1);
});

function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("Success");
    
    if(userClickedPattern.length===gamePattern.length){

      setTimeout(() => {
        nextSequence();
      }, 1000);

    }
  }
  else{
    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    playsound("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart")
    startOver();
    console.log("Wrong");
  }
}

function startOver(){
  level=0;
  started=false;
  gamePattern=[];
}
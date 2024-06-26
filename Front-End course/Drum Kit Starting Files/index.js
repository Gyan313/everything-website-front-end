for(var n=0;n<(document.querySelectorAll(".drum").length);n++){
    document.querySelectorAll("button")[n].addEventListener("click",function (){
        makingSound(this.innerText);
        buttonAnimation(this.innerText);
    });
}

document.addEventListener("keydown", function (event) {
    makingSound(event.key);
    buttonAnimation(event.key);
});

function makingSound(key){
    switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        default:
          console.log(this.innerHTML);
          break;
    }
}


// adding animation to the buttons of the tool kit

function buttonAnimation(currentKey){
    var butt=document.querySelector("."+currentKey);
    butt.classList.add("pressed");
    setTimeout(function(){
        butt.classList.remove("pressed")},100);
}
// adding the collapse classes
// function collapse_bars() {
//   // to collapase the third bar
//   let element = document.getElementById("third");
//   element.classList.add("colapse-below-bar");

//   //   to collapse the first bar
//   let ele = document.getElementById("first");
//   ele.classList.add("colapse-above-bar");
// }

let center = document.querySelector(".center");
function removeDiv() {
  let bars = document.querySelector(".bars");
  bars.classList.toggle("cross");
  //   toggle remove and add the elements involved whenever the function removeDiv() called.
  if (document.getElementById("crosses").style.display === "block") {
    document.getElementById("crosses").style.display = "none";
  } else {
    document.getElementById("crosses").style.display = "block";
  }
}

center.addEventListener("click", function () {
  // document.querySelector(".one-bar").style.animation=move_down 0.5s ease-out 0s alternate 1;
  setTimeout(function () {
    removeDiv();
  }, 1000);
});
// above code works when i click on the center div, it triggers a eventlistner and it calls a func
// that function do settimeout and that settimeout calls the function inside of it with a 2s delay.

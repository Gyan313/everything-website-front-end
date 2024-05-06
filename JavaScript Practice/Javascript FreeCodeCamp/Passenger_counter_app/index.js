// document.getElementById("count-el").innerText = 5;

//                                  Variables in javacript
/* 
let count = 0; // ---> using "let" or "var" keyword you make variables in javascript.
console.log(count);

let myAge = 20;
console.log(myAge);
 
// js starts reading code from top to bottom
*/

//                                          Maths in js

// 1)
// converting human age to dog age considering (1 humanYear= 7 DogYears)
/* 
let myAge = 20;
let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log(myDogAge); 
*/

// 2)
/* 
A random ques on perfoming +,- on same variable.
let count = 50;
count = count + 50;
count -= 75;
count += 45;

console.log(count); 
*/

//                              Functions in javascript .....
// syntax --->
/* 
    let i = 0;
    // function declaration and definition
    function add() {
    i++;
    console.log(i);
    }

    add();  ---> calling the function add()

    // local and global scope exits in js.
*/

/* let lapsCompleted = 0;

function IncrementLaps() {
  lapsCompleted++;
  return lapsCompleted;
}

for (let i = 0; i < 3; i++) {
  console.log(IncrementLaps());
} */

// Lets work on making the increment button interactive.

let count = 0;

let element = document.getElementById("count-el");
// console.log(element);   ---> this is gonna print the element whose id is provided in
//                              getElementById() method.
function increment() {
  count++;
  element.innerText = count;
}

// Why we didnt called incerement() func below??  Cause it is called on click on the increment btn.
// the num of times we click on the increment button above increment() function is gonna called each
// of the time and change the text of this element to count+1.

// DOM --> document object model
// It is how you use js to modify website.

// Document --> refers to html document
// object --> because the html document is shoved in the js object.
// Model ---> is the representation of the html tag in the js.
//            EX --> 1) (html tag) : <h2 id="count-el">0</h2>
//                      (representation in js) : document.getElementById("count-el")

//                    2) Its like html doc is real space ship but the representation is the
//                       model of that spaceship to play.

// Back to the code
// save() fucntion which logs out the count when its called, and it is called on the click on
// save btn.
function save() {
  console.log(count);
}

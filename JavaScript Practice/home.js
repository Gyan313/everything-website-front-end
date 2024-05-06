console.log('hello');
// alert('long time yo');
var b="harrry";
console.log(b);

var somenumber=45;
console.log(somenumber);

document.getElementById("gyan").innerHTML = "are you alone";

// var a = prompt("what is your age ");
// document.getElementById("sometext").innerHTML = a;

// var num="gyan";
// num++;
// console.log(num);
// console.log(num/2.0);
// console.log(num%2);
// console.log(num);

function greeting(){
    var name = prompt("What is your name");
    var result = "hello "+ name;
    console.log(result);
}
// greeting();

function somenumbers(num1,num2){
    var result= num1+num2;
    // console.log(result);
    console.log(num1+num2);
}

somenumbers(10,17);
somenumbers("hello"," Quazi");
somenumbers("10",10);

// beter way of writing function
function enter(naam){
    var result = "hello "+ naam;
    console.log(result);
}
// var naam= prompt("What is your name");
// enter(naam);

// var n=0;

// while(n<100){
//     n++;
//     console.log(n);
// }

for(let n=0;n<=100;n++){
    console.log(n);
}

// let n=28;
// let name="bob";
// let fullname={first:"gyan",last:"dev"};
// let truth=false;
// let groceries=["banana","apple","guava"];
// let random;
// let nothing=null;



// strings
let fruit="banana,apple,grapes";
let morefruit="banana\nmango";
console.log(morefruit);
console.log(fruit.length);
console.log(fruit.slice(2,6)); 
console.log(fruit.indexOf("na"));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.replace("ban","gyas"));
console.log(fruit.charAt(3));
console.log(fruit[3]);
console.log(fruit.split(','));



// arrays
let fruits=['banana','apple','grapes','oranges'];
fruits=new Array('banana','apple','grapes','oranges');

// alert(fruits[0]);
fruits[0]="pines";
console.log(fruits);
console.log(fruits.slice(2,4));
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log(fruits.join("&"));
console.log(fruits.pop(),fruits);

console.log(fruits.push("blackberries"),fruits);

fruits[fruits.length]='new fruit';
console.log(fruits);

fruits.shift();
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);

let vegetables=['asparagus','tomato','broccoli'];
let groceries=fruits.concat(vegetables);
console.log(groceries);
console.log(groceries.reverse());
console.log(groceries.slice(1,4));
console.log(groceries.sort());

let someNumbers=[3,4,6,2,5,1];
console.log(someNumbers.sort(function(a,b) {return a-b}))
console.log(someNumbers.sort(function(a,b) {return b-a}))

let emptyarray=[];
for(let i=0;i<10;i++){
    emptyarray.unshift(i);
    emptyarray.push(i);
}
console.log(emptyarray);



// objects in JS
let student ={
    firstN:'Gyan',
    lastN:"Dev",
    age:19,
    height:170,
    studentInfo:function(){
        return student.firstN+'\n'+student.lastN+'\n'+student.age;
    }
}
console.log(student.firstN);
console.log(student.lastN);
console.log(student.age);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// way to write fuction outside object
// function studentInfo(){
//     return student.firstN+'\n'+student.lastN+'\n'+student.age
// }
// console.log(studentInfo());


// if-else statement in JS

// let age1 = prompt("What is your age");

// if((age1>=18) && (age1<=35)){
//     let s="target audience";
//     console.log(s);
// }
// else{
//     let so="not target audience"
//     console.log(so);

// }


// switch statemet
let day=prompt("what is the day today");
switch (day){
    case 'saturday':
        text='holiday';
         break;       
    case 'sunday':
        text='holiday';
        break;
    default:
        text='WorkingDay';
}
console.log(text);





var num1=33;

var marks={
    ravi:34,
    gyan:90,
    harry:99.98,
}
var a=true;
var b=false;

console.log(marks);
console.log(a,b);

var arr=[1,3,'gyan',4,5];

var a=2;
var b=4;
console.log("a+b = ",a+b)
console.log(a==b);

console.log(true || false);
console.log(!false);

function avg(a,b){
    return (a+b)/2;
}
var c1=avg(4,5);
var c2=avg(3,5);
console.log(c1,c2);

var arr = [1,2,3,4,5];
for(var i=0;i<arr.length;i++){
    if(i==3){
        // break;
        continue;
    }
    console.log(arr[i]);
}

// var i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// arr.forEach(function(element){
// console.log(element)
// })

let arr1=[3,"harry","gyan",56.7];
let len=arr1.unshift("goonie");
console.log(len);
console.log(arr1);

let string= "hey my g name is gyan "

let z=string.indexOf("gyan");
console.log(z,"harry");

let date=new Date();
console.log(date);

document.getElementById("click").style.border="2px solid black";

let elm=document.getElementById("click");
console.log(elm);

let elmclass=document.getElementsByClassName("container");
console.log(elmclass);
// elmclass[0].style.background="pink";
// elmclass[0].style.border="2px solid green";
elmclass[0].classList.add("bg-prime");
elmclass[0].classList.add("text-success");

console.log(elm.innerHTML);
console.log(elm.innerText);
console.log(elmclass[0].innerHTML);
console.log(elmclass[0].innerText);

let tn=document.getElementsByTagName("div");
console.log(tn)
let createdElement=document.createElement("p");
createdElement.innerText = "hola folks"
tn[0].appendChild(createdElement);
createdElement2=document.createElement("b");
createdElement2.innerText = "amour"
tn[0].appendChild(createdElement2);

// tn[0].removeChild(createdElement,createdElement2);
tn[0].removeChild(createdElement2);

sel=document.querySelector(".container");
console.log(sel);
sel1=document.querySelectorAll(".container");
console.log(sel1);

// window.onload=function(){
//     console.log("the document got loaded");
// }

// function clicked(){
//     console.log("the button got click");
// }


// firstContainer.addEventListener('click',function(){
//     console.log("pencho aaj friday fudia pallo")
// })
// firstContainer.addEventListener('mouseover',function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<e>you have clicked</e>"
//     console.log("mouse on container");
// })
// let prevHTML=document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll(".container")[1].innerHTML =prevHTML;
//     console.log("mouse up on container");
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>you have clicked</b>";
//     console.log("mouse down on container");
// })

logKaro=()=>{
    document.querySelectorAll(".container")[1].innerHTML = "<b>you have clicked</b>";
    console.log("What the Hell people")
}
// setTimeout(logKaro,2000);
// let clr=setInterval(logKaro,2000);

obj={first:"gyan",last:"Dev",a:{this:'that'}};
j=JSON.stringify(obj);
console.log(j);
console.log(typeof j);

parsed=JSON.parse(`{"first":"gyan","last":"Dev","a":{"this":"that"}}`);
console.log(parsed);


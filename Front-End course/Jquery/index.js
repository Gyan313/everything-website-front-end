
// $("a").html("search");
// var gu=$("a").attr("href","https://www.bing.com");
// console.log(gu);


// Adding EventListeners using jquery

// 1.click event
$("h1").click(function(){
    $("h1").addClass("big-title magnify");
});

// 2.keyPress event
// $("input").keypress(function(e){
//     console.log(e.key);
// })

// Challege whichever key we press gets shown in place of <h1>
// $("body").on("keypress",function(e){
//     $("h1").text(e.key);
// });

// Animations in website using Jquery

// fade methods
// $("button").click(function(){
//     $("h1").fadeOut();
// })

// $("button").click(function(){
//     $("h1").fadeToggle();
// })

// slide methods
// $("button").click(function(){
//     $("h1").slideUp();
// });

// $("button").click(function(){
//     $("h1").slideDown();
// })

// $("button").click(function(){
//     $("h1").slideToggle();
// })


// Animation by .animate()

// $("h1").on("click",function(){
//     $("h1").animate({
//         padding:"0 35%"
//     })
// });

// doing animation by using different methods at same time

$("h1").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})
// prevent spoilerphobes from seeing spoilers
// solution: hide spoilers and reveal them through user interactions

//1. hide spoiler
$(".spoiler span").hide();

//2. add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")

//3. when button pressed
$("button").click(function() {
  //3.1 show spoiler next to the button clicked
   $(this).prev().show();
  //3.2 get rid of button
   $(this).remove();
 });


/* NOTE: the following won't work

$("button").click(function() {
   $(".spoiler span").show();
   $(this).remove();
 });
 
why? because it shows ALL spans, not just the one whose button we clicked
this is why we need to traverse up to spoiler span for "this" button
(aka whichever button is clicked) */


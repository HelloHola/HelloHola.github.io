$(document).ready(function(){

var points = 0;
  
$("img").click(function() {
    $(this).css("background", "red");
    
    setTimeout(function(){
  $("img").css("background", "0")
}, 1000);
  });
  
  $(".red").click(function() {
    points+=2; //means points = points + 2;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
  $(".blue").click(function() {
    points++;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
    $(".green").click(function() {
    points+=3;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
   $(".yellow").click(function() {
    points+=5;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
   $(".orange").click(function() {
    points++;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
   $(".pink").click(function() {
    points+=4;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
   $(".bonus").click(function() {
    points+=10;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
   $(".gray").click(function() {
    points+=6;
    $('div#pointdisplay').html('Points: ' + points);
  });
  
   $(".final").click(function() {
    points+=0.5;
    $('div#pointdisplay').html('Points: ' + points);
  });


var person = prompt("Please enter your name");
if (person != null) {
  alert("Hello " + person);
}

var qualification = prompt("Are you qualified to smack people in the face?");
if (qualification == "no") {

  alert("Well if you said no I shouldn't be letting you do this... oh whatever.");
} 
else if (qualification == "yes") {
  alert("Oh, I'm so sorry Dr. " + person + " of smacking people in the face!");
} 
else if (qualification == "Yes") {
  alert("Oh, I'm so sorry Dr. " + person + " of smacking people in the face!");
} 
else if (qualification == "No") {
  alert("Well if you said no I shouldn't be letting you do this... oh whatever.");
} else {
  alert("It's a simple yes or no question!  Oh, who actually cares...");
}
var wronganswer = 1;
while (wronganswer === 1) {
  var answer = prompt("Last question, What is 1+1?");

  if (answer == "2") {
    wronganswer = 0;
  } else {

    alert("Try again!");

  }

}
  
});
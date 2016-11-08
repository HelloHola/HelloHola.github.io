$(document).ready(function() {
 
  //Removes class
  $('.mole').removeClass('emoji');
  //All variables go here
  var points = 0;
  var timeLeft = 30;

  //Click function for 'start' button
  $('#start').click(function(){
   Countdown();
    $(".mole").addClass("emoji")
  });

  //Click functions for enemies
  //$("img").click(function() {
   // $(this).css("background", "red");

    //setTimeout(function() {
    //  $("img").css("background", "0")
    //}, 1000);
  //});

  $("img").click(function() {
    $(this).hide();

    setTimeout(function() {
      $("img").show();
    }, 3000);
  });

  $(".red").click(function() {
    points += 2; //means points = points + 2;
    $('div#pointdisplay').html(points);
  });

  $(".blue").click(function() {
    points++;
    $('div#pointdisplay').html(points);
  });

  $(".green").click(function() {
    points += 3;
    $('div#pointdisplay').html(points);
  });

  $(".yellow").click(function() {
    points += 5;
    $('div#pointdisplay').html(points);
  });

  $(".orange").click(function() {
    points++;
    $('div#pointdisplay').html(points);
  });

  $(".pink").click(function() {
    points += 4;
    $('div#pointdisplay').html(points);
  });

  $(".bonus").click(function() {
    points += 10;
    $('div#pointdisplay').html(points);
  });

  $(".gray").click(function() {
    points += 6;
    $('div#pointdisplay').html(points);
  });

  $(".final").click(function() {
    points += 0.5;
    $('div#pointdisplay').html(points);
  });

  //countdown timer function
  function Countdown() {
    var gameEnd =
      setInterval(function() {

        $("#timeLeft").html(timeLeft);
        if (timeLeft == 0) {
          clearInterval(gameEnd);
          alert("Time is up! You scored " + points + " points.");
        } else {
          timeLeft--;
          console.log(timeLeft);
   $('div#timedisplay').html(timeLeft);
        }
      }, 1000);
  }

   //Reset score
  $('.resetGame').click(function() {
    points = 0;
     $('div#pointdisplay').html(points);
    
     $('.mole').removeClass('emoji');
 timeLeft = 30;
     
   $('div#timedisplay').html(timeLeft);
  
  }); //reset ends

  
  

}); //doc.ready
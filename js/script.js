// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    var user= $("userChoice").val();
    
    $("userChoice").text(user);
});

var computerChoice;

var randomNumber = Math.random();

 console.log();
 if(randomNumber > .6666666){
     computerChoice = "Rock";
     $("#result").html(computerChoice);
 }
 else if(randomNumber > .3333333){
     computerChoice = "Paper";
     $("#result").html(computerChoice);
 }
 else {
    computerChoice = "Scissors";
    $("#result").html(computerChoice);  
 } 
 
 
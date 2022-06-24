var m=true;
var t=false;
var userp=[];
var gamep=[];
var colors=["red","blue","green","yellow"];
var level=0;

$(".btn").click(function() {
  var usercolor=this.id;
  userp.push(usercolor);
  press(usercolor);
  playS(usercolor);
  checkAnswer(userp.length-1);
});

$("body").keydown(function() {
  if(!t) {
    t=true;
    nxtsequence();
    $("h1").text("LEVEL-"+level);
  }
});

function nxtsequence() {
  userp=[];
 level++;
 $("h1").text("LEVEL-"+level);
 var rncolor=Math.floor(Math.random()*4);
 gamep.push(colors[rncolor]);
 press(colors[rncolor]);
}

function checkAnswer(level) {
  if(userp[level]===gamep[level]) {
     if(userp.length===gamep.length) {
       setTimeout(function () {
         nxtsequence();
       },1000);
     }
   }
   else {
     $("h1").text("Game Over! Press any key to try again.");
     $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over");
     },200);
     var w=new Audio("sounds/wrong.mp3");
     w.play();
     startOver();
   }
}

function startOver() {
  t=false;
  gamep=[];
  level=0;
}
function playS(name) {
  var naudio=new Audio("sounds/"+name+".mp3");
  naudio.play();
}

function press(id) {
  $("#"+id).addClass("pressed");
  setTimeout(function () {
    $("#"+id).removeClass("pressed");
  },200);
  $("#"+id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playS(id);
}

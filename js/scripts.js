/*function rollDice(){
  var die1=document.getElementById("die1");
  var die2=document.getElementById("die2");
  var status=document.getElementById("status");
  var d1=Math.floor(Math.random()*6)+1;
  var d2=Math.floor(Math.random)*6)+1;
  var diceTotal=d1+d2;
  die1.innerHTML=d2;
  die2.innerHTML=d1;
  status.innerHTML="You Rolled" + diceTotal ".";
  if(d1==d2){
    status.innerHTML += "Doubles! You get free turn!";
  }
}

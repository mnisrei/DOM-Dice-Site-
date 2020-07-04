var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var h1Selector = document.querySelector("h1");
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
  h1Selector.innerHTML = "Player 1 Wins";
}
else if (randomNumber2>randomNumber1) {
  h1Selector.innerHTML= "Player 2 Wins"
}
else{
  h1Selector.innerHTML = "Draw"
}

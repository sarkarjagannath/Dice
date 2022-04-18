var randomNumber1= Math.floor(Math.random() * 6) + 1;

var randomDiceimg= "dice"+randomNumber1+".png"; //dice 1 to 6

var randomImgSrch = "images/"+randomDiceimg; // images/dice1.png to dice6.png

var img1= document.querySelectorAll("img")[0]; // select what want to be changed

img1.setAttribute("src",randomImgSrch);


var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomImgSrch2 = "images/dice"+randomNumber2+".png"; // images/dice1.png to dice6.png

var img2= document.querySelectorAll("img")[1]; // select what want to be changed

img2.setAttribute("src",randomImgSrch2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏆 Player 1 Wins !!";
}
else if (randomNumber1===randomNumber2){
      document.querySelector("h1").innerHTML="🎉 Drawc 🎉";
}else{
    document.querySelector("h1").innerHTML="🏆 Player 2 Wins!!";
}

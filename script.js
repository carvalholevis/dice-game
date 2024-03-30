var randomNumber1 = Math.floor((Math.random() * 6) + 1 )
var randomNumber2 = Math.floor((Math.random() * 6) + 1 )






    if (randomNumber1 === 1){
        document.querySelector(".img1").setAttribute("src", "./img/dice1.png")
    } else if (randomNumber1 === 2){
        document.querySelector(".img1").setAttribute("src", "./img/dice2.png")
    } else if (randomNumber1 === 3){
        document.querySelector(".img1").setAttribute("src", "./img/dice3.png")
    } else if (randomNumber1 === 4){
        document.querySelector(".img1").setAttribute("src", "./img/dice4.png")
    } else if (randomNumber1 === 5){
        document.querySelector(".img1").setAttribute("src", "./img/dice5.png")
    } else if (randomNumber1 === 6){
        document.querySelector(".img1").setAttribute("src", "./img/dice6.png")
    }




    if (randomNumber2 === 1){
        document.querySelector(".img2").setAttribute("src", "./img/dice1.png")
    } else if (randomNumber2 === 2){
        document.querySelector(".img2").setAttribute("src", "./img/dice2.png")
    } else if (randomNumber2 === 3){
        document.querySelector(".img2").setAttribute("src", "./img/dice3.png")
    } else if (randomNumber2 === 4){
        document.querySelector(".img2").setAttribute("src", "./img/dice4.png")
    } else if (randomNumber2 === 5){
        document.querySelector(".img2").setAttribute("src", "./img/dice5.png")
    } else if (randomNumber2 === 6){
        document.querySelector(".img2").setAttribute("src", "./img/dice6.png")
    }


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 01 win"
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 02 win"
} else {
    document.querySelector("h1").innerHTML = "We have a tie"
}


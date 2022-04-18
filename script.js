/*
-> 0 pedra
-> 1 papel
-> 2 tesoura
*/

var nome = prompt("Digite seu nome:")
var playerScore = 0
var iaScore = 0

function play(player) {
    var ia = Math.floor(Math.random() * 3)


    var ganhador = ""

    //ia ganha
    if ((ia == 0 && player == 2) || (ia == 1 && player == 0) || (ia == 1 && player == 1)) {
        ganhador = "IA"
        iaScore++
    } else if (ia == player) {
        ganhador = "Ninguém"
    } else {
        ganhador = nome
        playerScore++
    }

    var p1 = document.getElementById("winner")
    p1.innerHTML = ganhador + " ganhou!"

    var p2 = document.getElementById("score")
    p2.innerHTML = nome + ": " + playerScore + " x " + iaScore + " :IA"
}
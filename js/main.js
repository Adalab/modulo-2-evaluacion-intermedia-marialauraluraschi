'use strict';

const select= document.querySelector('.js-select');
const btn= document.querySelector('.js-btn');
const scoreMsg= document.querySelector('.js-score');
const player= document.querySelector('.js-player');
const pc= document.querySelector('.js-pc');

let playerScore= 0;
let pcScore= 0;

function initial(){
    player.innerHTML=`Jugador: ${playerScore}`;
    pc.innerHTML=`Computadora: ${pcScore}`;
}
initial()

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

function pcSelect() {
    const randNum = getRandomNumber(9);
    if (randNum <= 3) {
        return 'piedra';
    } else if (randNum >= 7) {
        return 'papel';
    } else {
        return 'tijera';
    }
}

function compare(){
    const playerSelection= select.value;
    const pcSelection= pcSelect();
    console.log(pcSelection);
    console.log(playerSelection);
    if (playerSelection === pcSelection) {
        scoreMsg.innerHTML= 'Empate';
    } else if (
        (playerSelection === 'piedra' && pcSelection === 'tijera') ||
        (playerSelection === 'papel' && pcSelection === 'piedra') ||
        (playerSelection === 'tijera' && pcSelection === 'papel')
    ) {
        scoreMsg.innerHTML= '¡Has ganado!';
        playerScore++;
    } else {
        scoreMsg.innerHTML= '¡Has perdido!';
        pcScore++;
    }
    initial();
}

function handleClick(event){
    event.preventDefault();
    compare();
}

btn.addEventListener('click', handleClick);
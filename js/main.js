'use strict';

const select= document.querySelector('.js-select');
const btn= document.querySelector('.js-btn');
const score= document.querySelector('.js-score');
const player= document.querySelector('.js-player');
const pc= document.querySelector('.js-pc');
let playerScore= player.value;
let pcScore= pc.value;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

function pcSelection() {
    const randNum = getRandomNumber(9);
    if (randNum <= 3) {
        return 'piedra';
    } else if (randNum >= 7) {
        return 'papel';
    } else {
        return 'tijera';
    }
}

function playerSelection(){
    const playerSelection=select.value;
}

function compare() {
    if (playerSelection === pcSelection) {
        score.innerHTML= 'Empate';
    } else if (
        (playerSelection === 'piedra' && pcSelection === 'tijera') ||
        (playerSelection === 'papel' && pcSelection === 'piedra') ||
        (playerSelection === 'tijera' && pcSelection === 'papel')
    ) {
        score.innerHTML= '¡Has Ganado!';
    } else {
        score.innerHTML= '¡Has perdido!';
    }
}


function handleClick(event){
    event.preventDefault();
    pcSelection();
    playerSelection();
    compare();
}

btn.addEventListener('click', handleClick);
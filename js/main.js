'use strict';

const select= document.querySelector('.js-select');
const btn= document.querySelector('.js-btn');
const score= document.querySelector('.js-score');
const player= document.querySelector('.js-player');
const pc= document.querySelector('.js-pc');

let playerScore= 0;
let pcScore=0;

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
        return 'Empate';
    } else if (
        (playerSelection === 'piedra' && pcSelection === 'tijera') ||
        (playerSelection === 'papel' && pcSelection === 'piedra') ||
        (playerSelection === 'tijera' && pcSelection === 'papel')
    ) {
        return '¡Has Ganado!';
    } else {
        return '¡Has perdido!';
    }
}

function (score){

}

function handleClick(event){
    event.preventDefault();
    pcSelection();
    playerSelection();
    compare();
    score();
}

btn.addEventListener('click', handleClick);
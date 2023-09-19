'use strict';

const select= document.querySelector('.js-select');
const btn= document.querySelector('.js-btn');
const scoreMsg= document.querySelector('.js-score');
const player= document.querySelector('.js-player');
const pc= document.querySelector('.js-pc');
const playerSelection= select.value;
let playerScore= 0;
let pcScore= 0;

function initial(){
    player.innerHTML+=`${playerScore}`;
    pc.innerHTML+=`${pcScore}`;
}
initial()

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

function score(){
    if (compare==='Empate'){
        scoreMsg.innerHTML= 'Empate';
    }
    else if (compare==='¡Has Ganado!'){
        scoreMsg.innerHTML= '¡Has Ganado!';
        playerScore++;
    }
    else {
        scoreMsg.innerHTML= '¡Has perdido!';
        pcScore++;
    }
    initial();
}

function handleClick(event){
    event.preventDefault();
    console.log(pcSelection());
    console.log(select.value);
}

btn.addEventListener('click', handleClick);
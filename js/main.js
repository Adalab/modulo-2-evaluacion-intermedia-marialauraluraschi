'use strict';

const select= document.querySelector('.js-select');
const btn= document.querySelector('.js-btn');
const score= document.querySelector('.js-score');
const player= document.querySelector('.js-player');
const pc= document.querySelector('.js-pc');
const rstBtn=document.querySelector('.rst-btn');

let playerScore= 0;
let pcScore= 0;

function initial(){
    player.innerHTML+=`${playerScore}`;
    pc.innerHTML+=`${pcScore}`;
}

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

function score(){
    if (compare==='Empate'){
        score.innerHTML= 'Empate';
    }
    else if (compare==='¡Has Ganado!'){
        score.innerHTML= '¡Has Ganado!';
        playerScore+= 1;
    }
    else {
        score.innerHTML= '¡Has perdido!';
        pcScore+= 1;
    }

}

function handleClick(event){
    event.preventDefault();
    pcSelection();
    playerSelection();
    compare();
    score();
}

btn.addEventListener('click', handleClick);
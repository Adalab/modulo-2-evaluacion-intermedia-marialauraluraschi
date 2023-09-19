'use strict';

const select= document.querySelector('.js-select');
const btn= document.querySelector('.js-btn');
const score= document.querySelector('.js-score');
const player= document.querySelector('.js-player');
const pc= document.querySelector('.js-pc');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
   
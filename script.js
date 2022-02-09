'use strict';

//Guess a rundom number from 1 to 100

let randomNumber = Math.floor(Math.random() * 100);

const guess = function() {
        let number = +prompt("Угадай число от 1 до 100");        

        if (number < 1 || number > 100) {
            alert("Игра окончена");
            return;
        } else if (number > randomNumber) {
            alert("Загаданное число меньше");
        } else if (number < randomNumber) {
            alert("Загаданное число больше");
        } else if (number === randomNumber) {
            alert("Поздравляю, Вы угадали!!!");
            return;
        } else if (isNaN(number)) {
            alert("Введи число!");
        } else {
            alert("Что-то пошло не так");
        }
        
        guess(); 
}; 
     
guess();

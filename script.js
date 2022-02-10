'use strict';

//Guess a rundom number from 1 to 100

const isnumber = function(num) {
    return !isNaN(parseInt(num)) && isFinite(num);
};

const guess = function() {

    let randomNumber = Math.floor(Math.random() * 100);

    console.log(randomNumber);

    return function repeat() {

        let number = prompt("Угадай число от 1 до 100");

        if (isnumber(number)) {

            number = +number;
            
            if (number < 1 || number > 100) {
                alert("Введите число между 1 и 100");
            } else if (number > randomNumber) {
                alert("Загаданное число меньше");
            } else if (number < randomNumber) {
                alert("Загаданное число больше");
            } else if (number === randomNumber) {
                alert("Поздравляю, Вы угадали!!!");
                return;
            }
                        
        } else if (number === null) {
            alert("Игра окончена");
            return;
        } else {
            alert("Введи число!");
        }
        
        console.log(randomNumber, number);
        return repeat();
    };    
};

const guessNumber = guess();
guessNumber();
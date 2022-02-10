'use strict';

//Guess a rundom number from 1 to 100
//No more than 10 guesses

const isnumber = function(num) {
    return !isNaN(parseInt(num)) && isFinite(num);
};

const guess = function() {

    let randomNumber = Math.floor(Math.random() * 100);
    let count = 10;

    return function repeat() {

        count--;

        if (count < 1) {
            const tryGame = prompt("Попытки закончились, хотите сыграть еще?");

            if (tryGame === null) {
                return;
            } else {
                const guessAgain = guess();
                guessAgain();
            }

            return;
        }

        let number = prompt("Угадай число от 1 до 100");

        if (isnumber(number)) {
            
            if (number < 1 || number > 100) {
                alert("Введите число между 1 и 100", count);
            } else if (number > randomNumber) {
                alert("Загаданное число меньше, осталось " + count + " попыток");
            } else if (number < randomNumber) {
                alert("Загаданное число больше,  осталось " + count + " попыток");
            } else if (number == randomNumber) {
                const tryGame2 = prompt ("Поздравляю, Вы угадали!!! Хотите сыграть еще?");

                if (tryGame2 === null) {
                    return;
                } else {
                    const guessAgain = guess();
                    guessAgain();
                }
            }
                        
        } else if (number === null) {
            alert("Игра окончена");
            return;
        } else {
            alert("Введи число!", count);
        }
        
        return repeat();
    };    
};

const guessNumber = guess();
guessNumber();

'use strict';

//Guess a rundom number from 1 to 100

/*
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
*/

//let randomNumber = Math.floor(Math.random() * 10);

// let randomNumber = Math.floor(Math.random() * 100);

// const counter = function(n) {
//     if (n < 1)
//         return;

//     number();
//     console.log("--Left", n, "tries");    
//     counter(n - 1);
// };

// const number = function() { 
//     let num = +prompt("Enter the number");
//     console.log(num); 
//     if(num === 0) 
//     return;

      
// };

// counter(9);

for (let i = 9; i > 0; i--) {
    console.log(i);    
}


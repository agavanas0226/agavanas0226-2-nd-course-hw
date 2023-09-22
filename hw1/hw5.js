// Задание 1
function min(a, b) {
   
    if (a < b || a === b) {
      return console.log('a');
    } 

     else {
        return console.log('b');
    }
  };

  console.log(min(10, 8))
// Задание 2
let r = Number(prompt('Введите число'))

function even() {
    if (r % 2 === 0) {
        return ('Число четное')

    } else {
        return('Число нечетное')
        
    }
}

console.log(even())

// Задание 3.1

function nameQua(){
    let numQua = prompt("Введите число");
    
    if(!isNaN(numQua)){
        console.log(`${numQua} в квадрате равняется ${numQua ** 2}`);
    }

    else {
        console.log("Переданный параметр не является числом");
    }
}

nameQua()
// Задание 3.2
function nameQua1(){
    let numQua1 = prompt("Введите число");
    
    if(!isNaN(numQua1)){
        return (`${numQua1 ** 2}`);
    }

    else {
        return("Переданный параметр не является числом");
    }
}
console.log(nameQua1())
// Задание 4
function printMessage(){
const age = prompt("Сколько вам лет?");
if (age < 0) {
    console.log("Вы ввели неправильное значение!");
}
else if (age < 12 && 0 < age) {
        console.log("Привет, друг!");
} 

else {
        console.log("Добро пожаловать!");
}
}
printMessage();
// Задание 5
function twoNumbers(c, d) {
    if (isNaN(c) || isNaN(d)) {
      return ('Одно или оба значения не являются числом');
    } 
    else {
      return c * d;
    }
  }
  console.log(twoNumbers(4, 15))
// Задание 6
function nameNum(){
    let numCube = prompt("Введите число");
    if(!isNaN(numCube)){
        return (`${numCube} в кубе равняется ${numCube ** 3}`);
    }

    else {
        return ("Переданный параметр не является числом");
    }
}
console.log(nameNum())
// Задание 7
const circle1 = {
    radius: 2,
    getArea() {
        console.log(`${circle1.radius ** 2 * 3.14}`);
    },

    getPerimetr(){
        console.log(`${circle1.radius * 2 * 3.14}`); 
    }

}

circle1.getArea();
circle1.getPerimetr();

const circle2 = {
    radius: 10,
    getArea() {
        console.log(`${circle2.radius ** 2 * 3.14}`);
    },

    getPerimetr(){
        console.log(`${circle2.radius * 2 * 3.14}`); 
    }
}

circle2.getArea();
circle2.getPerimetr();
// Задание 8

const showTextButton = () => {
    let monthNumber= Number(prompt('Введите число от 1 до 12'));

    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        alert('Зима');
    } 

    else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        alert('Весна');
    } 
    
    else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        alert('Лето');
    } 
    
    else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        alert('Осень');
    } 
    
    else {
        alert('Введенное значение некорректно');
    }
}


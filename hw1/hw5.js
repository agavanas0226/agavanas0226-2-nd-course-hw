// Задание 1
let a = 8;
let b = 4;
function min(a, b) {
   
    if (a < b) {
      return console.log('a');
    } 
    
    else if (a == b){
        return console.log('b');
    }

     else {
        return console.log('b');
    }
  };

  min()
// Задание 2
let r = Number(prompt('Введите число'))

function even() {
    if (r % 2 === 0) {
        return alert('Число четное')

    } else {
        return alert('Число нечетное')
        
    }
}

even()

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
        return console.log(`${numQua1 ** 2}`);
    }

    else {
        return console.log("Переданный параметр не является числом");
    }
}
nameQua1()
// Задание 4
let age = prompt("Сколько вам лет?");

if (age < 12) {
    function printMessage(){
        console.log("Привет, друг!");
    }
}

else if (age < 0) {
    function printMessage() {
        console.log("Вы ввели неправильное значение!");
    }
}

else {
    function printMessage(){
        console.log("Добро пожаловать!");
    }
}

printMessage();
// Задание 5
function twoNumbers(c, d) {
    if (isNaN(c) || isNaN(d)) {
      return console.log('Одно или оба значения не являются числом');
    } 
    else {
      return console.log('c * d');
    }
  }
  
  twoNumbers()
// Задание 6
function nameNum(){
    let numCube = prompt("Введите число");
    if(!isNaN(numCube)){
        return console.log(`${numCube} в кубе равняется ${numCube ** 3}`);
    }

    else {
        return console.log("Переданный параметр не является числом");
    }
}
nameNum()
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


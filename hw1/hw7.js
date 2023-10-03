// Задание 1

// Задание 2
const searchStart = ['молоко', 'корова','кошка','колено', 'валенок'];
const search = 'ко';
searchStart.forEach((searchStart) => {
    if (searchStart.toUpperCase().startsWith(search.toUpperCase())) {
		console.log(searchStart);}
});
// Задание 3
let x = 32.58884;
console.log (Math.floor(x))
console.log (Math.ceil(x))
console.log (Math.round(x))
// Задание 4
let q = 52;
w = 53;
e = 49;
r = 77; 
t = 21;
y = 32;
console.log(Math.min(q,w,e,r,t,y));
console.log(Math.max(q,w,e,r,t,y));
// Задание 5
function RandomM() {
  let randomNumber = Math.floor(Math.random()*10 ) + 1;
  console.log(randomNumber)

}
RandomM()
// Задание 6
const consoleRandomInt = (min, max) => { 
 let rand = min + Math.random() * (max + 1 - min); 
  return Math.floor(rand); 
} 
 
const getRandomArrNumbers = (userNumber) => { 
 let array = []; 
 for (let i = 0; array.length < Math.floor((userNumber / 2)); i++) { 
  array.push(consoleRandomInt(0, userNumber)); 
 } 
 console.log(array); 
} 
 
getRandomArrNumbers(12);
// Задание 7
function getRandomInt (Min, max){
  if (Min > max || Min === max) {
    throw new Error('Неправильно задан диапазон чисел.');
  }
    const difference = max - Min;
    const randomNumber = Math.random() * (difference + 1);
    const result = Math.floor(randomNumber);
    return result + Min;
}
getRandomInt (Min, max)

// Задание 8
let myDay = new Date();
myDay = myDay.toDateString();
console.log(myDay);

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание 10
function convertDate(date) {
  const days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
  let fullDate = date.getDate() + " " + date.toLocaleString("DEFAULT", { month: "short"}) + " " + date.getFullYear() + " - это " + days[date.getDay()];
  let fullTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return `Дата: ${fullDate}.\nВремя:${fullTime}`;
}
const todayDate = new Date();
console.log(convertDate(todayDate));
// Задание 11
function gameStart (){
  let gameArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  gameArr.sort();
  alert(gameArr);
  questionFirst = prompt('Чему равнялся первый элемент массива?');
  questionLast = prompt('Чему равнялся последний элемент массива?');
  if (gameArr[0].toLowerCase() === questionFirst && gameArr[0].toLowerCase() === questionLast) {
    alert('Поздравляем! Вы победили');
  } else if (gameArr[0].toLocaleLowerCase() !== 0 ){
    alert('Всё неправильно');
  } else {
    alert('Вы были близки к победе');
  }
}
gameStart()
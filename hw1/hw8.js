//задание 1
const peopleOne = [
    {name : 'Глеб',
    age: 29
    },
    {name : 'Анна',
    age: 17
    },
    {name : 'Олег', 
    age: 7 
    },
    {name : 'Оксана',
    age: 47 
    }   
];
function  compareAge(a, b) {
    return a.age - b.age;
}

peopleOne.sort(compareAge);
console.log(peopleOne.sort( compareAge));
//задание2
function isPositive(Number) {
    return Number > 0;
}
function isMale(person) {
    return person.gender == 'мужчина';
}
function filter(arr, callback) {
    const filteredArray = [];
    for (const item of arr) {
        if (callback(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray
}
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
const people = [
    { name: 'Глеб', gender: "мужчина" },
    {name : 'Анна', gender: 'female' },
    { name: 'Олег', gender: "мужчина" },
    {name : 'Оксана', gender: 'female' }
];
console.log(filter(people, isMale));
// Задание3
function printCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate);
}
let secondsPassed = 0;
const interval = 3000; // Интервал в миллисекундах (3 секунды)
const totalTime = 30000; // Общее время выполнения в миллисекундах (30 секунд)
const timerID = setInterval(function () {
    printCurrentDate();
    secondsPassed += interval / 1000; // Увеличиваем счетчик секунд
    if (secondsPassed >= totalTime / 1000) {
        clearInterval(timerID); // Останавливаем интервал после 30 секунд
        console.log("30 секунд прошло");
    }
}, interval);
// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
});
// задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000)
}
function SayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => SayHi('Глеб')); 

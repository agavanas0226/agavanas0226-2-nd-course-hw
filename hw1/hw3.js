// Задание 1
let password = 'пароль';
let pas = prompt('Введите пароль');
if (pas === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
};
// Задание 2
let c = Number(prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно') 
};
// Задание 3
let d = 20;
let e = 102;
if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
};
// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже
alert(Number(a) + Number(b));
console.log(Number(a) + Number(b));
// Задание 5
    let monthNumber = prompt ('Введите номер месяца');
        switch (monthNumber) {
        case '1': case '2': case '12': case 'первый': case 'Первый': case 'второй': case 'Второй': case 'двенадцатый': case 'Двенадцатый':
            console.log('Зима');
            break;
        case '3': case '4': case '5': case 'третий': case 'Третий': case 'четвертый': case 'Четвертый': case 'пятый': case 'Пятый':
            console.log ('Весна');
            break;
        case '6': case '7': case '8': case 'шестой': case 'Шестой': case 'седьмой': case 'Седьмой': case 'восьмой': case 'Восьмой':
            console.log ('Лето');
            break;
        case '9': case '10': case '11': case 'девятый': case 'Девятый': case 'десятый': case 'Десятый': case 'одиннадцатый': case 'Одиннадцатый':
            console.log ('Осень');
            break;
        default:
            console.log('Такого месяца не существует');
            break;
}



// Задание 1
let i = 0;
while (i < 2){
    console.log ("Привет");
    i++;
}
// Задание 2
let k = 1;
while (k <= 5){
    console.log (k);
    k++;
    break;
}
// Задание 3
let m = 7;
while (m <= 22) {
    console.log (m);
    m++ ;
    break;
}
// Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
};
for(let money in obj) {
    console.log (`${money} - зарплата ${obj[money]} долларов`);
};
// Задание 5
for (let n = 1000, lot = 0; n > 50; lot++) {
    n /= 2;
    console.log(n);
    console.log(lot);
};
// Задание 6
let d = 6;
while( d <=31, d++) {
    d += 6;
    console.log(`Сегодня пятница, ${d}-е число. Необходимо подготовить отчет.` );
    break;
}
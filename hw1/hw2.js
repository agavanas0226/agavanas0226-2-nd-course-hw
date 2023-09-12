
let n = 20;
alert (n);
const i = 2007;
alert(i);
const j = 'Бренданом Айком';
alert(j);
let d = 10;
let e = 2;
alert (d+e);
alert(d-e);
alert (d*e);
alert (d/e);
let w = 2;
let s = 5;
let result = w**s;
alert(result);
let a = 9;
let b = 2;
alert(a%b);
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);
let age = prompt("Сколько вам лет?");
alert(age);
const user = {
    name: 'Анастасия',
    age: 21,
    isAdmin:true,
};
user[`city of residence`]=true;
alert(user.name);
alert(user.age);
alert(user.isAdmin);
alert([`city of residence`]);
user.age=50;
alert(user.age);
delete user[`city of residence`];
let info = prompt("Как вас зовут?");
alert(`Привет, ${info}!`);
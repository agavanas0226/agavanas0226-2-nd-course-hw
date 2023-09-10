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
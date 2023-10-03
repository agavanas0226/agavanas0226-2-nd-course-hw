// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}
// Задание 2
let find = [1, 5, 4, 10, 0, 3];
find = find.indexOf(4);
console.log(find);
// Задание 3
let jhoJho = [1,'', 3,'', 5,'', 10,'', 20];
jhoJho = jhoJho.join('');
console.log(jhoJho);
// Задание 4
const Arr = [];

for (let p = 0; p < 3; p++) {

     Arr[p] = [];

       for (let j = 1; j < 4; j++) {

         Arr[p].push(1);

       }

     }

console.log(Arr);
// Задание 5
const fifth = [1, 1, 1];
console.log (fifth);
fifth.push(2, 2, 2);
console.log(fifth);
// Задание 6
let sea = [9, 8, 7, 'a', 6, 5];
sea = sea.sort().splice(0,5);

console.log(sea);
// Задание 7
let gameNumbers = [9, 8, 7, 6, 5];
let question = Number(prompt('Угадайте число'));
(gameNumbers.includes(question)) ? alert('Угадал') : alert('Неугадал');

// Задание 8
let alphabet = 'abcdef';
let reverse = Array.from(alphabet).reverse().join();
console.log(reverse);
// Задание 9
let wek = [
    [1, 2, 3,],
    [4, 5, 6]
];
console.log(wek.flat(1));

// Задание 10
const numBers = [10,8,2,7,6,1,4,9,3,5]; 
for (let i = 0; i < numBers.length - 1; i++) { 
  const sum = numBers[i] + numBers[i + 1]; 
  console.log("Сумма", numBers[i], "и", numBers[i + 1], "равна", sum); 
}
// Задание 11
let panck = [1, 15, 26, 100];
let double = panck.map((num) =>{
    return num * num 
  })

console.log(double)
// Задание 12
function countOfWordsOf5Letters(){
  let  getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'] ; 

  return getLengthWords.map(({length}) => length);
  }
console.log(countOfWordsOf5Letters()) 
// Задание 13
  const arr = [-1, 0, 5, -10, 56];
  function filterPositive(arr){
    let negatives = [];
    for (let m = 0; m < arr.length; m++) {
      if (arr[m] < 0) {
          negatives.push(arr[m]);
      }
  }
  return negatives;
  }
console.log(filterPositive(arr))

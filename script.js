// var nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);

// var arr = [200, 100, 300];
// arr.splice(2, 0, 10000);
// console.log(arr);

// var arr = [100, 200, 300];
// console.log(typeof(arr));

// var a = 2.22;
// console.log(typeof(a));

// var a = 10;
// var b = 2;
// for(var i = 1; i < 5; i+=2) {
//   a += 1;
// }
// console.log(a+b);

// var d = {
//   'height' : 100,
//   'weight' : 78,
//   'weight' : 84,
//   'temperature' : 36,
//   'eyesight' : 1
// }
// console.log(d['weight']);

// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';
// var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
// console.log(result);
// var today = second.concat('일 입니다.');
// console.log(today);

// for (var i = 1; i <= 5; i++) {
//   console.log('*'.repeat(i));
// }
// console.log('\n');

// for (var i = 5; i > 0; i--) {
//   console.log('*'.repeat(i));
// }
// console.log('\n');

// for (var i = 0; i < 11; i += 2) {
//   console.log('*'.repeat(i));
// }
// console.log('\n');

// for (var i = 10; i > 0; i -= 2) {
//   console.log('*'.repeat(i));
// }
// console.log('\n');

// for (var i = 1; i <= 16; i *= 2) {
//   console.log('*'.repeat(i));
// }
// console.log('\n');

// for (var i = 1; i <= 5; i++) {
//   console.log(' '.repeat(5 - i) + '*'.repeat(i));
// }
// console.log('\n');

// for (var i = 5; i >= 1; i--) {
//   console.log(' '.repeat(5 - i) + '*'.repeat(i));
// }
// console.log('\n');

// for (var i = 1; i <= 9; i += 2) {
//   console.log(' '.repeat((9 - i) / 2) + '*'.repeat(i));
// }
// console.log('\n');

// for (var i = 9; i >= 1; i -= 2 ) {
//   console.log(' '.repeat((9 - i) / 2) + '*'.repeat(i));
// }
// console.log('\n');

// let s = 0;
// for (let i = 1; i < 101; i++) {
//   s += i;
// }
// console.log(s);

// class Wizard {
//   constructor (health, mana, armor) {
//     this.health = health;
//     this.mana = mana;
//     this.armor = armor;
//   }

//   attack() {
//     return console.log('파이어볼');
//   }
// }
// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// const question = prompt('몇 번째 행성인가요?');
// console.log(planets[question - 1]);

// const number = prompt('숫자를 입력하세요.');
// if ( number % 3 === 0 ) {
//   console.log('짝');
// } else {
//   console.log(number);
// }

// const myName = prompt('이름을 입력해 주세요.');
// console.log(`안녕하세요. 저는 ${myName}입니다.`);

// const reverse = prompt('이름을 입력해 주세요.');
// const result = reverse.split("").reverse().join("");
// console.log(result);

// const yourStature = prompt('당신의 키를 입력해 주세요.');
// if ( yourStature >= 150 ) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// const score = prompt("점수를 입력해주세요.").split(" ");
// let sum = 0;
// for (let i = 0; i < 3; i++) {
//   sum += parseInt(score[i]);
// }
// const average = sum / score.length;
// console.log(average);

// const score = [20, 30, 40];
// const average = score.reduce( (a, b) => a + b, 0) / score.length;
// console.log(average);

// const number = prompt('두개의 숫자를 입력해 주세요.').split(" ");
// console.log(Math.pow(parseInt(number[0], 10), parseInt(number[1], 10)));

// const n = prompt('두개의 숫자를 입력해 주세요.').split(" ");
// console.log(parseInt(n[0] / n[1], 10) + " " + parseInt(n[0] % n[1], 10));

// const text = prompt('아무거나 입력하세요.');
// console.log(text.toUpperCase());

// const num = prompt('반지름을 입력하세요.');
// function circle(n) {
//   const result = n * n * 3.14;
//   return result;
// }
// console.log(circle(num));

// const planets = {
//   수성 : 'Mercury',
//   금성 : 'Venus',
//   지구 : 'Earth',
//   화성 : 'Mars',
//   목성 : 'Jupiter',
//   토성 : 'Saturn',
//   천왕성 : 'Uranus',
//   해왕성 : 'Neptune',
// };
// const name = prompt('행성의 이름을 입력하세요.');
// console.log(planets[name]);

// const keys = prompt('이름을 입력하세요.').split(" ");
// const values = prompt('점수를 입력하세요.').split(" ");
// const obj = {};
// for (let i = 0; i < keys.length; i++) {
//   obj[keys[i]] = parseInt(values[i], 10);
// }
// console.log(obj);

// const text = prompt('문자를 입력하세요.');
// for (let i = 0; i < text.length - 1; i++) {
//   console.log(text[i], text[i + 1]);
// }

// const text = prompt('알파벳을 입력하세요.');
// if ( text === text.toUpperCase() ) {
//   console.log('Yes');
// } else {
//   console.log('NO');
// }

// const sentence = prompt('문장을 입력하세요');
// const word = prompt('찾을 단어를 입력하세요.');
// console.log(sentence.indexOf(word));

// const text = prompt('문장을 입력하세요.');
// console.log(text.split(" ").length);

// const text = prompt('숫자를 입력하세요.').split("").reverse();
// let result = '';
// for (let i = 0; i < text.length; i++) {
//   result += text[i];
// }
// console.log(result);

const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort()
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}


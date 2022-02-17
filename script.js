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

const yourStature = prompt('당신의 키를 입력해 주세요.');
if ( yourStature >= 150 ) {
  console.log('YES');
} else {
  console.log('NO');
}
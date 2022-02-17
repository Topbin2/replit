var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

var arr = [100, 200, 300];
console.log(typeof(arr));

var a = 2.22;
console.log(typeof(a));

var a = 10;
var b = 2;
for(var i = 1; i < 5; i+=2) {
  a += 1;
}
console.log(a+b);

var d = {
  'height' : 100,
  'weight' : 78,
  'weight' : 84,
  'temperature' : 36,
  'eyesight' : 1
}
console.log(d['weight']);

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
console.log(result);
var today = second.concat('일 입니다.');
console.log(today);

for ( var i = 1; i <= 5; i++) {
  console.log('*'.repeat(i));
}
console.log('\n');

for ( var i = 5; i > 0; i--) {
  console.log('*'.repeat(i));
}
console.log('\n');

for ( var i = 0; i < 11; i += 2) {
  console.log('*'.repeat(i));
}
console.log('\n');

for ( var i = 10; i > 0; i -= 2) {
  console.log('*'.repeat(i));
}
console.log('\n');

for ( var i = 1; i <= 16; i *= 2) {
  console.log('*'.repeat(i));
}
console.log('\n');

for ( var i = 1; i <= 5; i++) {
  console.log(' '.repeat(5 - i) + '*'.repeat(i));
}
console.log('\n');

for ( var i = 5; i >= 1; i--) {
  console.log(' '.repeat(5 - i) + '*'.repeat(i));
}
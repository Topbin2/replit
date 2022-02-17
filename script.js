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
// class UserStorage {
//   loginUser (id, password, onSuccess, onError) {
//     setTimeout( ()=> {
//       if (
//         (id === 'ellie' && password === 'dream') ||
//         (id === 'coder' && password === 'academy')
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error('not found'));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout( ()=> {
//       if (user === 'ellie') {
//         onSuccess({ name: 'ellie', role: 'admin'});
//       } else {
//         onError(new Error('no access'));
//       }
//     }, 1000);   
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');

// userStorage.loginUser(
//   id,
//   password,
//   user => {
//     userStorage.getRoles(
//       user,
//       userWithRole => {
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// );



// class UserStorage {
//   loginUser (id, password) {
//     return new Promise ((resolve, reject) => {
//       setTimeout(()=> {
//       if (
//           (id === 'ellie' && password === 'dream') ||
//           (id === 'coder' && password === 'academy')
//         ) {
//           resolve(id);
//         } else {
//           reject(new Error('not found'));
//         }
//       }, 2000);
//     });
//   }

//   getRoles (user) {
//     return new Promise ((resolve, reject) => {
//       setTimeout( ()=> {
//       if (user === 'ellie') {
//         resolve({ name: 'ellie', role: 'admin'});
//       } else {
//         reject(new Error('no access'));
//       }
//     }, 1000);  
//     });
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log)

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// const person = {
//   name: 'Max'
// };

// const newPerson = {
//   ...person,
//   age: 29
// };

// console.log(newPerson);

// const numbers = [1, 2, 3];
// [num1, ,num3] = numbers;
// console.log(num1, num3);

// const person = {
//   name: 'max'
// };

// const newPerson = {
//   ...person
// };
// person.name = 'sangbin';
// console.log(newPerson);

// const array = [1, 2, 3, 4, 5];
// const newArray = array.map( num => {
//   return num + 1;
// })
// console.log(array);
// console.log(newArray);

// const array = [1, 200, 150, 400, 350];
// const found = array.findIndex( num => {
//   return num > 150;
// });
// console.log(found);

// const array = [1, 2, 3, 4, 5];
// const found = array.findIndex( num => {
//   return num > 3;
// });
// console.log(found);

// const array = [200, 100, 500, 300, 400];
// const newArray = array.filter( num => {
//   return num > 300;
// });
// console.log(newArray);

// const array = [1, 2, 3, 4, 5];
// const newArray = array.reduce((acc, cur) => {
//   return acc + cur;
// },0);
// console.log(newArray);

// const array = [1, 2, 3];
// const newArray = array.concat(100, 200, 300);
// console.log(array);

const array = ['A', 'B', 'C', 'D', 'E'];
const newArray = array.slice(2);
console.log(array);
console.log(newArray);

// const array = ['개', '고양이', '사자', '호랑이', '공룡'];
// const newArray = array.splice(2);
// console.log(array);
// console.log(newArray);
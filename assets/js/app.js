// let a = 1
// function b () {
// let c = 2

// }
// console.log(a)
// console.log(c)

// let num1 = 11;
// let num2 = 22;
// let result = num1 + num2;
// console.log(result);

// let name = 'сергей';
// let name2 = name;
// console.log(name2);

// let name;
// let admin;
//  name = 'Джон';
//  admin = name;

// console.log(admin);

// let nam = prompt('Введите своё имя')
// let age = '45'
// let nam1 = Number(age)
// alert( nam1)
// console.log(typeof nam);
// confirm(`Меня зовут ${nam} и мне ${age} лет`);

// let str = '123';
// console.log(typeof str);
// let number = Number(str);
// console.log( typeof number);

// let num = '0';
// let bool = Boolean(num);
// console.log( typeof bool);

// let h = 1;
// h = -h
// console.log(h);

// console.log(16 % 5);

// console.log('три' + ' ' + 'пять');

// console.log('7' + 7);

// let f = '8'
// let u = +f
// console.log(typeof u);

// let a = +prompt('Первое число' , 5);
// let b = +prompt('Второе число' , 5);
// alert(a + b);

// alert(5==='5');

// let t = prompt('Введите число');
// if(t === ''){
//     alert('да');
// } else{
//     alert('нет')
// }

// let year = 1983;
// if(year > 1983){
//     alert('Поздно')
// }else if(year < 1983){
//     alert('Рано')
// }else{
//     alert('Верно')
// }

// let age = 17;
// let message = (age >= 18) ? 'Доступ разрешён' : 'Доступ запрещён';
// alert(message)
// let res;
// if (a + b < 4 ) {
//     res = 'мало';
// } else {
//     res = 'mnogo';
// }

// res = (a + b < 4) ? 'Мало' : 'mnogo'

// let numb = 10;
// if (numb > 10){
// alert('Больше 10');
// }else{
//     alert('Не верно')
// }

// let numb = Number(prompt('Введите число'));
// if (numb > 10){
//     alert('Больше 10')
// }else{
//     alert('Меньше 10')
// };

// let numb = Number(prompt('Введите число'));
// if (numb > 0){
//     alert('Положительное число')
// }else if (numb < 0){
//     alert('Отрицательное число')
// }

// let numb = Number(prompt("Введите число"));
// if (numb % 2 === 0) {
//   alert("Число чётное");
// } else {
//   alert("Число не чётное");
// }

// alert(true || true)
// alert(true || false)
// alert(false || false)
// if (1 || 0) {
//   alert("s");
// }

// let hour = 15;
// if (hour < 10 || hour > 19) {
//   alert("Офис закрыт");
// }

// alert(true && true)
// alert(true && false)
// alert(false && false)
// alert( !true)

// let login = prompt("Введите логин");
// if (login === "Админ") {
//   let password = prompt("Введите пароль");
//   if (password === "1111") {
//     alert("Здравствуйте");
//   } else if (password === "" || password === null) {
//     alert("Отменено");
//   }else{
//     alert('Неверный пароль')
//   }
// } else if (login === "" || login === null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

// let numb = 12;
// if (numb % 2 === 0 && numb % 3 === 0){
// alert('Выполнено')
// }else {
//  alert('Не выполнено')
// }

// let numb = 10
// while(numb){
// console.log(numb)
// numb--
// }
// let numb = 0;
// for(;numb<100;numb+=2){
//     console.log(numb);
// }
// console.log(numb);

// let num = 1
// while(num<11){
//     console.log(num)
//     num++
// }

// for(let num = 1;num<11;num++){
//     console.log(num);
// }

// for(let num = 2;num<11;num++)
//     if(num % 2 === 0 )
//         console.log(num)

// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         continue
//     }
//  console.log(`number ${i}!`)
// }

// let i = 0
// while(i < 3){
// alert(`number ${i}!`)
// i++
// }

// let sum = 5
// console.log(!sum);
// while(true){
//     let  num = +prompt('Введите число')
//     if(!num){
//         break
//     }
//     sum = sum + num
// }
// console.log(`Сумма: ${sum}`);

// let a = 2 + 5;

// switch (a) {
//   case 3:
//     alert("Маловато");
//     break;
//   case 4:
//     alert("В точку!");
//     break;
//   case 5:
//     alert("Перебор");
//     break;
//   default:
//     alert("Нет таких значений");
// }
// let num = 7
// function showMes(){
//   console.log(num);

// }
// showMes()

// function showMes(name = 'Фёдр', age = 19){
//     return `Меня зовут ${name} и мне ${age} лет`;
// }
//   console.log(showMes())

// function sum(a,b){
//     let result = a + b
//     return result
// }
// console.log(sum(5,17));

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }
// let age = prompt("Сколько вам лет");
// if (checkAge(age)) {
//   alert("Доступ получен");
// } else {
//   alert("Доступ закрыт");
// }

// let header = document.querySelector('.header')
// console.log(header);

// function getMinNum(num1,num2){
//     if(num1 < num2){
//         return num1
//     }else{
//         return num2
//     }
// }
// console.log(getMinNum (2,5));

// let a = new Date()
// let b = a.getFullYear()
// console.log(b);

// function getAge(year){
//     let currentDate = new Date()
//     let currenYear = currentDate.getFullYear()
//     let age = currenYear -  year
//     return age
// }
// let result = getAge(1991)
// console.log(result);
// repeatString('Привет', 7 )
// function repeatString(string, num) {
//   for (let i = 0; i < num; i++) {
//     console.log(string);
//   }
// }

// let hello = function(){
//     console.log('hello');
// }
// hello()

// let hello = () => console.log('Hello');
// hello()

// let sum = (a,b) => console.log(a + b);
// sum(5,8)

// let sum = (a,b) => {
//     let result = a + b
//     return result
// }
// console.log(sum(8,9));

// let nums = [1,2,3,4,5]
// console.log(nums.length);
// console.log(nums[10]);
// nums[3] = 1
// console.log(nums[nums.length-1]);
// console.log(nums.at(-2));

// let nums = [1,2,3,4,5]
// nums.push('Мы')
// nums.unshift('Вы')
// console.log(nums.pop());
// nums.shift()
// console.log(nums);

// let arr = ["Яблоко", "Апельсин", "Груша"];
// for(let i = 0; i < arr.length; i++){
// console.log(arr[i]);
// }
// for(let fruit of arr){
//     console.log(fruit);
// }

// for(let fruit in arr){
//     console.log(arr[fruit]);
// }

// function summal(a, b) {
//   let result = a + b;
//   return result;
// }
// console.log(summal(14, 19));

// function calculateRectangleArea(width,height){
//     let s = width * height
//     return s
// }
// console.log(calculateRectangleArea(7,9));

// function getMaxNum(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(getMaxNum(7, 12));

// let result = function(a){
//     return a * a
// }
// console.log(result(8));

// let m = [5, 6, 7, 8, 9];
// m.splice(1,3)
// m.splice(0,3,'снег', 3)
// let ter = m.splice(1,2)
// m.splice(3,0,'перейти', 14)
// let tyu = m.slice(2)
// console.log(tyu);
// console.log(m);

// let far = [7,9]
// let hjk = [19,68]
// console.log(far.concat(hjk,[76,50]));
// let oiu = [12, 16, 77, 32, 45];
// let fruit = ['апельсин','Мандарин', 'Киви']
// fruit.forEach((elem, index, arr) => {
// console.log(`У элемента ${elem} индекс ${index} в массиве ${arr}`);
// })

// let arr1 = [1,2,3]
// let arr2 = [3,4,5]
// let arr3 = [5,6,7]
// console.log(arr1.concat(arr2,arr3))

// let arr = [1,2,3,4,5]
// let arr1 = [6,7,8,9,10]
// let arr3 = arr.concat(arr1)
// console.log(arr3);

// function wer (arr,length){
//     let result = []
//     arr.forEach(element => {
//         if(element.length === length){
//             result.push(element)
//         }
//     });
//     return result
// }
// let arr = ["apple", "banana", "orange", "pear", "grape"]
// console.log(wer(arr,5));

// arr.splice(2,1)
// console.log(arr)
// arr.splice(1,3)
// console.log(arr);
// arr.splice(2,0,3,'ggg')
// console.log(arr);
// arr.shift(2,3)
// console.log(arr);
// let a = arr.slice(2,5)
// console.log(a);
// arr.forEach((item) => console.log(item))

// let arr = [1,2,3,4,5,6,7]
// console.log(arr.indexOf(5,5));
// console.log(arr.includes(3,5));

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
// //   let user = users.find((elem) => elem.name  === 'Вася')
//   let user = users.filter((elem) => elem.id < 3)
//   console.log(user);

// let word = ['метель','сосна', 'берег']
//  let t = word.map(elem => elem.length)
//  console.log(t);
//  console.log(word);

// let red = [1,2,3,4,5,6,7,8,9]
// let gin = red.map(function(elem) {
//     return elem * 2
// })
// let not = red.map(elem => elem * 2)
// console.log(not);

// let gin = 'Heloo'
// console.log([...gin]);
// [...gin].forEach(elem => console.log(elem))

// let num = [1,2,3,4,5]
// num.forEach (elem => console.log(elem));

// let num = [1,2,3,4,5]
// num.forEach (elem => console.log(elem * 2));

// let num = [1,-2,3,-4,5]
// num.forEach((elem, index) => {
//     if(elem < 0){
//         num.splice(index,1)
//     }
// })
// console.log(num);

// function division() {
//   for (let num = 0; num < 11; num++) {
//     // console.log(num);
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   }
// }
// division()

// let arr = [10,20,30,40,50]
// let result = arr.reduce((sum,current) => sum + current )
// console.log(result);

/*let arr = [10,20,30,40,50]
arr.forEach((sum,current) => sum + current )
console.log(arr);*/

// let num = [1,2,3,4,5]
// console.log(num.reverse());

// let name = 'Саша,Вася,Женя'
// let arr = name.split(',')
// console.log(arr);
// for (const name of arr) {
//   console.log(`сообщение получат ${name}`);
// }

// let num = [1,2,3,4,5]
// let result = num.reduce((sum,current) => sum + current )
// console.log(result);

// let name = ["Арсений","Костя","Ваня"]
// let str = name.join(', ')
// console.log(str);

// function compare(a,b){
//     if(a > b) return 1;
//     if(a === b) return 0;
//     if(a < b) return -1;
// }
// let num = [1,2,15]
// console.log(num.sort(compare));

// const user = {
//     name: 'Коля',
//     age:  21,
//     hi: function(){
//         console.log('heloo');
//     }
// }
// user.hi()
// user.name = 'Федя'
// console.log(user.name);

// const user = {
//     name: {
//         firstName: 'Глеб',
//         lasstName: 'Сергеев'
//     },
//     nam: [1,2,3,4,5]
// }
// user.color = 'yellow'
// user.age = 22
// console.log(user.name.lasstName);

// console.log(user.nam);

// let numbers = [5, 12, 3, 15, 7, 20];
// numbers.forEach(element => {
//  if (element > 10) {

//   console.log(element);
//  }
// })

// let piople = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 20 },
//   { name: "Carol", age: 25 },
//   { name: "Dave", age: 28 },
// ]
//  let htu = piople.filter(elem => elem.age > 25)
// console.log(htu);

// let numbers = [5,12,3,15,7,20]
// let dg = numbers.find(elem => elem > 10)
// console.log(dg);

//4 задача
/*let fruits = ['apple','banana','orange']
fruits.forEach((elem.map) => {
    fruits.toUpperCase()
    console.log(fruits);
})*/

//5,6,7 сделать

//let numbers = [1,2,3,4,5]
// let result = numbers.map(elem => 'item ' + elem)
//console.log(result);

// let sentence = 'This is a simpie sentence'
//console.log(sentence.split (' '))

//let lettersArray = ['h','e','l','l','o',]
//console.log(lettersArray.join(''));

//  console.log(navigator.userAgent);
//  if(navigator.userAgent.includes('YaBrowser')){
//   console.log('браузер яндекс');
//  }
//  console.log(location.href);
//  location.href = 'https://doka.guide/js/includes/'

// let num = document.documentElement

// console.log(num);

// let ya = document.body
// console.log(ya);

//const ul = document.querySelector('ul')
//console.log(ul);

//const id = document.querySelector('#item')
//console.log(id);

//const li = document.querySelectorAll('.list-item')
//console.log(li[2]);

//const id = document.getElementById('item')
//console.log(id);

//const id = document.getElementById('item').innerHTML = 'ppp'
//console.log(id);

//
//const id = document.getElementById('item').textContent = 'ppp'
//console.log(id);

//const span = document.querySelector('#elem').innerHTML = 'span'
//console.log(span);

//const p = document.getElementById('elem2') => {texContend = ''

//}

/*let items = ['item 1', 'item 2','item 3']
const ul = document.createElement('ul')
items.forEach(element => {
 let li = document.createElement('li') 
 li.textContent = element
 ul.append(li)
});
document.body.append(ul)*/

const navList = document.querySelector('.nav-list');
const btnBurger = document.querySelector('.nav-burger');
btnBurger.addEventListener('click', function () {
  btnBurger.classList.toggle('active');
  navList.classList.toggle('active');
});
var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

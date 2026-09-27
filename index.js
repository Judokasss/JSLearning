// РАБОТАЕМ БРАТЬЯ!!!

/* ========================================================================== 1 */
/* user = {
    name: 'Alex',
    age: 23,
    isDream: true,
};

function isEmpty(obj) {

    for (let prop in obj) {
        return false;
    }

    return true;
}

console.log(isEmpty(user)); */

/* ========================================================================== 2 */
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function salariesEmloyed (objSalaries) {

    let sum = 0;

    for (let prop in objSalaries) {
        sum += objSalaries[prop];
    }

    return sum;
}

console.log(salariesEmloyed(salaries)); */

/* ========================================================================== 3 */

/* let menu = {
    width: 1200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    
    for (let prop in obj) {

        if(typeof (obj[prop]) === 'number') {
            obj[prop] *= 2; 
        }
    }

   
}
multiplyNumeric(menu);
console.log(menu); */

/* ========================================================================== 4 */

/* let calculator = {

    read() {
       this.a = +prompt('Введите 1-ое число', '');
       this.b = +prompt('Введите 2-ое число', '');
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator); */

/* ========================================================================== 5 */

/* let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep(); // показывает 1 затем 0 */

/* ========================================================================== 6 */

/* function Calculator() {

    this.read = function () {
       this.first = +prompt('Введите 1-ое значение', ''); 
       this.second = +prompt('Введите 2-ое значение', ''); 
    }

    this.sum = function () {
        return this.first + this.second;
    }

     this.mul = function () {
        return this.first * this.second;
    }
}

let calculator = new Calculator();

calculator.read();

console.log(calculator);
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

/* ========================================================================== 7 */

/* function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.number = +prompt('Введите значение для аккумулирования','');
        return this.value += this.number;
    }
}

let accumulator = new Accumulator(12);

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
console.log(accumulator); */

/* ========================================================================== 8 */

/* let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

alert( localSymbol.description ); // name */

/* ========================================================================== 9 */

/* function summator () {

    let num = +prompt('Введите число', '');
    let num1 = +prompt('Введите число', '');

    return  num + num1;
}

console.log(summator()); */

/* ========================================================================== 10 */

/* console.log(6.35 + 0.22)// потеря точности присутствует
console.log(1.35 + 0.22) // потеря точности отсутствует
console.log(6.35.toFixed(1));

alert( 6.35.toFixed(20) ); // 6.34999999999999964473
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4 */

/* ========================================================================== 11 */


/* function readNumber() {

    while(true) {
        let RequestingNumber = prompt('Введите число', '');

        if (RequestingNumber === '') {
            return null;
        } 

        if (isFinite(RequestingNumber)) {// возвр. тру если это число и не нан и беск.
            return +RequestingNumber;
        } 
    }
    
}
console.log(readNumber()); */

/* function readNumber() {
  while (true) {
    let input = prompt('Введите число', '');

    // Обработка отмены (null) и пустой строки
    if (input === null || input === '') {
      return null;
    }

    // Преобразуем в число
    let number = +input;

    // Проверяем, что это число и оно не NaN
    if (!isNaN(number)) {
      return number;
    }
  }
}

console.log(readNumber()); */

/* ========================================================================== 12 */

/* function random(min, max) {

    return min + (Math.random() * (max - min));
}

console.log(random(1, 5));
 */

/* ========================================================================== 13 */

/* function randomInteger(min, max) {
    
    return min + Math.floor((Math.random() * (max - min + 1)));
}

console.log(randomInteger(3, 4)); */

/* ========================================================================== 14 */

/* function ucFirst(str) {
    
    if(!str.trim()) return 'пустышка';

    return str = str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('алексюшка')); */

/* ========================================================================== 15 */

/* function checSpam(str) {   
    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('xxx') || lowerStr.includes('viagra') ) return true;
   
    return false;
}
 */

/* function checSpam(str) {   
    let lowerStr = str.toLowerCase();

    return (lowerStr.includes('xxx') || lowerStr.includes('viagra'));
}
console.log(checSpam('buy ViAgRA now'));
console.log(checSpam('free xxxxx'));
console.log(checSpam('innocent rabbit')); */

/* ========================================================================== 16 */

/* function truncate(str, maxlength) {
    let countSymbolInStr = str.length;

    if (countSymbolInStr > maxlength) {
        return str = `${str.slice(0, maxlength - 1)}…` ; // ставляет место для одного символа многоточия …
    }
    return str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate("Всем привет!", 20)); */

/* ========================================================================== 17 */

/* function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120')); */

/* ========================================================================== 18 */

/* function sumInput() {
    let arr = [];

    while(true) {
        let value = prompt('Введите числовое значение', '');

        if (!value || isNaN(value)) break;

        arr.push(+value);
    }

    let sumInArr = 0;
    
    for (let sum of arr) {
        sumInArr += sum;
    }

    return sumInArr;

}

console.log(sumInput()); */

/* ========================================================================== 19 */

/* function getMaxSubSum(arr) {
    let summator = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for(let j = i; j < arr.length; j++) {   
            sum  += arr[j];

            if (summator < sum) summator = sum;
            // summator = Math.max(summator, sum);
        }

    }

    return summator
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))
console.log(getMaxSubSum([1, -2, -3]))
console.log(getMaxSubSum([])) */

/* ========================================================================== 19 */

/* function camelize(str) {
    let arr = str.split('');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('-')) {
            arr.splice(i, 1)

            let upper = arr[i].toUpperCase();

            newArr.push(upper);

            continue;
        } 

        newArr.push(arr[i]);
   }

   return newArr.join('');
}

function camelize(str) {
  let parts = str.split('-');
  let result = parts[0]; // первое слово остаётся строчным

  for (let i = 1; i < parts.length; i++) {
    if (parts[i]) { // проверяем, что часть не пустая
      result += parts[i][0].toUpperCase() + parts[i].slice(1);
    }
  }

  return result;
}

function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition")); */

/* ========================================================================== 20 */

/* let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    let newArr = arr.filter((value) => value >= a && value <= b)

    return newArr;
}

console.log(filterRange(arr, 1, 4));
console.log(arr);
 */

/* ========================================================================== 21 */

/* let arr = [5, 2, 1, -10, 8];

function sorting(arr) {

    return arr.sort((a, b) => b - a);
}

console.log(sorting(arr)); */

/* ========================================================================== 22 */

/* let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);
 
console.log(sorted);
console.log(arr); */

/* ========================================================================== 23 */

/* function Calculator() {

    this.calculate = function (str) {
        let arr = str.split(' '); 
        console.log(arr);

        let a = arr[0];
        let b = arr[arr.length - 1];

        let operator = arr[1];

        switch (operator) {
            case '+':
                return (+a) + (+b);
            case '-':
                return (+a) - (+b);
            default:
                'Неудача';
        }
      
    }
}

let calc = new Calculator();

console.log(calc.calculate("12 - 6")); */

/* function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
} */

/* ========================================================================== 24 */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

console.log(users);

let names = users.map((value) => value.name);

console.log(names); */

/* ========================================================================== 25 */

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map((value) => {
    return {
        fullname: `${value.name} ${value.surname}`,
        id: value.id,
    }
})

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped);

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullname); */

/* ========================================================================== 26 */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge (arr) {
    return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arr));

console.log(arr); */

/* ========================================================================== 27 */

/* const arr = [1, 2, 3]; 

function shuffle (arr) {
    const newArr = [];

    while (arr.length > 0) {
        let position =  Math.floor(Math.random() * arr.length);

        newArr.push(arr[position]);
        arr.splice(position, 1);
    }

    return newArr;
} 

// console.log (shuffle(arr));

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  const shuffled = shuffle(array);      // <-- используем возвращаемый массив
  count[shuffled.join('')]++;           // <-- считаем по нему
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`); // alert в Node.js не работает, лучше console.log
}
// console.log(arr) */

/* ========================================================================== 28 */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
 
function getAverageAge(users) {
    let avg = users.reduce((accumulator, value) => {
        return (accumulator + value.age);
    },0)

    return avg / users.length;
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


console.log(getAverageAge(arr)); */

/* ========================================================================== 29 */

/* let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O", "penis?????"
];

function unique(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (newArr.includes(arr[j])) continue;
            newArr.push(arr[j]);
        }
    } 

    return newArr;
}

function unique(arr) {
    let result = [];

    for (let value of arr) {
        if (!result.includes(value)) result.push(value);
    }

    return result;
}

console.log(unique(strings)); */

/* ========================================================================== 30 */

/* let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    let res = arr.reduce((acc, value) => {

        acc[value.id] = value; // объект со свойсвтом ID = объекту текущему

        return acc;
        
    }, {})

    return res;
}

let usersById = groupById(users);

console.log(usersById);
 */

/* ========================================================================== 31 */

/* function matrix() {
    let counter = +prompt('Введите число для матрицы сучка!');
    let str = '';

    if (counter > 128) return 'Ты ебанутый повиснет у тебя все!';

    for (let i = counter; i > 0; i--) {

        for (let j = 0; j < i; j++) {

            if (j === 0 || j === i - 1 || i === counter) { 
                str += '🍇';
            } else {
                str += '🍌';
            }

        }

        str += '\n';
    }

    return str;
}

console.log(matrix()); */


/* ========================================================================== 32 */

/* const arr = [1, 34, 3, 123, 32, -1, 0, -111];

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;

}

console.log(bubbleSort(arr)); */

/* ========================================================================== 33 */

/* function matrix() {

    let counter = +prompt('Введите число матрицы!');
    let str = '';

    if (counter > 50) return 'Не делай больше 50!';

    for(let i = counter; i > 0; i--) {

        for(let j = 1; j <= i; j++) {
            if (i === counter || j === 0 || j === i) {
                str += '🍁';
            } else {
                str += '🍎';
            }
            
        }

        str += '\n';
    }

    return str;

}

console.log(matrix()); */

/* ========================================================================== 34 */

/* let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
   return arr.reduce((acc, value)  => {

        acc[value.id] = value;
        
        return acc;
    }, {})
}

console.log(usersById); */

/* ========================================================================== 35 */


/* let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
let obj = {};

for (let user of users) {
   obj[user.id] = user;
}

console.log(obj); */

/* ========================================================================== 36 */


/* var name = 'Sergei';//устаревшее,возможно изменить
const lastName = 'Evtushenko';//менять нельзя
let age = 41;//менять можно
console.log(name); */
/* 
function getData() { 
	let data = document.getElementById('name').value;
	let out = document.getElementById('dataSpan');
	console.log(data);
	out.innerHTML = data;
} */
//!Math
/* console.log(Math.E);

console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(5,3));//первое число это то что возводим в степень втрое степень
console.log(Math.abs(-42));//модуль числа
console.log(Math.max(42,12,55,88,64,32));//выдает максимальное число
console.log(Math.min(42, 12, 55, 88, 64, 32));//выдает минимальное  число
console.log(Math.floor(4.9));//округление в меньшую сторону
console.log(Math.ceil(2.1));//округление в большую сторону
console.log(Math.round(2.4));//округление по правилам математики
console.log(Math.trunc(2.9));//возвращает целую чать числа путем удаления того что после запятой
console.log(Math.random());//выдает рандомное число до единицы
function getRandom(max,min) {
	return Math.round(Math.random() * (max - min) + min);
 }
console.log(getRandom(0,8)); */
/*------------------------------------------------- */

//!Строки
/* 
const output = 'привет фак ю' + name + 'my age' + age; */
/* const output = `Hello my name${name} & my age ${age} years`;//esma script6 сораняются все пробелы и символы
console.log(output);
const jutput1 = `Hello my name${name} & my age ${age < 30 ? 'A' : 'B'} years`;//можно даже использоать тернарные выражения
console.log(jutput1); */
/* console.log(name.length);//длинна строки
console.log(name.toUpperCase());//приводит все символы строки к верхнему регистру //!учитывать регистр строки
console.log(name.toLowerCase());//приводит все символы строки к нижнему регистру //!учитывать регистр строки
console.log(name.charAt(2));//выдает на что стоит на этой позиции начиная с 0 //!учитывать регистр строки
console.log(name.indexOf('gei'));//выдает индекс первого вхождения набора указанных символов в обратном случае выводит -1 //!учитывать регистр строки
console.log(name.startsWith('Ser'));//выдает true если строка начинается с заданного набора символов иначе false //!учитывать регистр строки
console.log(name.endsWith('ei'));//выдает true если строка заканчивается с заданного набора символов иначе false //!учитывать регистр строки
console.log(name.toUpperCase().startsWith('SER'));//можно вызывать подряд несколько методов
console.log(name.repeat(5));//повторяет строку заданное количество раз
const Stringg = '       password         ';
console.log(Stringg);
console.log(Stringg.trim());//удаляет пробелы в строке
console.log(Stringg.trimLeft());//удаляет пробелы в строке слева
console.log(Stringg.trimRight());//удаляет пробелы в строке справа */
/* function logPerson(s, name, age) { 
	console.log(s, name, age);
	return `${s[0]}`;//в данном случае выводится ключ Name
}
const PersonName = 'Serg';
const PersonAge = 41;
const output2 = logPerson`Name: ${PersonName}, Age:${PersonAge}`;
console.log(output2); */

/*------------------------------------------------------------------------------------------ */

/* //!Функции
//Function declaration //!можем обратиться к функции когда захотим даже жо создания ее
function greet(NName) { 
	console.log(`Hello - ${NName}`);
	
}
greet('Vasya');
console.log(typeof greet);
console.dir(greet);
//function expressoin присвоение результата функции переменной,//! обращаться можно только после ее создания
const greet2=function greet2(NName) { 
	console.log(`Hello - ${NName}`);
	
}
greet2('Misha');

//!Анонимные функции
/* let counter=0
const interval = setInterval(function () {//это встроенный метод задающий базовый интервал
	console.log(++counter);
	if(counter===5)
	{clearInterval(interval);
	}
	//setTimeout(function () { alert(`Function stoped!!!`) },2000)
	
},1000);  */

//!Стрелочные функции
/* function greet(NName) { 
	console.log(`Hello - ${NName}`);
	
} *///ниже записана таже функция только с пом стрелочной записи
/* const arrow = (NName) => { 
	console.log(`Hello - ${NName}`);
}


arrow('sergei');
const pow2 = (num) => { 
	return num ** 2;
}
console.log(pow2(5));

//!Параметры по умолчанию
const sum = (a, b=5) => a+b;//по умолчанию задан параметр b равный 5,и если я его не передам то он будет равен 5 а если при передаче я другое его значение то будет использовано оно
	
console.log(sum(41,3));//при епреданном параметре
console.log(sum(41));//при параметре по умолчанию
//!реализация функции с неограниченным количеством параметров
function sumAll(...all) { 
	console.log(all);//получается что all это массив(посмотри в консоль для подтверждения)
	let result = 0;
	for (let num of all) { //работаем с ним как чс обычным массивом

		result += num;
	}
	return result;
};
const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(res);
//!Замыкания-это когда мы из одной функции возвращаем другю функцию

function createMember(Name1) { 
	return function (lastName) { 
		console.log(Name1+lastName);
		
	}
}
const LogWithLastName = createMember('Sergey');//параметр в основную функцию
console.log(LogWithLastName);
console.log(LogWithLastName('Evtushenko'));//параметр в вложенную функцию  */
/*----------------------------------------------------------------- */


//!МАССИВЫ

/* const cars = ['mazda', 'ford', 'toyota', 'mitsubishi', 'kia'];

const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34];
//базовым классом для массива является объект(чтобы это увидеть раскрой в консоли то что выведено ниже)
//и данные хрянятся по типу ключ-значение где ключем является индекс элемента а значением данные
console.log(cars);
console.log(fib);
cars.push('moskwich');//добавление элемента в массив в конец
console.log(cars);
cars.unshift('mersedes');//добавление элемента в массив в начало
console.log(cars);
const firstItem = cars.shift();//удаление элемента из массива из начала и получение его в константу
console.log(firstItem);//1 элемент
console.log(cars);//измененный массив   
const lastCar = cars.pop();//удаление элемента из массива из конца и получение его в константу
console.log(lastCar);//последний элемент
console.log(cars);//измененный массив
console.log(cars.reverse());//переворот массива

const str='hello, we are lerning js'
const reversText = str.split(',');//делим строку на элементы массива гранью деления является запятая(раскрой массив вконсоли и убедишься что его длинна 2)
console.log(reversText);
const reversText2 = str.split('');//разделил строку на массив из букв
console.log(reversText2);//равернул массив букв в обратную сторону
console.log(reversText2.reverse());
console.log(reversText2.join());//объединил все элементы массива(этот метод объединяет все элементы массива через запятую)
console.log(reversText2.join(''));//,если указать в параметрах пустые кавычки то он объединин так как было
let index=cars.indexOf('ford');//получение индекса элемента в массиве
console.log(index);
cars[index] = 'porshe';//изменяем элемент по полученому индексу
console.log(cars[index]);
console.log(cars);
//создан массив объектов
const people = [
	{name:'sergey',budget:4500},
	{name:'misha',budget:3000},
	{name:'igor',budget:2000},
	{name:'lusya',budget:1000}
];
//при работе с объектами работаем с findindex а не indexoff
let index1 = people.findIndex(function (person) { 

		person.budget=== 2000
		return person;
	
});
let findetPerson;
console.log(people[index1]);
for (const person of people) { 
	if (person.budget === 3000) { 
		console.log(person);
		
	}

}
	//приведение массива с пом метода map  к верхнгему регистру
const apperCaseCars = cars.map(car => {return car.toUpperCase() });
console.log(apperCaseCars);
//приведение массива с пом метода map  к числам возведенным в квадрат
const pow2Fib = fib.map(num => num ** 2);
console.log(pow2Fib);
const filteredNumbers=pow2Fib.filter(num => { return num > 20; });//фильтрация массива по условиям в данном случае по числам большим 20
console.log(filteredNumbers);
//сначала фильтруем тех людей у которых бюджет больше 1000 а после с пом метода reduce складываем их
const allbudget = people
	.filter(person => person.budget > 1000)
	.reduce(function (acc, person) {
		acc += person.budget;
	 return acc;
}, 0);
console.log(allbudget); */
//------------------------------------//



/* //! Объекты

const person = {
	name: 'sergey',
	age: 41,
	isBuilder: true,
	languages: ['ru', 'en', 'de'],
	'complex key': 'Complex Value',
	['key_'+(1+3)]:'Komputed key',//'key_4'
	greet: function () { console.log('greet fron person');
	},
	info(){
		console.info('Инвормация про человека по имени:',this.name);
	 }
};
console.log(person.name);
console.log(person['age']);
console.log(person['complex key']);
console.log(person);
person.greet();
person.age++;
person.languages.push('by');
console.log(person);
person['key_4'] = undefined;//присвоение значения ключу
console.log(person);
console.log(person['key_4']);//присвоенное значение
delete person['key_4'];//удаление ключа
//работа с новым синтаксисом в js с объектами

const Name = person.name;
const Age = person.age;
const Languages = person.languages;
console.log(Name,Age,Languages);
//тоже самое что и выше только более котроткая запись(называется деструктуризация)
const { name, age, languages } = person;
console.log(name, age, languages);
//можно сразу присваивать данные переменной объявляя ее через двоеточие
const { name:personName, age:personAge, languages:personLang } = person;
console.log(personName, personAge, personLang);
//итерация по объектам
for (const key in person) {
	//!проверка на то чтобы цикл заходил только в объект а не в прототип
	if (person.hasOwnProperty(key)) {
		console.log('key:',key);//получили ключи из объекта
console.log('value:',person[key]);//получил значения ключей из объекта
	 }
}
//итерация по объекту не используя цикл
const Keys = Object.keys(person);//получение ключей объекта
Keys.forEach((key) => {
	console.log('key: ',key);
	console.log('value: ',person[key]);
});
//console.log(Keys);
//!Контекст
person.info();

const logger = {
	keys() { console.log('Object Keys:',Object.keys(this))}
}
logger.keys(person);
const bound = logger.keys.bind(person);
bound();
logger.keys.call(person); */
/**https://youtu.be/Bluxbh9CaQ0?t=14436 */
//! Асинхронность Event Loop

/* const timeout=setTimeout(() => {
	//clearTimeout(timeout);//очистка тайм аута
	console.log('after time out');
}, 2500);//первый аргумент это что делаем ,второй аргумент это время задержки

const interval=setInterval(() => {
	//clearTimeout(interval);//очистка тайм аута
	console.log('after time out');
}, 2500);//первый аргумент это что делаем ,второй аргумент это через какое время запускаем то что делаем
//clearInterval(interval);//очистка interval */
/* const delay = (callback,wait=1000) => { 
	setTimeout(callback, wait);

};
delay(() => { console.log('after 2 seconds');
},2000); */
//работа с промисами
/* const delay = (wait = 1000) => { 
	const promise = new Promise((resolve, reject) => { setTimeout(() => { resolve(); }, wait) });
	return promise;
};
delay(2500)
	.then(() => { console.log('after 2 seconds');
	})
	.catch(err=>console.error(err))
	.finally(() => console.log('Finaly')
	) */
	//! работа с DOM
/* const heading = document.getElementById('hello');
setTimeout(() => {
	addstylesTo(heading,'jawa script','red','46px');
}
	, 2500);
	setTimeout(() => {
		addstylesTo(heading1,'practice','black','30px');
	}
		, 3000);
		setTimeout(() => {
			addstylesTo(heading5,'and all be good','grey','25px');
		}
			, 5000);
console.dir(heading);
console.dir(heading.textContent);//доступ к тексту внутри тега
function addstylesTo(node,text,color='red',fz='20px') { 
	node.textContent = text;//изменение текста внутри тега
	node.style.color = color;//изменение стилей
	node.style.textAlign = 'center';
	node.style.background = 'blue';
	node.style.padding = '20px';
	node.style.fontSize = fz;
}
/* const heading1 = document.getElementsByClassName('h2class'); */
/* const heading1 = document.querySelector('.h2class');//по классу
const heading2 = document.querySelector('h2');//по тегу
const heading3 = document.querySelector('#sub-hello');//по id
console.log(heading1);
console.log(heading2);
console.log(heading3); */
/**https://youtu.be/Bluxbh9CaQ0?t=18677 */
/* const heading4 = heading2.nextElementSibling//получение элемента следующего за полученным
heading4.style.textAlign = 'center';
//или же получаем все заголовки h2
const h2List = document.querySelectorAll('h2');
//и обратиться к нему по индексу т.к полученный h2List это массив
heading5 = h2List[1];
console.log(heading5); */ 
/**https://youtu.be/Bluxbh9CaQ0?t=19200 */
/* https:// 
eloquentjavascript.net */ /*выразительный js */
/* let number = 0;
do { console.log(number++); } while (number<=100); */

/* for(let i="#";i.length<8;i+="#")//зацикливание треугольника
{
	
console.log(i);
	
}
for (let i = 1; i <= 100; i++) { 
	if (i % 5 === 0 && i % 3 === 0) { console.log('FIZZBUZZ'); }
	else  if (i % 3 === 0&&i!=0) {
		console.log('FIZZ');
	}
	else if (i % 5 === 0 && i % 3 != 0) {
		console.log('BUZZ');
	}

	 
	else { console.log(i);
	}
}
let board = ' ';
let size = 8;
for (let i = 0; i < size; i++) {
for(let d=0;d<size;d++)
{
	if ((i + d) % 2 == 0) { 
	 board += ' ';
	} else {
		board += "#";
	}

	}
	board += '\n';//переход на другую строку
}
 console.log(board); */
 /*Замыкания */
function wrapValue(n) { 
	let local = n;
	return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
/*хороший пример  функция которая умножает число на произвольную вешличину*/
function multiPlayer(factor) { //передаем число
	return number =>  number * factor ;//возвращаем умножение его на произв величину
}
let twice = multiPlayer(5);//задаем число
console.log(twice);//если посмотреть на консоль то получается что twice это теперь стрелочная функция которую мы вернули из multiPlayer,
//в которой number это аргумент который передается в нее. а factor  это тоже вроде бы аргумент но он уже получен из multiPlayer
//для понятности можнj записать и вот так return (number)=>{return number*factor};

console.log(twice(2));//задаем произв величину
/*Рекурсия */
/*Рекурсия это когда функция вызывает саму себя */
/* function power(base, exponent) { //fhuevtyn учзщтуте является количеством раз вызова функции
	if (exponent === 0) {//момент остановки счетчика//при вызове функции смотрим является ли аргумент =0;если нет то отнимаем 1 и опять смотрим если да то 1 умножаем на  base
	 //если нет то умножаем саму на себя и запоминаем число и при следующем проходе опять умножаем на base
		return 1;
	}
	else {  
		//console.log(exponent);
		console.log(base * power(base, exponent - 1));
	 return base * power(base, exponent - 1);
	
	 
	}
} */
/* console.log(power(4,3)); */
//!пример рекурсивной функции с пом которойнаходятся путиполучения числа
/* если, начиная с числа 1, каждый раз либо прибавлять к исходному числу 5, либо умножать его на 3, можно получить бесконечный набор чисел. Как бы вы написали функцию, пытающуюся найти 
последовательность таких сложений и умножений, в результате которых 
получилось бы заданное число? 
Например, число 13 можно получить, если сначала умножить 1на3, а затем дважды прибавить 5, тогда как число 15 вообще нельзя так получить. */
function findSolution(target) { 
	function find(current, history) { 
		if (current == target) {
			console.log(history);
			
			return history;

		}
		else if (current > target) {
			console.log(current);
			
			return null;
		}
		else { 
			console.log(current+5,`${history}+5`) || find(current*3,`${history}*3`);
			
			return find(current+5,`${history}+5`) || find(current*3,`${history}*3`);
		}
	}
	console.log(find(1,"1"));
	
	return find(1,"1");

}
console.log(findSolution(24));
/* Давайте 
разберемся, поскольку это важное упражнение на рекурсивное мышление. 
Настоящую рекурсию выполняет внутренняя функция find. Она принимает 
два аргумента: текущее число и строку, в которой записано, как число бьто 
получено. Если функция находит решение, она возвращает эту строку, где 
показано, как можно достичь заданной цели. Если решение для указанного 
числа не найдено, то возвращается null. 
72 Глава 3. Функции 
Для этого функция выполняет одно из трех действий. Если текущее число 
current является заданным числом target, то текущее значение history 
представляет собой способ достижения цели, поэтому оно и возвращается. 
Если текущее число больше заданного, то дальнейшее исследование этой 
ветви не имеет смысла: и сложение, и умножение только увеличат текущее 
число, так что программа возвращает null. Наконец, если мы все еще не достигли заданного числа, функция проверяет оба возможных пути, которые 
начинаются с текущего значения, дважды вызывая саму себя, - один раз 
для сложения и один раз для умножения. Если первый вызов возвращает 
что-то, не равное null, то возвращается это значение. В противном случае 
возвращается результат второго вызова, независимо от того, сгенерировал 
он строку или null */
/*страница 73 */
let min = (a, b) => { a < b ?console.log(a)//функция принимающая 2 значения и возвращающая наименьшее
	: console.log(b);
}
min(10, 15);
function isEven(number) { 
	
		if (number == 0) {
			return true;
		}
		else if (number == 1) {
			return false;
		}
		else if (isEven(number - 2)) {
			return true;
		}
		else {
			return false;
		}
}
function testLowZiro(number) { 
	if (number < 0) {
		return console.log(`function is undefinded ${number} is < 0`);
		 
	}
	else { 
	console.log(isEven(number));
		;
	}
}
testLowZiro(15);

function countChar(str,letter) { 
	let count = 0;
	for (let i = 0; i < str.length; i++) { 
		if (letter === str[i]) { count++;}
	}
	return count;
	}

console.log(countChar('BigBoss', 'B'));
/*ответы 
https://eloquentjavascript.net/code */
 /*стр 80 */
//! Структуры данных:
//!ОБЪЕКТЫ И МАССИВЫ
let ten = 10;
console.log(ten);
 console.log('максимальное значение из чисел'+' '+Math.max(5,4,105,6));
let number1 = 0;
while (number1 <= 12) { 
	console.log(number1);
	number1 = number1 + 2;
}
//возведение числа в степень
function stepen(numberNum, stNum) {
	let res = 1;
	let counter = 0;
	while (counter < stNum) { 
		res = res * numberNum;
		counter = counter + 1;
	}

	return res;
} 
 
console.log(stepen(5, 3));
//-----------------------------------
//таже программа только с пом for
function st(numberNum, stNum) { 
	let res = 1;
	
	for(let i=0;i<stNum;i++)
	{
		res = res * numberNum;
	}
	return res;
}
console.log(st(5, 3));
//-----инструкция break в цикле ,здесь нахожу первое число которое делится на семь в промежутке от 0 до 20 и выхожу из цикла
for(let i=0;i<20;i++)
{
	if (i % 7 == 0&&i>0) {
		console.log(i);
		break;
	 }
}

for(let i="#";i.length<8;i+="#")//зацикливание треугольника
{
	
console.log(i);
	
}
for (let i = 1; i <= 100; i++) {
	
	if (i % 3 == 0 && i % 5 == 0) {
		console.log('FizzBuzz');
	}
	else if (i % 5 == 0 && i % 3 !== 0) {
		console.log('Buzz');
	}
	else if (i % 3 == 0) {
		console.log('Fizz');
	}
		else  {
		console.log(i);
	}
	
}
let hesh = "#";
let space = " ";
console.log('Мое решение');
function str(space, hesh,times) {
	let stroke = "";
	for (let i = 0; i < times; i++) {
		if (i % 2 == 0) {
			stroke += hesh;
		}
		else { 
			stroke += space;
		}
	}
	return stroke;
}

console.log('переписал на стрелочную функцию');

const chesdesc = (times) => { 
	let arr = str(" ","#",times);
		for(let i=0;i<times;i++)
		{
			if (i % 2 == 0) {
				console.log(arr);
			}
			else {
				console.log(arr.split("").reverse().join(""));//сделал строку массивом,потом перевернул его,потом опять сделал строкой
			}
		
	}
	 }
chesdesc(10);

console.log('Решение из учебника');

//решение из учебника
let board = ' ';
let size = 8;
for (let i = 0; i < size; i++) {
for(let d=0;d<size;d++)
{//проверка на четность положения
	if ((i + d) % 2 == 0) { 
	 board += ' ';
	} else {
		board += "#";
	}

	}
	board += '\n';//переход на другую строку
}
 console.log(board);
function warpValue1(n) {
	let local = n;
	return () => { return local; }//!!Функция которая ссылается на переменные из окружающих ее локальных областей видимости называется замыканием
}
let wrap11 = warpValue1(1);
let wrap22 = warpValue1(2);
console.log(wrap11());
console.log(wrap22());
//!еще пример замыкания
function multiplier(factor) { 
	
	return num => {
	
		return num * factor;
	};
}
let twice1 = multiplier(2);//помещаем первое число(factor)
let twiceRes = twice1(5);//помещаем второе число(num) и умножаем на первое
console.log(twiceRes);
//
console.log('проверка на четность с пом рекурсии мое решение');

function isEven(number) { 
	if (number == 0) {
		return true;
	}
	else if (number == 1) {
		return false;
	}
	else if (isEven(number - 2) == 0&&number>0) {
		return false;
	
	}
	else { return true; }
}
console.log(isEven(150));
//функция подсчета букв в слове
console.log('функция подсчета букв в слове мое решение');

function contBs(str,letter) { 
	counter = 0;
	for(let i=0;i<str.length;i++)
	{
		if (str[i] == letter) {
			counter++;
		}
		
	}
	return counter;
}

console.log(contBs('BeBeMoB', 'b'));

//---------------структуры данных массивы объекты----------------
//! Объявление массива
let listOfNumbers = [1,2,3,4,5,6];
listOfNumbers.push(4, 6);
console.log(listOfNumbers);
const NewListOfNumbers = [5, 6, 3, 4];
listOfNumbers.push(NewListOfNumbers);
console.log(listOfNumbers);
listOfNumbers.pop(NewListOfNumbers);
console.log(listOfNumbers);
//! Создание объектов
let day1 = {
	squirrel: false,
	events:["работал","Бегал","Трогал дерево","ел пиццу"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;//добавил поле wolf
//!Для присвоения значения свойству - пользуемся точечной аннотацией и равно,тогда значение присвоится а если свойства не существовало
//!то оно создастся
console.log(day1.wolf);
//Удаление свойства
let anObject = {
	left: 1,
	right: 2,
	up: 3,
	down:4
};
console.log(anObject.left);
delete anObject.left
console.log(anObject.left);
//оператор in проверяет есть ли в текущем объекте данное свойство
console.log('Выводит False при отсутствии и true при наличии');
console.log("left" in anObject);
console.log("right" in anObject);
console.log('Для получения всех свойств объекта необходимо воспользоваться функцией Object.keys,эта функция возвращает массив строк с названиями свойств объекта');
console.log(Object.keys(anObject));
//!Копирование свойств одного объекта в другой assign
let newAnObject = {
	first: 8,
	second: 9,
	third: 10,
	fours:11
};
Object.assign(newAnObject, anObject);
console.log(newAnObject);
console.log(newAnObject.right);

//! поиска определенного значения в массиве метод idexof.а для поиска по значению с конца массива - lastIndexOf
let arrayNew = ["one","two","three","four","five","one"];
console.log(arrayNew.indexOf("one"));
console.log(arrayNew.lastIndexOf("one"));
//!для получения элементов между двумя индексами - slice
//!он возвращает массив содержащий только элементы включая элемент начального индекса но исключая последний
console.log(arrayNew.slice(1,3));
//! или можно получить элементы после определенного индекса
console.log(arrayNew.slice(2));
//!Склеить массивы - concat
let arr = ["six","seven","eight"];
let concatigArray = arrayNew.concat(arr.slice(1));
console.log(concatigArray);
//---------------строки-----------------
let arrMax = [1, 2, 3, 4, 5];
console.log(Math.max(...arrMax));//!чтобы сработал метод Math.max с массивом,
//!надо при вызове метода в скобках перед именем массива поставить три точки
//а можно с массивом передать и другие числа и сравнить их с числами из массива
console.log(Math.max(9,...arrMax,20));
//а можно с массивом передать и другой массив и найти число в двух массивах
let arrMax1 = [1, 2, 3, 4, 45];
console.log(Math.max(9, ...arrMax, 20, ...arrMax1));
//с помощю троеточия массив разворачивается
//!это хорошо видно в примере ниже
let words = ["никогда", "полностью"];
console.log('я это',...words,'не пойму');
//!---------------Json---------------
console.log('Все имена свойств должны быть в кавычках,вызовов функций быть не должно,Коменты в Json не допускаются');
console.log('sytringify-преобразовывает значение JavaScript в строку в формате JSON');
let string = JSON.stringify({
	"squirrel": false,
	"events": ["работал", "трогал дерево", "ел пиццу", "бегал"]
});
console.log(string);
console.log(typeof(string));
console.log('parse-преобразовывает строку в формате JSON в значение JavaScript');
let obj = JSON.parse(string);
console.log(obj);
console.log(typeof(obj));
//----------------Tasks--------------------
//написать метод возвращающий массив полученный путем выделенния из данных переданного массива
const taskArray = [2, 5, 6, 4, 3, 8, 5, 6, 7,];
	function range(start, end, arr) { 
		let arrNew = arr.slice(start, end);
		arrNew = arrNew.concat(arr[end]);
		return arrNew;
	}
let arrr = range(3, 6, taskArray);
	for(let i=0;i<arrr.length;i++)
		{
			console.log(arrr[i]);
		}
	function sum(arr)
	{ 
		let sumArr = 0;
		for(let i=0;i<arr.length;i++)
			{
				sumArr = sumArr + arr[i];
			}
		return sumArr
}
const sumArray = [1,2,3,4,5,6,7,8,9,10];
console.log(sum(sumArray));
//?Задача:
//написать функцию которая принимает 2аргумента и возвращает массив чисел между ними включая эти числа,
//предусмотреть возможность менять шаг записываемых в массив чисел,а также предусмотреть
//отрицательный шаг при условии что стартовый аргумент будет больше конечного
function numbersArray(start, end,count=1) {
	let arraNumbers = [];
	/* arraNumbers[0] = start; */
	let f =Math.abs(Math.ceil(Math.abs(end - start))/count);

	for(let i=0;i<=f;i++)
	{
			let res = start;
			arraNumbers[i] = res;
			start = start + count;
	}
	return arraNumbers
};
 
console.log(numbersArray(5,2,-1));
//передать массси в функцию и вернуть массив в обратном порядке

let taskArr = [1,2,3,4,5,6,7,8,9];
function reverseArray(arr) { 
	let revArr = [];
	let lengthArr=arr.length-1
for(let i=0;i<arr.length;i++)
{
	let resArrLen = lengthArr;
	revArr[i] = arr[resArrLen];
	lengthArr = resArrLen-1;
}
	return revArr;
}
console.log(reverseArray(taskArr));
function reverseArrayInPlace(arr) { 
	return reverseArray(arr);
}
 console.log(reverseArrayInPlace(taskArr)); 

function arrayToList(arr) { 
	let list = null;
	for(let i=arr.length-1;i>=0;i--)
	{ list = { value: arr[i], rest: list } }
	return list
}
//написать функцию делающую из массива список объектов где поле объекта указывает на следующий объект
let arrTL = [10,20,30,40];
console.log(arrayToList(arrTL));
//написать функцию делающую из списка объектов массив их значений
function listToArray(list) { 
	let arr = [];
	for(let i=list;i;i=i.rest)
	{
		arr.push(i.value);
	}
	return arr;
}
console.log(listToArray(arrayToList(arrTL)));
//задача сравнить два объекта
function deepEqual(a, b) { 
	if (a === b) { return true;
	}
	if (a == null || typeof a != "object" || b == null || typeof b != "object") { return false;
	}
	let keysA = Object.keys(a);
	let keysB = Object.keys(b);
	if (keysA.length!=keysB.length) {
		return false;		
	}
	for (const key of keysA) {
		if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
			return false;
		}
	}
	return true;
}
let objj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(objj,objj));
console.log(deepEqual(objj, { here: 1, object: 2 }));
console.log(deepEqual(objj, { here: { is: "an" }, object: 2 }));
//!------------Функции высшего порядка-----------------
function filter(array, test) { 
	let passed = [];
	for (const element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}
/* console.log(SCRIPTS.filter(s=>s.direction=="ttb")); */

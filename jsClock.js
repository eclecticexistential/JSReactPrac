const clockSection = document.getElementById("clock");

function getTime(){
	function pad(number){
		if (number < 10) {
			return "0" + number;
		} else{
			return number;
		}
	}
	const now = new Date();
	const hh = pad(now.getHours());
	const mm = pad(now.getMinutes());
	const ss = pad(now.getSeconds());
	
	return `${hh}:${mm}:${ss}`;
}

function tickClock() {
	clockSection.textContent = getTime();
}

tickClock();
setInterval(tickClock, 1000);

const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');
const divOne = document.getElementById('one');
const divTwo = document.getElementById('two');
const focusHandler = event => {
	event.target.className = 'highlight';
};
const blurHandler = event => {
	event.target.className = '';
};


nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);


const listO = ['red', 'green', 'blue', 'purple', 'orange'];
let counter = 0;

function returnColor(){
	if(counter == listO.length){
		counter = 0;
	}
	if(counter < listO.length){
		if(counter == listO.length - 1){
			discoLights(listO[counter], listO[0]);
		}else{
			discoLights(listO[counter], listO[counter + 1]);
		}
		counter++
		return;
	}
}

function discoLights(currC, nextC){	
	divOne.className = currC;
	divTwo.className = nextC;
}

setInterval(returnColor, 1000);

let strToSearch = "antidisistablishmentarianism";
console.log(strToSearch.startsWith("anti")); //can use 2 arg to show where to start looking index wise
console.log(strToSearch.endsWith("nism")); 
console.log(strToSearch.includes("blish"));


let Teacher = function (data) {
	this.name = data.name;
	this.greet = function (studentCnt){
		let promise = new Promise(function (resolve, reject) {
			if (studentCnt === 0){
				reject('Zero students in class');
			}else{
				resolve(`Hello to ${studentCnt} of my favorite students!`);
			}
		});
		return promise;
	}
}

var Classroom = function (data) {
	this.subject = data.name;
	this.teacher = data.teacher;
	this.students = [];
	this.addStudent = function (data){
		this.students.push(data);
		this.greet();
	}
	this.greet = () => {
		this.teacher.greet(this.students.length).then(
		
		greeting => console.log(`${this.teacher.name} says: `, greeting),
		err => console.log(err));
	}
}

var myTeacher = new Teacher({name: 'Jessica'});
var myClassroom = new Classroom({name: 'Our Future', teacher: myTeacher});

myClassroom.addStudent({name: 'Dave'});


function myFunction(name, ...params){
	console.log(name, params); // params = rest o arg in an array
}

const ogFlav = ['Choco', 'Vanil'];
const newFlav = ['Straw', 'Mint'];
const inventory = ['Rocky Road', ...ogFlav, 'Neop', ...newFlav];
console.log(inventory);

function wooDoo (name, iceCream){
	console.log(`${name} really likes ${iceCream} ice cream.`)
}

let args = ['Gabe', 'Vanilla'];
wooDoo(...args);

let toybox = {item1: 'car', item2: 'ball', item3: 'frisbee'};
let {item1, item2} = toybox;
console.log(item1, item2); // item3 no log, still in toybox
let {item3: disc} = toybox;
console.log(disc) // logs frisbee due to rename

let widgets = ['widget1','widget2','widget3','widget4','widget5']
let [a, b, c, ...d] = widgets;
//first ^ three = first 3 index, last two in d

let parentObject = {
	title: 'Super Important',
	childObject: {
		title: 'Equally Important'
	}
}

let {title, childObject: { title: childTitle }} =  parentObject

console.log(childTitle); //gets out

function submit(name, comment, rating = 5){
	let data = {name, comment, rating};
	for(let key in data){
		console.log(key + ':', data[key]);
	}
}

submit("English", "Awesome sauce!"); // auto does dictionary

const teachers = [{name: "Me", rating:10}, {name: "You", rating: 9.5}, {name: "Boy", rating: 10}];

teachers.forEach(teacher => { // goes through all names
	console.log(teacher)
	if (teacher.name === "Me"){
		console.log(teacher.rating);
	}
});

for (let teacher of teachers){ //breaks after finding name  for in for obj props
	console.log(teacher.name);
	if(teacher.name === "Me"){
		console.log(teacher.rating);
	}
}

const yo = new Set();
yo.add(4);
yo.add(7);
yo.add(2);
yo.add(6);

if (yo.has(4)) console.log("Yes.");
console.log('yo size:', yo.size);
let arrayONum = Array.from(yo);
console.log(arrayONum);
let alumni = new Set(arrayONum);

let followA = new Map();

let woo = {name: "doo", age: 33},
	doo = {name: "woo", age: 34}
	
followA.set("woo", woo);
followA.set("doo", doo);

if (followA.has("woo")) console.log(followA);

console.log('woo:', followA.get('doo'));
//followA.delete('woo');
//followA.clear();

for (let student of followA){
	console.log(`'${student[0]}': ${student[1].name} is ${student[1].age} years old.`);
}

class Person {
	dance() {
		const dances = [
		'waltz',
		'tango',
		'mambo',
		'foxtrot'
	];
	console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
	}
	constructor({name, age, eyeColor = 'brown' } = {}) {
		this.name = name;
		this.age = age;
		this.eyeColor = eyeColor;
	}
}

class Student extends Person{
	dance(traditional){
		if(traditional){
			super.dance();
			return;
		}
		const dances = [
		'lyrical',
		'tap',
		'ballet',
		'jazz'
	];
	console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
	}
	constructor({name, age, interestLevel = 5 } = {}){
		super({name, age});
		this.name = name;
		this.age = age;
		this.interestLevel = interestLevel;
		this.grades = new Map;
	}
}

let jessicaC = new Student({name: 'Jessica', age: 42, interestLevel: 3 });
jessicaC.dance(true);
jessicaC.dance(false);

class Bird {
	static changeColor(bird, color){
		bird.color = color;
	}
	constructor({color = 'red' } = {}){
		this.color = color;
	}
}

let redBird = new Bird;
console.log(redBird.color);
Bird.changeColor(redBird, 'blue');
console.log(redBird.color);

class Dude{
	get name(){
		return `${this.firstName} ${this.lastName}`;
	}
	set name(input){
		let name = input.split(' ');
		this.firstName = name[0];
		this.lastName = name[1];
	}
	constructor({firstName, lastName, age, hobby, interestLevel=5 }= {}){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.hobby = hobby;
		this.interestLevel= interestLevel;
	}
}

let brutalB = new Dude ({firstName: 'Brutus', lastName: 'Cottner', age: 12, hobby: 'sleeping'});
console.log(brutalB.name);

//### closures

var birds = 3;

function dogHouse(){
	var dogs = 3;
	function showDogs(){
		console.log(dogs);
	}
	return showDogs;
}

var getDogs = dogHouse();
getDogs();

// instead of var count = 0;

function makeBirdCounter(){
	var count = 0;
	return function(){
		count += 1;
		return count + ' birds';
	}
}

var birdCounter = makeBirdCounter();
birdCounter(); // 1
birdCounter(); // 2

function makeCounter(noun){
	var count = 0;
	return function(){
		count += 1;
		return count + ' ' + noun;
	}
}

var fishCounter = makeCounter('fish');
var catCounter = makeCounter('cat');
fishCounter();
catCounter();



const people = [{name: "Bob", age: 34}, {name:"Jim", age: 22}, {name:"Tim", age: 14}];

const people_names = people.map(function() {return people;})

console.log(people_names);

const people_with_name = people.filter(function(people){
	if (people.name){
		return people.age;
	}
})

console.log(people_with_name);


// find returns the first example ... filter goes to the end

const person = people.find(function(person){
	return person.age === 93;
})

const person1 = people.find((person) => {
	return person.age === 93;
})

// the code above same ms as one ballet   <---- why??????

const person2 = people.find(person => person.age === 93)


var buttons = document.getElementByTagName('button');

function loop1(){
	for (i = 0; i < buttons.length; i += 1)
	{
		var button1 = buttons[i];
		var buttonName = button.innerHTML; // as a var variable, this will end up getting to #third for every button, rather than 1, 2, etc. ...
		button.addEventListener('click', () => console.log(buttonName));
	}
}

// instead of anon func...

function createHandler(name){() => console.log(name)}

// then...

for(var i = 0; i < buttons.length; i += 1)
{
	var button1 = buttons[i];
	var buttonName = button1.innerHTML;
	button.addEventListener('click', createHandler(buttonName)); // encapsulates buttonName to give right one
}

// after es2015 however...

for(var i = 0; i < buttons.length; i += 1)
{
	var button1 = buttons[i];
	let buttonName = button1.innerHTML; // makes new block scope, gives each button its own name
	button.addEventListener('click', console.log(buttonName)); // ??
}

// node escape ctrl c or .exit




























































































































































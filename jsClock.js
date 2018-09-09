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






























































































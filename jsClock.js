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
var counter = 0;

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












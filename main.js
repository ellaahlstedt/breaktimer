var input = document.querySelectorAll('input');
var pTag = document.querySelectorAll("p");

//function that starts a sound
function alarmSound() {
	var crash = new Audio('NokiaRingtone.mp3');
	crash.play();
}

//create new date (hours, mins, seconds), changes second p tags text (happens every second)
setInterval(function () {
	var currentdate = new Date();
	var datetime = "Current time: " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

	pTag[1].innerHTML = datetime;
}, 1);

function formdata() {
	// Selecting the input element and get its value 
	var longBreak = document.getElementById("txtBreak").value;
	pTag[0].innerHTML = "Time left: " + longBreak + " min";

//count down, what happens when timer is finished (happens every minute)
	setInterval(function () {
		var longBreak = document.getElementById("txtBreak").value;
		var counter = longBreak - 1;
		pTag[0].innerHTML = "Time left: " + counter + " min";
		if (counter == 0) {
			alarmSound();
			
			var h1 = document.querySelector('h1');
			h1.innerHTML = "THE BREAK IS OVER";

			document.querySelector('h2').style.display = 'none';
			input[2].style.display = 'inline';
			input[0].style.display = 'none';
			input[1].style.display = 'none';
			pTag[0].style.display = 'none';
			pTag[1].style.display = 'none';
		}
	}, 60000);

}

//reloads site when button is clicked
function startNew() {
	location.reload();
}

//hides button
input[2].style.display = 'none';
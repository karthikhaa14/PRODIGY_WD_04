let start = document.getElementById('start'); 
let stopp = document.getElementById('stop'); 
let reset = document.getElementById('reset'); 

let hour = 00; 
let minute = 00; 
let second = 00; 
let count = 00; 

start.addEventListener('click', function () { 
	timer = true; 
	stopWatch(); 
}); 

stopp.addEventListener('click', function () { 
	timer = false; 
}); 

reset.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerHTML = "00"; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 
}); 

function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrs = hour; 
		let mins = minute; 
		let secs = second; 
		let countstring = count; 

		if (hour < 10) { 
			hrs = "0" + hrs; 
		} 

		if (minute < 10) { 
			mins = "0" + mins; 
		} 

		if (second < 10) { 
			secs = "0" + secs; 
		} 

		if (count < 10) { 
			countstring = "0" + countstring; 
		} 

		document.getElementById('hr').innerHTML = hrs; 
		document.getElementById('min').innerHTML = mins; 
		document.getElementById('sec').innerHTML = secs; 
		document.getElementById('count').innerHTML = countstring; 
		setTimeout(stopWatch, 10); 
	} 
}

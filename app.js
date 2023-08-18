let colors = ["Salmon", "PowderBlue", "#00FF7F", "#98FB98", "rgba(111,222,333)"];

let btn = document.getElementById('btn');

let color = document.querySelector(".color");
let colorInc = 0;
btn.addEventListener('click', function(){

	//change background color of body to whatever colorInc is
	document.body.style.backgroundColor = colors[colorInc];

	//change the text of color to be the new color
	color.textContent = colors[colorInc];

	colorInc++;

	if (colorInc > 4) {
		colorInc = 0;
	}
})

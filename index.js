var button_array = document.querySelectorAll("button");
var array_length = button_array.length;
///if we use () it will be called on every load.it is passing function as input.

for(var i = 0; i < array_length; i++)
{
	button_array[i].addEventListener("click", function (){
		make_sound(this.innerHTML);
	});
}

document.addEventListener("keydown", function (event) {
	make_sound(event.key);
});


function make_sound(key){
	buttonAnimation(key);
	var sound;
	switch(key){
		case "w":
			sound = new Audio("sounds/tom-1.mp3");
			break;
		case "a":
			sound = new Audio("sounds/tom-2.mp3");
			break;
		case "s":
			sound = new Audio("sounds/tom-3.mp3");
			break;
		case "d":
			sound = new Audio("sounds/tom-4.mp3");
			break;
		case "j":
			sound = new Audio("sounds/snare.mp3");
			break;
		case "k":
			sound = new Audio("sounds/crash.mp3");
			break;
		case "l":
			sound = new Audio("sounds/kick-bass.mp3");
			break;
		default:
				console.log(click_sound);
	}
	sound.play();
}

function buttonAnimation(key){
	var activeButton = document.querySelector("."+key);
	activeButton.classList.add("pressed");
	setTimeout(function() {
		activeButton.classList.remove("pressed");
	},100);
}
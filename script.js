	// Changing text after a time interval
		/*setInterval(function() {
			var text = document.getElementById("change-text");
			if (text.innerHTML === "curriculum vitae") {
				text.innerHTML = "Welcome to my website!";
			} else {
				text.innerHTML = "it's my personal Portifolio";
			}
		}, 3000);*/
		let index=0;
		const text = document.getElementById("text");
		const message =["hello","mila","make"];
		setInterval(()=>{
			text.textContent=message[index];
			index=(index+1)%message.length;
		},1000);



		// Sliding menu
		/*function toggleMenu() {
			var menu = document.getElementById("menu");
			if (menu.style.left === "-250px") {
				menu.style.left = "0";
			} else {
				menu.style.left = "-250px";
			}
		}

		// Moving image
		function moveImage() {
			var image = document.getElementById("image");
			image.style.transform = "translateX(200px)";
		}
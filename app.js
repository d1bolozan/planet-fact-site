const menu = document.getElementById("menu");
document.addEventListener("click", (event) => {
	const targetItem = event.target;
	if (targetItem.classList.contains("menu__btn")) {
		targetItem.classList.toggle("active");
		menu.classList.toggle("active");
	}
});

const mainButtons = document.querySelectorAll(".group__btn");
const planet = document.querySelector(".planet__img");
const planetGeology = document.getElementById("planet-geology");

document.addEventListener("click", (event) => {
	if (event.target.getAttribute("data-id") === "overview") {
		event.target.classList.add("active");
		mainButtons.forEach((item) => (item !== event.target ? item.classList.remove("active") : item));
		planet.setAttribute("src", "./assets/images/planet-mercury.svg");
		planetGeology.classList.remove("active");
	} else if (event.target.getAttribute("data-id") === "structure") {
		event.target.classList.add("active");
		mainButtons.forEach((item) => (item !== event.target ? item.classList.remove("active") : item));
		planet.setAttribute("src", "./assets/images/planet-mercury-internal.svg");
		planetGeology.classList.remove("active");
	} else if (event.target.getAttribute("data-id") === "surface") {
		event.target.classList.add("active");
		mainButtons.forEach((item) => (item !== event.target ? item.classList.remove("active") : item));
		planetGeology.classList.add("active");
	}
});

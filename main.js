import data from "./assets/data/config.js";

const menu = document.getElementById("menu");

const currentPlanet = document.body.className;
const planetImage = document.getElementById("planet-image");
const planetGeology = document.getElementById("planet-geology");
const planetInfo = document.getElementById("planet-info");
const planetSource = document.getElementById("planet-source");
const vw = window.innerWidth;

// Open/Close menu
document.addEventListener("click", (event) => {
	const targetItem = event.target;
	if (targetItem.classList.contains("menu__btn")) {
		targetItem.classList.toggle("active");
		menu.classList.toggle("active");
	}
});

// Get data of current planet
const currentData = data.find((item) => item.name.toLowerCase() === currentPlanet);

// Destructuring
const { name, overview, structure, geology, rotation, revolution, radius, temperature, images, size } = currentData;

// Handle main buttons

document.addEventListener("click", (event) => {
	const buttons = document.querySelectorAll(".group__btn");

	const target = event.target;

	switch (target.dataset.role) {
		case "overview":
			planetImage.src = images.planet;
			planetGeology.classList.remove("active");

			planetInfo.innerText = overview.content;
			planetSource.href = overview.source;

			removeClass(buttons, target);
			break;

		case "structure":
			planetImage.src = images.internal;
			planetGeology.classList.remove("active");

			planetInfo.innerText = structure.content;
			planetSource.href = structure.source;

			removeClass(buttons, target);
			break;

		case "surface":
			planetImage.src = images.planet;
			planetGeology.classList.add("active");

			planetInfo.innerText = geology.content;
			planetSource.href = geology.source;

			removeClass(buttons, target);
			break;
	}
});

function removeClass(arr, target) {
	arr.forEach((item) => {
		item.classList.remove("active");
		if (item === target && !item.classList.contains("active")) {
			target.classList.add("active");
		}
	});
}

function initApp() {
	planetSource.href = overview.source;

	if (vw <= 767.99) {
		planetImage.style.width = size.small;
	} else if (vw <= 1100) {
		planetImage.style.width = size.medium;
	} else {
		planetImage.style.width = size.large;
	}
}

document.addEventListener("DOMContentLoaded", initApp);

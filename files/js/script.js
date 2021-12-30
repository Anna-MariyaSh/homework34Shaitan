/** @format */

(function () {
	const form = document.getElementById("form");
	form.addEventListener("submit", event => {
		event.preventDefault();
		let obj = {};
		let inputs = event.target.querySelectorAll("input, textarea, select");
		inputs.forEach(item => {
			obj[item.name] = item.value;
		});
		event.target.reset();
		localStorage.setItem("inputData", JSON.stringify(obj));
		console.log(JSON.parse(localStorage.getItem("inputData")));
	});
})();

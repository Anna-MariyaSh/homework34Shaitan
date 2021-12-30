/** @format */

(function () {
	document.addEventListener("DOMContentLoaded", () => {
		const obj = JSON.parse(localStorage.getItem("inputData"));
		console.log(obj);
		const ul = document.createElement("ul");
		for (let liValue in obj) {
			let li = document.createElement("li");
			let value = liValue + " : " + obj[liValue];
			console.log(li);
			li.innerHTML = value;
			ul.append(li);
			if (obj[liValue] === "") {
				alert("User dont entered all values");
			}
		}
		document.body.prepend(ul);
	});
})();

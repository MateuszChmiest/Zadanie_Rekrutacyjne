const popup = document.querySelector(".popup");
const button = document.getElementById("counterButton");
const close = document.getElementById("close");
const popupLabel = document.getElementById("popup-label");
const reset = document.getElementById("resetButton");
const counter = document.getElementById("counter");

const handleToggle = () => {
	popup.classList.toggle("active");
	popupLabel.classList.toggle("active-label");
};

const handleClose = (event) => {
	if (event.target.closest("#popup-label")) {
		return;
	}
	handleToggle();
};

let count = localStorage.getItem('count') || 0;

button.addEventListener("click", () => {
    handleToggle();
	count++;
    localStorage.setItem('count', count);
    counter.innerText = `${count} times`;
    count >= 5 ? reset.classList.add("active") : reset.classList.remove("active")
});



reset.addEventListener("click", () => {
	localStorage.clear()
    count = 0
    counter.innerText = `${count} times`;
});
close.addEventListener("click", handleToggle);
popup.addEventListener("click", handleClose);

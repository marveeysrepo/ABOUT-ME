
const nav = document.querySelector('nav');
const setDate = document.querySelector("#date");
const toggleBtn = document.querySelector("#toggleBtn");
toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show")
})


function newDate() {
    const now = new Date();
const time = now.toLocaleTimeString();
const date = now.toLocaleDateString();
    setDate.textContent = `${date} ${time}`;
    setDate.style.color = "red";
console.log(time)
console.log(now)
console.log(date)
}
setInterval(newDate, 1000);
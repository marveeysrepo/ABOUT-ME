
const nav = document.querySelector('nav');
const toggleBtn = document.querySelector("#toggleBtn");
toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show")
})
let burger = document.getElementById("burger");
let menu = document.querySelector(".menu");


burger.addEventListener("click", () => {
    menu.classList.toggle("active"); 
});
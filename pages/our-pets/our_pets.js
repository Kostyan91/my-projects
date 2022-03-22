
const iconMenu = document.querySelector(".iconMenu");
const responseMenu = document.querySelector(".response-menu");
const popup = document.querySelector(".popup");
const body = document.querySelector("body");


iconMenu.addEventListener("click", (e) => {
    popup.classList.toggle("open");
    iconMenu.classList.toggle("active1");
    responseMenu.classList.toggle("active-burger");
  });

  popup.addEventListener("click", (e) => {
    if (!e.target.closest(".response-menu")) {
      responseMenu.classList.remove("active-burger");
      popup.classList.remove("open");
      iconMenu.classList.remove("active1");
    }
  });

  


// Menu burger
let menuBurger = document.querySelector(".menu-burger");
const navMenu = document.querySelector(".nav-menu");
if (menuBurger) {
  menuBurger.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    menuBurger.classList.toggle("_active");
    navMenu.classList.toggle("_active");
  });
}
const closeBurger = document.querySelector(".close");
closeBurger.addEventListener("click", function () {
  menuBurger.classList.toggle("_active");
  navMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
});

//Sidebar
let sidebarBottom = document.querySelector(".sidebar-bottom");
let sidebar = document.querySelector(".sidebar");
sidebarBottom.addEventListener("click", function () {
  sidebar.classList.toggle("_active");
  sidebarBottom.classList.toggle("_active");
});

// carousel

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  typeTextElement = document.getElementById("type-text"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev"),
  switchButton = document.getElementById("switch-type");

let slideIndex = 0;
let imgWidth = document.querySelector('.carousel-iframe').offsetWidth;
const slideFunc = () => {
    carousel.scrollTo((imgWidth + gap) * slideIndex, 0);
  slideIndex ++;
  if (slideIndex >= 5) {slideIndex = 0}
}

let autoSlideInterval = setInterval(slideFunc, 4000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 4000);
  }, 4000);
}

carousel.addEventListener('click', delayAutoSliding);

const videoLittle = document.querySelectorAll(".animal-little-videos");
const videoBig = document.querySelector(".animal-big-video");

;
let bigIframe = document.querySelector(".big-iframe");
console.log(bigIframe.src)
let dots = document.getElementsByClassName("carousel-iframe");


function playBig(n) {
  currentSlide((index = n));
}

function currentSlide(n) {
  let i;
  let bigIframe = document.querySelector(".big-iframe");
  let srcBig = bigIframe.src;
  let srcLittle
  for (let i = 0; i < dots.length; i++) {
    srcLittle = dots[n - 1].src;
    break
  }
  dots[n - 1].src = srcBig;
  bigIframe.src = srcLittle
}


const video1 = document.querySelector(".video1");
video1.addEventListener("click", () => {
  playBig((n = 1));
  console.log("1")
 
});

const video2 = document.querySelector(".video2");
video2.addEventListener("click", () => {
  playBig((n = 2));
  console.log("2")
});

const video3 = document.querySelector(".video3");
video3.addEventListener("click", () => {
  playBig((n = 3));
  console.log("3")
});

const video4 = document.querySelector(".video4");
video4.addEventListener("click", () => {
  playBig((n = 4));
  console.log("4")
});

const video5 = document.querySelector(".video5");
video5.addEventListener("click", () => {
  playBig((n = 5));
  console.log("5")
});

const video6 = document.querySelector(".video6");
video6.addEventListener("click", () => {
  playBig((n = 6));
});

const video7 = document.querySelector(".video7");
video7.addEventListener("click", () => {
  playBig((n = 7));
});

const video8 = document.querySelector(".video8");
video8.addEventListener("click", () => {
  playBig((n = 8));
});



// Popaps
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
let unlock = true;
let timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault;
    });
  }
}
const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  validation(regAmout, amount, popupNext);
  validation(regCardNumber, cardNumber, pay);
  validation(regMMYY, month, pay);
  validation(regMMYY, year, pay);
  validation(regCVC, ccc, pay);
  validation(regName, nameDon, pay);
  amount.classList.remove("invalid");
  cardNumber.classList.remove("invalid");
  month.classList.remove("invalid");
  year.classList.remove("invalid");
  ccc.classList.remove("invalid");
  nameDon.classList.remove("invalid");
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup-content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
  }
}
// validation
const amount = document.querySelector(".donate-name");
const cardNumber = document.querySelector(".number-donate");
const month = document.querySelector(".month-donate");
const year = document.querySelector(".year-donate");
const nameDon = document.querySelector(".name-donate");
const ccc = document.querySelector(".kod-input-donate");

const regAmout = /^\d{4}$/;
const regCardNumber = /^\d{16}$/;
const regMMYY = /^\d{2}$/;
const regCVC = /^\d{3}$/;
const regName = /[A-Za-z]/;

const pay = document.querySelector(".pay");
const popupNext = document.querySelector(".popup-next");

const textarea = document.getElementsByTagName("textarea");

amount.addEventListener("change", () => {
  validation(regAmout, amount, popupNext);
});
cardNumber.addEventListener("change", () => {
  validation(regCardNumber, cardNumber, pay);
});
month.addEventListener("change", () => {
  validation(regMMYY, month, pay);
});
year.addEventListener("change", () => {
  validation(regMMYY, year, pay);
});
nameDon.addEventListener("change", () => {
  validation(regName, nameDon, pay);
});
ccc.addEventListener("change", () => {
  validation(regCVC, ccc, pay);
});
amount.addEventListener("input", () => {
  popupNext.classList.add("disabled");
  validation(regAmout, amount, popupNext);
  popupNext.classList.remove("disabled");
});

cardNumber.addEventListener("input", () => {
  pay.classList.add("disabled");
  validation(regCardNumber, cardNumber, pay);
  pay.classList.remove("disabled");
});
month.addEventListener("input", () => {
  pay.classList.add("disabled");
  validation(regMMYY, month, pay);
  pay.classList.remove("disabled");
});
year.addEventListener("input", () => {
  pay.classList.add("disabled");
  validation(regMMYY, year, pay);
  pay.classList.remove("disabled");
});
nameDon.addEventListener("input", () => {
  pay.classList.add("disabled");
  validation(regName, nameDon, pay);
  pay.classList.remove("disabled");
});
ccc.addEventListener("input", () => {
  pay.classList.add("disabled");
  validation(regCVC, ccc, pay);
  pay.classList.remove("disabled");
});
function validation(regExp, input, button) {

  if (!regExp.test(input.value) || !input.value) {
    button.classList.add("disabled");
    input.classList.add("invalid")
  }
}

for (let index = 0; index < textarea.length; index++) {
  const e = textarea[index];
  e.addEventListener("click", () => {
    e.value = "";
  });
}

//выпадающий список
const button = document.querySelector(".dropbtn");
const image = document.querySelector(".image");

const dropdownContent = document.querySelector(".dropdown-content");
const animalList = document.querySelectorAll(".animal-list");
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", open);
dropdownContent.addEventListener("click", open);
image.addEventListener("click", open);


//открытие списка и выбор животного
function open() {

  dropdownContent.classList.toggle("_show");
  image.classList.toggle("_show");
  if (dropdownContent.classList.contains("_show")) {
    for (let i = 0; i < animalList.length; i++) {
      animalList[i].addEventListener("click", function (e) {
        let a = animalList[0].textContent ;
        animalList[0].textContent = e.currentTarget.textContent;
        e.currentTarget.textContent = a;
        dropdownContent.classList.remove("_show");
        image.classList.remove("_show");
      });
    }
  }
}
//Выбор валюты
const donateMoney = document.querySelector(".donate-money");
const donateMoneyItem = document.querySelectorAll(".donate-money-item");
donateMoney.addEventListener("click", chooseMoney);
function chooseMoney() {
  donateMoneyItem.forEach((element) => {
    element.classList.toggle("open");
    if (element.classList.contains("open")) {
      for (let i = 0; i < donateMoneyItem.length; i++) {
        donateMoneyItem[i].addEventListener("click", function (e) {
          donateMoneyItem[0].textContent = e.currentTarget.textContent;
        });
        donateMoneyItem[0].textContent = "USD";
      }
    }
  });
}

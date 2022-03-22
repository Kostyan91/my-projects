// "use strict";

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
        animalList[0].textContent = "Alligator";
        animalList[0].textContent = e.currentTarget.textContent;
        dropdownContent.classList.remove("_show");
        image.classList.remove("_show");
      });
    }

    // button.addEventListener("click", function (e) {
    //   dropdownContent.classList.remove("_show");
    //   image.classList.remove("_show");
    // });

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

// выбор картинки в блоке How it works

const state = {};
const carouselList = document.querySelector(".how-it-works_images");
const carouselItems = document.querySelectorAll(".how-it-works_item");
const elems = Array.from(carouselItems);
console.log(elems)
carouselList.addEventListener("click", function (event) {
  var newActive = event.target;

  var isItem = newActive.closest(".how-it-works_item");

  if (!isItem || newActive.classList.contains(".how-it-works_item_active")) {
    return;
  }

  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  let current = elems.find((elem) => elem.dataset.pos == 0);
  let prev = elems.find((elem) => elem.dataset.pos == -1);
  let next = elems.find((elem) => elem.dataset.pos == 1);
  let first = elems.find((elem) => elem.dataset.pos == -2);
  let last = elems.find((elem) => elem.dataset.pos == 2);

  current.classList.remove("carousel__item_active");

  [current, prev, next, first, last].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
  console.log(current, prev, next, first, last)
  // if (document.body.clientWidth <= 1199 ){
  //   if( first.style.visibility === 'visible'){
  //     first.style.visibility = 'hidden';
  //   }
  //   if( current.style.visibility === 'hidden'){
  //     current.style.visibility = 'visible';
  //   }
  //   if(  last.style.visibility === 'visible'){
  //     last.style.visibility = 'hidden';
  //   }
  //   if(prev.style.visibility === 'hidden'){
  //     prev.style.visibility = 'visible';
  //   }
  //   if(next.style.visibility === 'hidden'){
  //     next.style.visibility = 'visible';
  //   }
  //     }
  console.log(current, prev, next, first, last)

};

const getPos = function (current, active) {
  const diff = current - active;
  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};

//pets in zoo
const next = document.querySelector(".pets-in-zoo_slyder_arrow.next");
const prev = document.querySelector(".pets-in-zoo_slyder_arrow.prev");

let pets = document.querySelectorAll(".pets");
let slider = [];

for (let i = 0; i < pets.length; i++) {
  slider[i] = pets[i].src;
  pets[i].remove();
}

let step = 1;
let i = 0;
let zooLink = document.querySelectorAll(".pets-in-zoo_link");

function draw() {
  let img = document.createElement("img");
  img.src = slider[step];
  img.classList.add("pets");
  for (; i < zooLink.length;) {
    zooLink[i].appendChild(img);
    break;
  }
  i++;
  if (step + 1 == slider.length) {
    step = 0;
  } else {
    step++;
  }
}
draw();
draw();
draw();
draw();
draw();
draw();
draw();
draw();

next.addEventListener("click", right);
prev.addEventListener("click", left);

function left() {
  let slides2 = document.querySelectorAll(".pets");
  for (let j = 0; j < slides2.length; j++) {
    slides2[j].remove();
  }
  draw((i = 0));
  draw((i = 1));
  draw((i = 2));
  draw((i = 3));
  draw((i = 4));
  draw((i = 5));
  draw((i = 6));
  draw((i = 7));
  draw((i = 8));
}

function right() {
  let slides2 = document.querySelectorAll(".pets");
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].remove();
  }
  draw((i = 8));
  draw((i = 7));
  draw((i = 6));
  draw((i = 5));
  draw((i = 4));
  draw((i = 3));
  draw((i = 2));
  draw((i = 1));
  draw((i = 0));
}

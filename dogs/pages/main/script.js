const iconMenu = document.querySelector(".iconMenu");
const responseMenu = document.querySelector(".response-menu");
const popup = document.querySelector(".popup");
const body = document.querySelector("body");
let btnRigth;
let btnLeft;
let slides;

let countOfactiveSlides;

iconMenu.addEventListener("click", (e) => {
  popup.classList.toggle("open");
  iconMenu.classList.toggle("active1");
  responseMenu.classList.toggle("active-burger");
  console.log("ggg");
});

popup.addEventListener("click", (e) => {
  // if(popup.classList.contains('open')){
  if (!e.target.closest(".response-menu")) {
    responseMenu.classList.remove("active-burger");
    popup.classList.remove("open");
    iconMenu.classList.remove("active1");
  }
  console.log(e.target);
  // }
});

//--------------------------------------           slider

window.addEventListener(
  `resize`,() => {
    getCountOfactiveSlides();
  }, false
);

function getCountOfactiveSlides() {
  const screenWidth = window.screen.width;

  if (screenWidth < 660) {
    countOfactiveSlides = 1;
  }
  if (screenWidth > 660 && screenWidth < 1160) {
    countOfactiveSlides = 2;
  }
  if (screenWidth > 1160) {
    countOfactiveSlides = 3;
  }
  setActiveClassToSlidesItem();
  return countOfactiveSlides;
}





function setActiveClassToSlidesItem() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); 
  }
  for (let i = 0; i < countOfactiveSlides; i++) {
    slides[i].classList.add("active");
  }
}


let index = 0;

function activeSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  for (let i = index; i < index + countOfactiveSlides; i++) {
    slides[i].classList.add("active");
  }
}

function nextSlide(copyArray) {
  index += countOfactiveSlides;
  console.log(index, slides.length, countOfactiveSlides);
  if (index + countOfactiveSlides > slides.length) {
    index = 0;
  }
  shuffle(copyArray)
  activeSlide(index);
}

function prevSlide() {

    if (index - countOfactiveSlides < 0) {
      index = slides.length- countOfactiveSlides;
      
    } else index -= countOfactiveSlides;
    console.log(index, slides.length, countOfactiveSlides);
    shuffle(copyArray);
  activeSlide(index);
}

// -------

async function getDate() {
  let response = await fetch("../../pets.json");
  let responsejson = await response.json();
  let str = JSON.stringify(responsejson);
  data = JSON.parse(str);
  return data;
}

let array;
let copyArray;
let newArr;
getDate()
  .then((data) => {
    return  data;
  })
  .then(() => {
    copyArray = [...data];
    console.log(copyArray);
    newArr = shuffle(copyArray);
    createSlider();
    getCountOfactiveSlides();

    console.log(copyArray);
    console.log(newArr);
  });

function createSlider() {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.innerHTML =
    newArr
      .map(
        (el) => `
  <div class="slide" data-name = ${el.name}>
    <div class="slide_img">
      <img src=${el.img} alt=${el.name}>
    </div>
  <div class="title_animals">${el.name}</div>
  <button class="button_animals">Learn more</button>
  </div>
    `
      )
      .join("") +
    `<div class="button_arrow arrow_rigth">
    <div class="rigth"> </div>
  </div>
  <div class="button_arrow arrow_left">
    <div class="left"> </div>
  </div>`;

  openCard();

  slides = document.querySelectorAll(".slide");
  btnRigth = document.querySelector(".arrow_rigth");
  btnLeft = document.querySelector(".arrow_left");
  btnRigth.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
}

function openCard() {
  const btnAnimals = document.querySelectorAll(".button_animals");
  btnAnimals.forEach((btn) => {
    let infoDogs = btn.closest(".slide").dataset.name;
    btn.addEventListener("click", (e) => {


      console.log(btn.closest(".slide").dataset.name);

      let findObj = findName(infoDogs)[0];
      console.log(findName(infoDogs)[0] );
      const popupContent = document.querySelector(".animals_content");
      popupContent.innerHTML = `
      <div class="content_img"> <img src=${findObj.img} alt="alt"> </div>
      <div class="content_description">
        <h3>${findObj.name}</h3>
        <h4>${findObj.type} - ${findObj.breed}</h4>
        <h5>${findObj.description}</h5>
        <div class="content_age">
          <h6>Age:</h6>${findObj.age}
        </div>
        <div class="content_inoculations">
          <h6>Inoculations:</h6>${findObj.inoculations}
        </div>
        <div class="content_diseases">
          <h6>Diseases:</h6>${findObj.diseases}
        </div>
        <div class="content_parasites">
          <h6>Parasites:</h6>${findObj.parasites}
        </div>
      </div>`;
      createPopup();
    });
  });
}

function findName(infoDogs) {
  return newArr.filter((e) => e.name === infoDogs);
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

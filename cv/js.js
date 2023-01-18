
const slider = document.querySelector('.my_interests-slider')
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')
let next = 'next'
let prev = 'prev'

sliderItems.forEach((e, i) => {

  if (i !== 0) e.classList.add('hidden')

  e.dataset.index = i
  sliderItems[0].setAttribute('data-active', '')

  e.addEventListener('click', () => {
    showNextSlide(next)
  })
})




btnNext.addEventListener('click', () => {
  showNextSlide(next)
})


btnPrev.addEventListener('click', () => {
  showNextSlide(prev)
})



function showNextSlide(dicection) {
  const currentSlide = slider.querySelector('[data-active]')
  const currentSlideIndex = +currentSlide.dataset.index

  currentSlide.classList.add('hidden')
  currentSlide.removeAttribute('data-active')

  let nextSlideIndex
  if (dicection === next) {
    nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
  } else if (dicection === prev) {
    nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
  nextSlide.classList.remove('hidden')
  nextSlide.setAttribute('data-active', '')


}


const iconMenu = document.querySelector(".icon_menu");
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
  console.log(e.target);
  // }
});










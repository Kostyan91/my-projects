let menuBtn = document.querySelector('#menu_btn')
const navbar = document.querySelector('.navbar')

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
  });
  
  var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1, 
      },
      550: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  
  var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1, 
      },
      550: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1, 
      },
      620: {
        slidesPerView: 2, 
      },
      1090: {
        slidesPerView: 3,
      },
    },
  });
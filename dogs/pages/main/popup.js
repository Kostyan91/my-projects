
  const closePopupIcon = document.querySelector(".close-popup");
  closePopupIcon.addEventListener("click",  () => {
    closePopup();
  });


function createPopup() {
  const popup = document.querySelector(".popup_cards");
  popup.classList.add("open_cards"); 
}

function closePopup() {
  const popup = document.querySelector(".popup_cards");
  popup.classList.remove("open_cards");  
}

const popup1 = document.querySelector(".popup_cards");
popup1.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_content")) {
    popup1.classList.remove("open_cards");
  }
  console.log(e.target);
});

  

// const popup1 = document.querySelector(".popup_cards");
// const btnAnimals = document.querySelector(".button_animals");
// const closePopupIcon = document.querySelector(".close-popup");


// btnAnimals.addEventListener("click", () => {
//   console.log('hjhj')
//   popup1.classList.toggle("open_cards")

    
//   });

  
// // popup1.addEventListener("click", (e) => {
// //   if (!e.target.closest(".popup_content")) {
// //     popup1.classList.remove("open_cards");
// //     closePopupIcon.classList.remove("open_cards");

// //   }
// //   console.log(e.target);
// //   // }
// // });

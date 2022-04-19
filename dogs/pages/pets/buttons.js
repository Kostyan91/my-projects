const firstPage = document.querySelector('.prev_prev')
const lastPage = document.querySelector('.next_next')


firstPage.addEventListener('click', openfirstPage)
lastPage.addEventListener('click', openlastPage)

function  openfirstPage() {
  value = 1
 count.innerHTML = value;
  activeSlide(0);
  console.log(firstPage)
}




function openlastPage () {
  let pages =  newArr.length/countOfactiveSlides
     value = pages
    count.innerHTML = value;
  index = newArr.length-countOfactiveSlides
  activeSlide(index);
}



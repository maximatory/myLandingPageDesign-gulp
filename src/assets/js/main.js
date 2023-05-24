// ? ========= slider ============

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991.98: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

});


// ? ========= modal ============
const accredImg = document.querySelector('#accredImg')
const reviewsImages = document.querySelectorAll('#reviewImg')


function createModal() {
  const modal = document.createElement('div');
  const close = document.createElement('span');
  const image = document.createElement('img');

  modal.classList.add('modal')
  close.classList.add('close')
  image.classList.add('modal-content')

  modal.setAttribute('id', 'myModal')
  image.setAttribute('id', 'img01')
  image.src = this.src
  

  close.innerHTML = '&times;'

  modal.append(close)
  modal.append(image)
  document.body.prepend(modal)


  close.addEventListener('click', () => {
    modal.remove()
  })
  modal.addEventListener('click', () => {
    modal.remove()
  })
}

accredImg.addEventListener('click', createModal)

for (let reviewsImg of reviewsImages) {
  reviewsImg.addEventListener('click', createModal)
}
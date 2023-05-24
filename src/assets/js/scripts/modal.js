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


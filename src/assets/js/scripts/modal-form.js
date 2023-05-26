const buttonsForm = document.querySelectorAll('#modalBtn')

function closeFormMessage() {
  document.querySelector('.modal-form__message').style.display = 'none'
}

function createModalForm() {
  const modal = document.querySelector('.modal-form');
  const close = document.querySelector('.close-form');
  const formMessage = document.querySelector('.modal-form__message');

  modal.style.display = 'block'

  close.addEventListener('click', () => {
    modal.style.display = 'none'
    formMessage.style.display = 'none'
  })
  closeFormMessage()
}


buttonsForm.forEach(btn => {
  btn.addEventListener('click', createModalForm)
})


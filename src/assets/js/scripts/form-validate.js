const inputsTel = document.querySelectorAll('#inputTel')
const inputMask = new Inputmask('+7 (999) 999-99-99')

inputsTel.forEach(inputTel => {
  inputMask.mask(inputTel)
  console.log(inputTel)
})




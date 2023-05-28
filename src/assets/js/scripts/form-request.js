const TOKEN = "6253302835:AAGpJB0DzUacKKmLHJHmHLWR178mFVP1MN0";
const CHAT_ID = "-1001970829826";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const allFormsTg = document.querySelectorAll('#tg')

function showFormMessage(form) {
  if (form.getAttribute('data-form') === "modal") {
    document.querySelector('.modal-form__message').style.display = 'block'
  }
  if (form.getAttribute('data-form') === "firms") {
    document.querySelector('.form__message').style.display = 'block'
  }
  if (form.getAttribute('data-form') === "questions") {
    document.querySelector('.question__form-message').style.display = 'block'
  }
}

allFormsTg.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    let message = `<b>Заявка с сайта!</b>\n`;
  message+= `<b>Отправитель: </b> ${ this.name.value }\n`;
  message+= `<b>Телефон: </b> ${ this.number.value }\n`;
  message+= `<b>Тип: </b> ${ this.getAttribute('data-form') }`;
  
  console.log(message)
  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then((res)=>{
    this.name.value = ""
    this.number.value = ""
  })
  .catch((err)=>{
    console.error(err)
  })
  .finally(()=>{
    console.log("End");
  })
  showFormMessage(form)
  })

})





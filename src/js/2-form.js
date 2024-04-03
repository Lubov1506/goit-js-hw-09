const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const textareaMsg = form.elements.message;

inputEmail.value = localStorage.getItem('email') ?? '';
textareaMsg.value = localStorage.getItem('message') ?? '';

form.addEventListener('input', ({ target: { name, value } }) => {
  localStorage.setItem([name], value);
});
form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
  form.reset();
});

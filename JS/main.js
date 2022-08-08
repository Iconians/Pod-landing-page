const emptyEmail = 'Oops! Please add your email';
const emailFormattedWrong = 'Oops! Please check your email';
const submitForm = document.querySelector('form');
const email = document.getElementById('email')
const error = document.getElementById('errorMessage');
const emailRegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

window.addEventListener('load', () => {
  const test = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = test ? 'valid email-input' : 'invalid email-input';
});

email.addEventListener('input', () => {
  const test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = 'valid email-input';
    error.textContent = "";
    error.className = 'error';
  } else {
    email.className = 'invalid email-input';
  }
});

submitForm.addEventListener('submit', (event) => {
  const test1 = email.value.length === 0;
  const test2 = emailRegExp.test(email.value);
  if (test1) {
    email.className = 'invalid email-input';
    error.textContent = emptyEmail;
    error.className = 'error active error-message';
    event.preventDefault()
  }
  else if (!test2) {
  email.className = 'invalid email-input';
  error.textContent = emailFormattedWrong;
  error.className = 'error active error-message';
  event.preventDefault()
  }
  else {
    email.className = 'valid email-input';
    error.textContent = '';
    error.className = 'error-message'
  }
});

const form = document.getElementById('contact-form');
const response = document.getElementById('form-response');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  response.textContent = 'Thank you! Your message has been received.';
  response.style.color = '#a5f3fc';

  form.reset();
});

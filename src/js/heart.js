document
  .querySelectorAll('.heart, .heart-button')
  .forEach(button => button.addEventListener('click', e => button.classList.toggle('active')));

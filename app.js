const questionContainers = document.querySelectorAll('.question-container');
const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');

plusBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const element = e.currentTarget.parentElement.parentElement.parentElement;
    element.classList.add('show-text');
  });
});

minusBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const element = e.currentTarget.parentElement.parentElement.parentElement;
    element.classList.remove('show-text');
  });
});

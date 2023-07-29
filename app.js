const questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach((question) => {
  const btn = question.querySelector('span');
  btn.addEventListener('click', () => {
    questionContainers.forEach((question) => {
      if (question == btn.parentElement.parentElement) {
        question.classList.toggle('show-text');
      } else {
        question.classList.remove('show-text');
      }
    });
  });
});

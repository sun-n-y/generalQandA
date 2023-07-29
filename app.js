const questionContainers = document.querySelectorAll('.question-container');
const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');

questionContainers.forEach((question) => {
  const btn = question.querySelector('span');
  btn.addEventListener('click', (e) => {
    question.classList.toggle('show-text');
  });
});

// plusBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const element = e.currentTarget.parentElement.parentElement.parentElement;
//     element.classList.add('show-text');
//     questionContainers.forEach((question) => {
//       console.log(question);
//     });
//   });
// });

// minusBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const element = e.currentTarget.parentElement.parentElement.parentElement;
//     element.classList.remove('show-text');
//   });
// });

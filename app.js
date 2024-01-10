// document.addEventListener('DOMContentLoaded', function() {
//     const questions = document.querySelectorAll('.question');

//     questions.forEach(question => {
//         const h2 = question.querySelector('h2');
//         const plusIcon = h2.querySelector('.plus-icon');
//         const minusIcon = h2.querySelector('.minus-icon');
//         const answer = question.querySelector('p');

//         h2.addEventListener('click', () => {
//             if (answer.style.display === 'block') {
//                 answer.style.display = 'none';
//                 plusIcon.style.display = 'inline-block';
//                 minusIcon.style.display = 'none';
//             } else {
//                 answer.style.display = 'block';
//                 plusIcon.style.display = 'none';
//                 minusIcon.style.display = 'inline-block';
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
      const h2 = question.querySelector('h2');
      const plusIcon = h2.querySelector('.plus-icon');
      const minusIcon = h2.querySelector('.minus-icon');
      const answer = question.querySelector('.answer');
  
      h2.addEventListener('click', () => {
        if (answer.classList.contains('active')) {
          answer.classList.remove('active');
          plusIcon.style.display = 'inline-block';
          minusIcon.style.display = 'none';
        } else {
          answer.classList.add('active');
          plusIcon.style.display = 'none';
          minusIcon.style.display = 'inline-block';
        }
      });
    });
  });
  

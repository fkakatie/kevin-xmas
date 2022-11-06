const win = () => {
  const gradeBtn = document.getElementById('grade');
  gradeBtn.setAttribute('aria-hidden', true);
  const success = document.querySelector('.success');
  success.setAttribute('aria-hidden', false);
}

const gradeQuiz = () => {
  const questions = document.querySelectorAll('.question');
  const answers = ['calcium', 'icosahedron', 'score'];
  let correct = 0;
  questions.forEach((q) => {
    const options = q.querySelectorAll('input[type="radio"]');
    const answer = [...options].find((radio) => radio.checked);
    if (answer && answer.value && answers.includes(answer.value)) { // correct
      q.classList.remove('wrong');
      answer.closest('div').classList.add('correct');
      options.forEach((option) => {
        if (!option.checked) option.disabled = true;
      });
      correct++;
    } else { // incorect
      q.classList.add('wrong');
      answer.disabled = true;
      answer.closest('label').classList.add('disabled');
    }
  });
  if (correct === answers.length) win();
}

const getEmail = () => {
  const emailEl = document.getElementById('email');
  const email = emailEl.value.trim();
  if (email === '') emailEl.classList.add('error');
  return email;
}

const checkSubmission = (e) => {
  e.preventDefault();
  const email = getEmail();
  if (email !== '') submitForm(email);
}

const submitForm = async(email) => {
  const url = `https://script.google.com/macros/s/AKfycbybYaCQCwDbku8XJSCiJVWz5Lua1ny2aCD4uIvEexMOelvnaqtyUfNj7MH6eC_38MBv/exec?email=${email}`;
  const req = await fetch(url);
  const res = await req.json();
  alert(res.response);
}

window.addEventListener('load', (e) => {
  const gradeBtn = document.getElementById('grade');
  gradeBtn.addEventListener('click', gradeQuiz);
  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', checkSubmission);
});

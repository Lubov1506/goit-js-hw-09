const feedbackForm = document.querySelector('.feedback-form');

let userData = JSON.parse(localStorage.getItem('userFeedbackInfo')) ?? {};

const onFeedbackFields = () => {
  try {
    if (userData === null) {
      return;
    }
    for (const key in userData) {
      feedbackForm.elements[key].value = userData[key];
    }
  } catch (e) {
    console.log(e.message);
  }
};
onFeedbackFields();

const onFeedbackInput = e => {
  const { name, value } = e.target;
  userData[name] = value.trim();

  localStorage.setItem('userFeedbackInfo', JSON.stringify(userData));
};

const onFeedbackFormSumbit = e => {
  e.preventDefault();
  const { email, message } = feedbackForm.elements;
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Fill in all fields!');
    return;
  }

  const userDataForm = {
    [email.name]: email.value.trim(),
    [message.name]: message.value.trim(),
  };

  console.log(userDataForm);
  localStorage.removeItem('userFeedbackInfo');
  feedbackForm.reset();
};
feedbackForm.addEventListener('input', onFeedbackInput);
feedbackForm.addEventListener('submit', onFeedbackFormSumbit);

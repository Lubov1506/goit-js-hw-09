const feedbackForm = document.querySelector('.feedback-form');

let userData = JSON.parse(localStorage.getItem('userFeedbackInfo')) ?? {};

const onFeedbackFields = () => {
  try {
    const userDataFromJS = JSON.parse(localStorage.getItem('userFeedbackInfo'));
    if (userDataFromJS === null) {
      return;
    }
    for (const key in userDataFromJS) {
      feedbackForm.elements[key].value = userDataFromJS[key];
    }
  } catch (e) {
    console.log(e.message);
  }
};
onFeedbackFields();

const onFeedbackInput = e => {
  const { name, value } = e.target;
  userData[name] = value;

  localStorage.setItem('userFeedbackInfo', JSON.stringify(userData));
};
const onFeedbackFormSumbit = e => {
  e.preventDefault();

  localStorage.removeItem('userFeedbackInfo');
  feedbackForm.reset();
};
feedbackForm.addEventListener('input', onFeedbackInput);
feedbackForm.addEventListener('submit', onFeedbackFormSumbit);

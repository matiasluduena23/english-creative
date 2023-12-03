const dialog = document.querySelector('dialog');
const btnClose = document.querySelector('.close');
const btnSurvey = document.querySelector('.survey');
const btnSend = document.querySelector('.submit');
const radioYes = document.querySelector('#hablo-ingles-yes');
const radioNo = document.querySelector('#hablo-ingles-no');
const sectionQuestions = document.querySelector('.questions');

btnSurvey.addEventListener('click', () => {
    dialog.showModal();
});

btnClose.addEventListener('click', () => {
    dialog.close();
});

radioNo.addEventListener('click', () => {
    sectionQuestions.style.display = 'block';
});

radioYes.addEventListener('click', () => {
    sectionQuestions.style.display = 'none';
});

function uncheckRadios() {
    radioYes.checked = false;
    radioNo.checked = false;
}

window.addEventListener('DOMContentLoaded', uncheckRadios);

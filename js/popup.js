let btnCostCalculation = document.querySelector('.popup_cost_calculation'),
    popupFeedbackForm = document.querySelector('.popup_form_wrapper'),
    body = document.querySelector('body'),
    closePopupBtn = document.querySelector('.close_popup');

btnCostCalculation.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);

function openPopup() {
    body.classList.add('body_overflow');
    popupFeedbackForm.classList.add('popup_form_wrapper_visible');
}
function closePopup() {
    body.classList.remove('body_overflow');
    popupFeedbackForm.classList.remove('popup_form_wrapper_visible');
}
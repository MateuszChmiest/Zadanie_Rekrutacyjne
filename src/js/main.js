const popup = document.querySelector('.popup')
const button = document.getElementById('counterButton');
const close = document.getElementById('close');
const popupLabel = document.getElementById('popup-label');
const reset = document.getElementById('resetButton');

const handleToggle = () => {
    popup.classList.toggle('active');
    popupLabel.classList.toggle('active-label')
}

const handleClose = (event) => {
    if (event.target.closest('#popup-label')) {
        return;
    }
    handleToggle()
}

button.addEventListener('click', handleToggle);
close.addEventListener('click', handleToggle);
popup.addEventListener('click', handleClose);

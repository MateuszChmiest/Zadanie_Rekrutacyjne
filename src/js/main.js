const popup = document.querySelector('.popup')
const button = document.getElementById('counterButton');
const close = document.getElementById('close');
const popupLabel = document.getElementById('popup-label')

const show = () => {
    popup.classList.toggle('active');
    popupLabel.classList.toggle('active-label')
}

button.addEventListener('click', () => {
    show();
})

close.addEventListener('click', () => {
    show();
})
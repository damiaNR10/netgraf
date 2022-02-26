const burgerButton = document.querySelector('.burgermenu');
const navigation = document.querySelector('.nav');

burgerButton.addEventListener('click', () => {
    //burgerButton.classList.contains('burgermenu--active') ? burgerButton.classList.remove('burgermenu--active') : burgerButton.classList.add('burgermenu--active');
    navigation.classList.contains('nav--active') ? navigation.classList.remove('nav--active') : navigation.classList.add('nav--active');
})
const searchButton = document.querySelector('.mobile-nav__a--js');
const mobileSearch = document.querySelector('.mobile-search--js');

mobileSearchVisibilityToggle = () => {
    mobileSearch.classList.toggle('mobile-search--active');
}

hideMobileSearch = () => {
    if(mobileSearch.classList.contains('mobile-search--active')) mobileSearch.classList.remove('mobile-search--active');
}

if(searchButton && mobileSearch) searchButton.addEventListener('click', mobileSearchVisibilityToggle);
window.addEventListener('resize', hideMobileSearch);
const sliderImages = document.querySelectorAll('.slider__img');
let index = 0;

if(sliderImages) window.setInterval(() => {

    if(index === 0) {
        sliderImages[0].classList.remove('slider__img--1');
        sliderImages[0].classList.add('slider__img--3');
        sliderImages[1].classList.add('slider__img--1');
        sliderImages[1].classList.remove('slider__img--2');
        sliderImages[2].classList.add('slider__img--2');
        sliderImages[2].classList.remove('slider__img--3');
        index++;
    } else if(index === 1) {
        sliderImages[1].classList.remove('slider__img--1');
        sliderImages[1].classList.add('slider__img--3');
        sliderImages[2].classList.add('slider__img--1');
        sliderImages[2].classList.remove('slider__img--2');
        sliderImages[0].classList.add('slider__img--2');
        sliderImages[0].classList.remove('slider__img--3');
        index++
    } else if(index === 2) {
        sliderImages[2].classList.remove('slider__img--1');
        sliderImages[2].classList.add('slider__img--3');
        sliderImages[0].classList.add('slider__img--1');
        sliderImages[0].classList.remove('slider__img--2');
        sliderImages[1].classList.add('slider__img--2');
        sliderImages[1].classList.remove('slider__img--3');
        index = 0;
    }
}, 3000);
import './normalize.css';
import './style.scss';


import { initRouter } from './js/router';

const init = () => {
    initRouter();
}

init();


import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const thumb = new Swiper(".product__slider-thumbnails", {
    slidesPerView: 4,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            spaceBetween: 14
        },
        1024: {
            spaceBetween: 12
        },
        1440: {
            spaceBetween: 16
        }
    }
});

const swiper = new Swiper(".product__slider-big", {
    spaceBetween: 0,
    loop: true,
    modules: [ Navigation, Thumbs ],
    navigation: {
        nextEl: ".slider__arrow-right",
        prevEl: ".slider__arrow-left",
    },
    thumbs: {
        swiper: thumb
    }
});
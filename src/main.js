import './normalize.css';
import './style.scss';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper(".product__slider", {
    spaceBetween: 10,
    modules: [ Navigation ],
    navigation: {
        nextEl: ".slider__arrow-right",
        prevEl: ".slider__arrow-left",
    }
});


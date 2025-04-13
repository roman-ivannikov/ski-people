import { layout } from "./layout";

export const product = () => {

    const el = document.createElement('section');
    el.classList.add('product');

    const child = `
    <h2 class="product__title">Горные лыжи</h2>
        <div class="product__body">
        <div class="product__slider">
            <div class="product__slider-big slider swiper">
            <div class="slider__body swiper-wrapper">
                <div class="swiper-slide">
                <img src="img/slider/ski_big.jpg" alt="Фото товара большое" class="slider__image">
                </div>
                <div class="swiper-slide">
                <img src="img/slider/ski_big.jpg" alt="Фото товара большое" class="slider__image">
                </div>
                <div class="swiper-slide">
                <img src="img/slider/ski_big.jpg" alt="Фото товара большое" class="slider__image">
                </div>
                <div class="swiper-slide">
                <img src="img/slider/ski_big.jpg" alt="Фото товара большое" class="slider__image">
                </div>
            </div>
            <button class="slider__arrow slider__arrow-left" type="button">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.86395 7.0001L7.52528 1.1821C7.5719 1.13522 7.60874 1.07955 7.6337 1.01833C7.65866 0.957109 7.67122 0.891546 7.67068 0.825436C7.67013 0.759326 7.65647 0.693981 7.6305 0.633183C7.60453 0.572385 7.56676 0.517341 7.51938 0.471236C7.472 0.425131 7.41594 0.388881 7.35445 0.364583C7.29297 0.340285 7.22727 0.328422 7.16117 0.32968C7.09507 0.330939 7.02988 0.345294 6.96936 0.371914C6.90885 0.398535 6.85421 0.436893 6.80862 0.484768L0.808619 6.65143C0.717804 6.74478 0.666992 6.86987 0.666992 7.0001C0.666992 7.13033 0.717804 7.25542 0.808619 7.34877L6.80862 13.5154C6.85421 13.5633 6.90885 13.6017 6.96936 13.6283C7.02988 13.6549 7.09507 13.6693 7.16117 13.6705C7.22727 13.6718 7.29297 13.6599 7.35445 13.6356C7.41594 13.6113 7.472 13.5751 7.51938 13.529C7.56676 13.4829 7.60453 13.4278 7.6305 13.367C7.65647 13.3062 7.67013 13.2409 7.67068 13.1748C7.67122 13.1087 7.65866 13.0431 7.6337 12.9819C7.60874 12.9207 7.5719 12.865 7.52528 12.8181L1.86395 7.0001Z" />
                </svg>
            </button>
            <button class="slider__arrow slider__arrow-right" type="button">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.13605 7.0001L0.474715 1.1821C0.428104 1.13522 0.391255 1.07955 0.366299 1.01833C0.341343 0.957109 0.328775 0.891546 0.329325 0.825436C0.329874 0.759326 0.343529 0.693981 0.369498 0.633183C0.395468 0.572385 0.433237 0.517341 0.48062 0.471236C0.528004 0.425131 0.58406 0.388881 0.645545 0.364583C0.70703 0.340285 0.772725 0.328422 0.838826 0.32968C0.904926 0.330939 0.97012 0.345294 1.03064 0.371914C1.09115 0.398535 1.14579 0.436893 1.19138 0.484768L7.19138 6.65143C7.2822 6.74478 7.33301 6.86987 7.33301 7.0001C7.33301 7.13033 7.2822 7.25542 7.19138 7.34877L1.19138 13.5154C1.14579 13.5633 1.09115 13.6017 1.03064 13.6283C0.97012 13.6549 0.904926 13.6693 0.838826 13.6705C0.772725 13.6718 0.70703 13.6599 0.645545 13.6356C0.58406 13.6113 0.528004 13.5751 0.48062 13.529C0.433237 13.4829 0.395468 13.4278 0.369498 13.367C0.343529 13.3062 0.329874 13.2409 0.329325 13.1748C0.328775 13.1087 0.341343 13.0431 0.366299 12.9819C0.391255 12.9207 0.428104 12.865 0.474715 12.8181L6.13605 7.0001Z"/>
                </svg>
            </button>
            </div>
            <div thumbsSlider="" class="product__slider-thumbnails swiper">
            <ul class="slider__thumbnails swiper-wrapper">
                <li class="slider__thumbnails-item swiper-slide">
                <img src="img/slider/ski_small.jpg" alt="Фото товара малое" class="slider__thumbnails-image">
                </li>
                <li class="slider__thumbnails-item swiper-slide">
                <img src="img/slider/ski_small.jpg" alt="Фото товара малое" class="slider__thumbnails-image">
                </li>
                <li class="slider__thumbnails-item swiper-slide">
                <img src="img/slider/ski_small.jpg" alt="Фото товара малое" class="slider__thumbnails-image">
                </li>
                <li class="slider__thumbnails-item swiper-slide">
                <img src="img/slider/ski_small.jpg" alt="Фото товара малое" class="slider__thumbnails-image">
                </li> 
            </ul>
            </div>
        </div>
        <div class="product__info">
            <p class="product__price">5&nbsp;000&nbsp;₽</p>
            <p class="product__id badge-id">арт. 84348945757</p>
            <div class="product__char">
            <h3 class="product__char-title">Общие характеристики</h3>
            <div class="product__char-table table">
                <div class="table__row">
                <div class="table__column table__column-left">Коллекция</div>
                <div class="table__column table__column-right">Snow</div>
                </div>
                <div class="table__row">
                <div class="table__column table__column-left">Производитель</div>
                <div class="table__column table__column-right">Россия</div>
                </div>
                <div class="table__row">
                <div class="table__column table__column-left">Гарантия</div>
                <div class="table__column table__column-right">18 мес.</div>
                </div>
                <div class="table__row">
                <div class="table__column table__column-left">Срок службы</div>
                <div class="table__column table__column-right">5 лет</div>
                </div>
                <div class="table__row">
                <div class="table__column table__column-left">Цвет</div>
                <div class="table__column table__column-right">Синий</div>
                </div>
                <div class="table__row">
                <div class="table__column table__column-left">Макс. нагрузка</div>
                <div class="table__column table__column-right">130 кг</div>
                </div>
            </div>
            </div>
            <div class="product__action">
            <button class="btn product__btn" type="button">В корзину</button>
            <button class="btn-like product__like">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            </div>  
        </div>
    </div>
    `;

    el.append(layout(child));

    return el;
}
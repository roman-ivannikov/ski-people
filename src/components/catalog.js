import { layout } from "./layout";

export const catalog = () => {

    const el = document.createElement('div');
    el.classList.add('catalog');

    const child = `
    <ul class="catalog__list">
        <li class="catalog__item catalog__item-current"><a href="#" class="catalog__link">Все</a></li>
        <li class="catalog__item"><a href="#" class="catalog__link">Лыжи</a></li>
        <li class="catalog__item"><a href="#" class="catalog__link">Сноуборды</a></li>
        <li class="catalog__item"><a href="#" class="catalog__link">Экипировка</a></li>
        <li class="catalog__item"><a href="#" class="catalog__link">Ботинки</a></li>
    </ul>
    `;

    el.append(layout(child));

    return el;
}
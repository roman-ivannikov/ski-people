import { layout } from "./layout";

export const order = () => {

    const el = document.createElement('section');
    el.classList.add('order');

    const child = `
    <div class="order__wrapper">
        <div class="order__summary">
            <p class="order__title">Заказ успешно размещен</p>
            <p class="order__sum">20&nbsp;000&nbsp;₽</p>
            <div class="order__number">
            <p class="badge-id">№43435</p>
            </div>
        </div>
        <div class="order__info">
            <p class="order__subtitle">Данные доставки</p>
            <div class="order__char table">
            <div class="table__row">
                <div class="table__column table__column-left">Получатель</div>
                <div class="table__column table__column-right">Иванов Петр Александрович</div>
            </div>
            <div class="table__row">
                <div class="table__column table__column-left">Телефон</div>
                <div class="table__column table__column-right">+7 (737) 346 23 00</div>
            </div>
            <div class="table__row">
                <div class="table__column table__column-left">E-mail</div>
                <div class="table__column table__column-right">Ivanov84@gmail.com</div>
            </div>
            <div class="table__row">
                <div class="table__column table__column-left">Адрес доставки</div>
                <div class="table__column table__column-right">Москва, ул. Ленина, 21, кв. 33</div>
            </div>
            <div class="table__row">
                <div class="table__column table__column-left">Способ оплаты</div>
                <div class="table__column table__column-right">Картой при получении</div>
            </div>
            <div class="table__row">
                <div class="table__column table__column-left">Способ получения</div>
                <div class="table__column table__column-right">Доставка</div>
            </div>
            </div>
        </div>
        <a href="/" class="btn order__btn">На главную</a>  
    </div>
    `;

    el.append(layout(child, 'order__container'));

    return el;
}
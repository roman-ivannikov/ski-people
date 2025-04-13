import { layout } from "./layout";

export const cart = () => {

    const el = document.createElement('section');
    el.classList.add('cart');

    const child = `
    <h2 class="cart__title">Корзина</h2>
    <div class="cart__body">
        <ul class="cart__list">
            <li class="cart__item">
            <img src="/img/ski_mini.jpg" alt="Лыжи" class="cart__item-image">
            <p class="cart__item-title">Горные лыжи</p>
            <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
            <p class="cart__item-id">арт. 84348945757</p>
            <div class="cart__item-action count">
                <button class="count__minus" type="button">-</button>
                <p class="count__num">1</p>
                <button class="count__plus" type="button">+</button>
            </div>
            </li>
            <li class="cart__item">
            <img src="/img/equipment_mini.jpg" alt="Экипировка" class="cart__item-image">
            <p class="cart__item-title">Экипировка</p>
            <p class="cart__item-price">10&nbsp;000&nbsp;₽</p>
            <p class="cart__item-id">арт. 84348945757</p>
            <div class="cart__item-action count">
                <button class="count__minus" type="button">-</button>
                <p class="count__num">2</p>
                <button class="count__plus" type="button">+</button>
            </div>
            </li>
            <li class="cart__item">
            <img src="/img/snowboard_mini.jpg" alt="Сноуборд" class="cart__item-image">
            <p class="cart__item-title">Сноуборд</p>
            <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
            <p class="cart__item-id">арт. 84348945757</p>
            <div class="cart__item-action count">
                <button class="count__minus" type="button">-</button>
                <p class="count__num">1</p>
                <button class="count__plus" type="button">+</button>
            </div>
            </li>
        </ul>

        <form action="#" method="POST" class="cart__form" id="orderForm">
            <fieldset class="cart__form-group cart__form-inputs">
            <legend class="cart__form-legend">Данные для доставки</legend>
            <input type="text" name="name" class="cart__form-input" placeholder="Фамилия Имя Отчество">
            <input type="tel" name="tel" class="cart__form-input" placeholder="Телефон">
            <input type="email" name="email" class="cart__form-input" placeholder="E-mail">
            <input type="text" name="address" class="cart__form-input" placeholder="Адрес доставки">
            <textarea name="comment" id="comment" class="cart__form-input" placeholder="Комментарий к заказу" rows="7"></textarea>
            </fieldset>
            <fieldset class="cart__form-group cart__form-rbs">
            <legend class="cart__form-legend">Доставка</legend>
            <label class="cart__form-label">
                <input type="radio" class="cart__form-radio" value="company" name="delivery">
                Доставка
            </label>
            <label class="cart__form-label">
                <input type="radio" class="cart__form-radio" value="self" name="delivery">
                Самовывоз
            </label>
            </fieldset>
            <fieldset class="cart__form-group cart__form-rbs">
            <legend class="cart__form-legend">Оплата</legend>
            <label class="cart__form-label">
                <input type="radio" class="cart__form-radio" value="card" name="payment">
                Картой при получении
            </label>
            <label class="cart__form-label">
                <input type="radio" class="cart__form-radio" value="cash" name="payment">
                Наличными при получении
            </label>
            </fieldset>
        </form>

        <div class="cart__info">
            <p class="cart__info-title">Оформление</p>
            <div class="cart__info-summary">
            <span>4 товара на сумму:</span>
            <span>20&nbsp;000&nbsp;₽</span>
            </div>
            <p class="cart__info-delivery">Доставка 0&nbsp;₽</p>
            <button class="btn cart__info-btn" type="submit" form="orderForm">Оформить заказ</button>
        </div>
    
    </div>
    `;

    el.append(layout(child));

    return el;
}
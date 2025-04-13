import { catalog } from "./catalog";
import { breadcrumb } from "./breadcrumb";
import { goods } from "./goods";
import { cart } from "./cart";
import { order } from "./order";
import { product } from "./product";

export const main = () => {

    const el = document.createElement('main');
    el.classList.add('main');
    el.append(catalog());

    return el;
}
import Navigo from "navigo";
import { header } from "../components/header";
import { main } from "../components/main";
import { footer } from "../components/footer";

const router = new Navigo(
    '/',
    { linksSelector: 'a[href^="/"]' }
);


export const initRouter = () => {
    router
        .on('/', () => {
            document.body.append(
                header(),
                main(),
                footer()
            );
            
            console.log('HOME');
        })
        .on('/favorites', () => {
            console.log('FAVORITES');
        })
        .notFound(() => {
            console.log('ERROR 404');
        })

        router.resolve();
}
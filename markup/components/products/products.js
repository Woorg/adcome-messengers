

export default function productActive() {
    const el = document.querySelectorAll('.products__list .products__item');
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = function () {
            let c = 0;
            while (c < el.length) {
                el[c++].className = 'products__item';
            }
            el[i].className = 'products__item products__item_active';
        };
    }

}

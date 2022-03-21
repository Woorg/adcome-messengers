

export default function productActive() {

    var elements = document.getElementsByClassName("products__item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {

            var el = elements[0];
            while (el) {
                if (el.tagName === "DIV") {
                    el.classList.remove("products__item_active");
                }
                el = el.nextSibling;
            }

            this.classList.add("products__item_active");
        };
    }

    const el = document.querySelectorAll('.products__list .products__item');
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = function () {
            let c = 0;
            while (c < el.length) {
                el[c++].className = 'products__item';
            }
            el[i].className = 'products__item products__item_active ';
        };
    }

}

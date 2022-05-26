import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
    const form = document.querySelector(selector);
    const telSelector = form.querySelector('.form__input_phone');


    if (!form) {
        console.error('Нет такого селектора!');
        return false;
    }

    if (!rules) {
        console.error('Вы не передали правила валидации!');
        return false;
    }

    if (telSelector) {
        const inputMask = new Inputmask('+7 (999) 999-99-99');
        inputMask.mask(telSelector);


    }

    const validation = new JustValidate(selector);

    for (let item of rules) {
        validation.addField(item.ruleSelector, item.rules);
    }



    validation.onSuccess((ev) => {
        let formData = new FormData(ev.target);

        let xhr = new XMLHttpRequest();

        console.log(ev);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (afterSend) {
                        afterSend();
                    }
                    console.log('Отправлено');
                }
            }
        };

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        ev.target.reset();
    });

};


export const validateFormsEn = (selector, rules, afterSend) => {
    const form = document.querySelector(selector);
    const telSelector = form.querySelector('.form__input_phone');


    if (!form) {
        console.error('Нет такого селектора!');
        return false;
    }

    if (!rules) {
        console.error('Вы не передали правила валидации!');
        return false;
    }

    if (telSelector) {
        const inputMask = new Inputmask('+9 (999) 999-99-99');
        inputMask.mask(telSelector);


    }

    const validation = new JustValidate(selector);

    for (let item of rules) {
        validation.addField(item.ruleSelector, item.rules);
    }

    validation.onSuccess((ev) => {
        let formData = new FormData(ev.target);

        let xhr = new XMLHttpRequest();

        console.log(ev);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (afterSend) {
                        afterSend();
                    }
                    console.log('Отправлено');
                }
            }
        };

        xhr.open('POST', 'mail_en.php', true);
        xhr.send(formData);

        ev.target.reset();
    });

};

import svg4everybody from 'svg4everybody';
import LazyLoad from 'vanilla-lazyload';
// import header from '../../components/header/header';
// import { casesSlider, casesListToggle } from '../../components/cases/cases';
import Nav from '../../components/nav/nav';
import productActive from '../../components/products/products';

// import tabs from '../../components/tabs/tabs';

import { validateForms, validateFormsEn } from '../../components/form/form';

// import {pageWidget} from '../../components/page-widget/page-widget';

document.addEventListener('DOMContentLoaded', function (event) {

    svg4everybody();

    let styles = [
        'padding: 2px 9px',
        'background: #2948ff',
        'color: #fff',
        'line-height: 1.56',
        'font-size: 16px',
    ].join('');

    console.log('%c Developed by igor gorlov https://igorlov.ru', styles);


    /*
        Lazyload images
    */

    let lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        threshold: 0,
        // load_delay: 300,
        use_native: true
    });

    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }


    /*
        Nav
    */

    const nav = new Nav();

    // Products active

    productActive();


    const rulesRu = [
        {
            ruleSelector: '.form__input',
            rules: [
                {
                    rule: 'minLength',
                    value: 2,
                    errorMessage: 'Поле должно содержать минимум 2 символа'
                },
                {
                    rule: 'maxLength',
                    value: 30,
                    errorMessage: 'Поле может содержать максимум 30 символов'
                },
                {
                    rule: 'required',
                    value: true,
                    errorMessage: 'Заполните имя!'
                }
            ]
        },
        {
            ruleSelector: '.form__input_phone',
            telError: 'Введите корректный телефон',
            rules: [
                {
                    rule: 'required',
                    value: true,
                    errorMessage: 'Заполните телефон!'
                },
                {
                    rule: 'customRegexp',

                    value: /^(\+{0,})(\d{0,}) ([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
                    errorMessage: 'Введите корректный телефон',
                },
            ]
        },
    ];

    const rulesEn = [
        {
            ruleSelector: '.form__input',
            rules: [
                {
                    rule: 'minLength',
                    value: 2
                },
                {
                    rule: 'required',
                    value: true,
                    // errorMessage: 'Заполните имя!'
                }
            ]
        },
        {
            ruleSelector: '.form__input_phone',
            rules: [
                {
                    rule: 'required',
                    value: true,
                    errorMessage: ''
                },
                {
                    rule: 'customRegexp',
                    value: /^(\+{0,})(\d{0,}) ([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,

                    errorMessage: 'Enter a valid phone number',
                },

            ]
        },
    ];



    const afterForm = () => {
        const form = document.querySelector('.form_ru');
        let message = document.createElement('p');
        message.classList.add('form__send-message');
        form.append( message );
        message.innerHTML = 'Ваше сообщение успешно отправлено!';
    };

    const afterFormEn = () => {
        const form = document.querySelector('.form_en');
        let message = document.createElement('p');
        message.classList.add('form__send-message');
        form.append( message );
        message.innerHTML = 'Your message was successfully sent!';
    };

    // const afterFormSecond = () => {
    //     const form = document.querySelector('.form_second_ru');
    //     let message = document.createElement('p');
    //     message.classList.add('form__send-message');
    //     form.append( message );
    //     message.innerHTML = 'Ваше сообщение успешно отправлено!';
    // };

    // const afterFormEnSecond = () => {
    //     const form = document.querySelector('.form_second_en');
    //     let message = document.createElement('p');
    //     message.classList.add('form__send-message');
    //     form.append( message );
    //     message.innerHTML = 'Your message was successfully sent!';
    // };

    if ( document.body.contains(document.querySelector('.form_ru')) ) {
        validateForms('.form_ru', rulesRu, afterForm);
    }

    if ( document.body.contains(document.querySelector('.form_en')) ) {
        validateFormsEn('.form_en', rulesEn, afterFormEn);
    }

    // if ( document.body.contains(document.querySelector('.form_second_ru')) ) {
    //     validateForms('.form_second_ru', rulesRu, afterFormSecond);

    // }

    // if ( document.body.contains(document.querySelector('.form_second_en')) ) {
    //     validateFormsEn('.form_second_en', rulesEn, afterFormEnSecond);

    // }



});

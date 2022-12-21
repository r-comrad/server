import { Site } from './classes/site.js';
import { model } from './model.js'
// import { templates } from './templates.js'
// import './main.css'

'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

// const $site = document.querySelector('#site')
// model.forEach(block => {
//     const toHtml = templates[block.type]
//     if (toHtml) {
//         $site.insertAdjacentHTML('beforeend', toHtml(block))
//     }
//     else {
//         console.log("ERROR no html function")
//     }
// })

// const $site = document.querySelector('#site')
// model.forEach(block => {
//     $site.insertAdjacentHTML('beforeend', block.toHTML())
// })


const site = new Site('#site')
site.render(model)
import { button } from '/static/js/utils.js'

export class Button {
    constructor(name, text, functor) {
        this.name = name
        this.text = text
        this.functor = functor
    }

    toHTML() {
        const html = button(this.name, this.text);
        console.log(html);
        console.log('.' + this.name);
        const switcher = document.querySelector('.' + this.name);
        // functor(switcher)
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
        return html
    }

    addListener()
    {
        console.log(html);
        console.log('.' + this.name);
        const switcher = document.querySelector('.' + this.name);
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
    }
}

// switcher.addEventListener('click', function () {
//     document.body.classList.toggle('light-theme');
//     document.body.classList.toggle('dark-theme');

//     const className = document.body.className;
//     if (className == "light-theme") {
//         this.textContent = "Dark";
//     } else {
//         this.textContent = "Light";
//     }

//     console.log('current class name: ' + className);
// });
import { button, themeButton } from '/static/js/utils.js'

const dark = 'dark-theme'
const light = 'light-theme'

export class ThemeButton {
    constructor() {
        this.$el = document.querySelector('#ThemeButton')

        this.$el.insertAdjacentHTML('afterbegin', this.toHTML())
        console.log(this.$el)

        const theme = document.querySelector('#theme')
        this.$el.addEventListener('click', this.addListener.bind(theme))
    }

    toHTML() {
        //const btn = themeButton('ThemeButton', this.setName(this.$el.className));
        // const btn = button('ThemeButton', this.setName(this.$el.className));
        const btn = button('ThemeButton');
        console.log(btn)
        return btn;
    }

    addListener() {
        this.classList.toggle('light-theme');
        this.classList.toggle('dark-theme');

        // console.log(this.$el.firstChild.firstChild);
        // this.$el.firstChild.firstChild.nodeValue = this.setName(this.$el.className)

        // console.log(this.$el);
        // console.log('current class name: ' + this.$el.className);
    }

    // setName(className) {
    //     // console.log(className);
    //     if (className == light) {
    //         return "Светлая";
    //     } else if (className == dark) {
    //        // return "static/resources/sun.png";
    //        return "Тёмная";
    //     }
    // }
}

//     constructor(text) {
//         this.text = text
//     }

//     toHTML() {
//         return button(this.name, this.text);
//     }

//     addListener() {
//         this.$el.classList.toggle('light-theme');
//         this.$el.classList.toggle('dark-theme');

//         const className = this.$el.className;
//         if (className == "light-theme") {
//             this.text = "Dark";
//         } else {
//             this.text = "Light";
//         }

//         console.log('current class name: ' + className);
//     }
// }

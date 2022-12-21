import { button } from '/static/js/utils.js'

export class ThemeButton {
    constructor(selector, text) {
        this.$el = document.querySelector(selector)
        this.text = text

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.toHTML())
        this.$el.addEventListener('click', this.addListener.bind(this))
    }

    toHTML() {
        return button(this.name, this.text);
    }

    addListener() {
        this.$el.classList.toggle('light-theme');
        this.$el.classList.toggle('dark-theme');

        const className = this.$el.className;
        if (className == "light-theme") {
            this.text = "Dark";
        } else {
            this.text = "Light";
        }

        console.log('current class name: ' + className);
    }
}

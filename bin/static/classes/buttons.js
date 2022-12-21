import { button, themeButton } from '/static/js/utils.js'

// const dark = 'dark-theme'
// const light = 'light-theme'

export class ThemeButton {
    constructor() {
    }

    toHTML() {
        // const button = document.querySelector('#ThemeButton')
        // console.log(button)
        return themeButton('ThemeButton');
    }

    addListener() {
        const theme = document.querySelector('#site')
        console.log(theme)
        const button = document.querySelector('#ThemeButton')
        console.log(button)
        button.addEventListener('click', this.listener.bind(theme))
    }

    listener() {
        console.log('shuh')
        this.classList.toggle('light-theme');
        this.classList.toggle('dark-theme');
    }
}

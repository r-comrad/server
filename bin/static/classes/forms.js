import { Block } from './blocks.js'
import { formGroup } from '/static/js/form.js'
import { div } from '/static/js/utils.js'

export class Form extends Block {
    constructor(value, options = {}) {
        super(value, options)

        // this.$el = document.querySelector(selector)

        // const doc = document.querySelector('#site')
        // let html = ""
        // this.value.forEach(Block => {

        //     html += formGroup(Block.type, Block.text)
        // })

        // html += '<input class="btn btn-success w-100" type="submit" value="Войти">'

        // doc.insertAdjacentHTML('beforeend', div('auntification', html))
    }

    toHTML() {
        let html = ""
        this.value.forEach(Block => {

            html += formGroup(Block.type, Block.text)
        })

        html += '<input class="btn btn-success w-100" type="submit" value="Войти">'

        return div('auntification', html)
    }

    addListener() {
    }
}

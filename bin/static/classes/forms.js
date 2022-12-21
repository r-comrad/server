import { Block } from './blocks.js'
import { formGroup } from '/static/js/form.js'
import { div, form } from '/static/js/utils.js'

export class Form extends Block {
    constructor(value, options = {}) {
        super(value, options)
    }

    toHTML() {
        let html = ""
        this.value.forEach(Block => {

            html += formGroup(Block.type, Block.text)
        })

        html += '<input class="btn btn-success w-100" type="submit" value="Войти">'
        //html += '<button type="submit" class="btn btn-primary btn-sm">Войти</button>'

        return form('auntification', html)
    }

    addListener() {
        const auntif = document.querySelector('.auntification');
        // console.log(auntif)
        auntif.addEventListener('submit', this.listener)
    }

    listener(event) {
        event.preventDefault()
        console.log('rarr')
    }
}

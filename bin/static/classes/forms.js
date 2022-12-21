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
        auntif.action = 'static/resources/1.gif';
        form.method = 'GET';

        // console.log(auntif)
        auntif.addEventListener('submit', this.listener)
    }

    listener(event) {
        //const auntif = document.querySelector('.auntification');
        event.preventDefault()
        console.log('rarr')
        console.log(event.target)
        console.log(event.target.submit)
        console.log(event.target.login.value)
        console.log(event.target.password.value)

        // var mytext = document.getElementById("mytext").value;
        // localStorage.setItem("login", event.target.login.value);
        // localStorage.setItem("password", event.target.password.value);
        // return true;

        // const XHR = new XMLHttpRequest();
        // XHR.open('GET', 'static/resources/1.gif');
        // XHR.send();

        document.querySelector('.auntification').submit();
    }
}

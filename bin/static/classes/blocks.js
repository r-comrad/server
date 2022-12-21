import { row, col } from '/static/js/utils.js'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('ERROR NO method realization')
    }
}

export class TitleBlock extends Block {
    constructor(value, options = {}) {
        super(value, options)
    }

    toHTML() {
        const { tag = 'h1', styles } = this.options
        return row(`<${tag}>${this.value}</${tag}>`, styles);
    }
}

export class ColumsBlock extends Block {
    constructor(value, options = {}) {
        super(value, options)
    }

    toHTML() {
        return row(this.value.map(col).join(''))
    }
}

export class ImageBlock extends Block {
    constructor(value, options = {}) {
        super(value, options)
    }

    toHTML() {
        return row(`<img src = "${this.value}"/>`)
    }
}
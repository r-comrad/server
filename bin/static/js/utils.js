export function row(content, styles = '') {
    styles = css(styles)
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function div(type = "", content) {
    return `<div class="${type}">${content}</div>`
}

export function button(name, content = "") {
    return `<button class="${name}">${content}</button>`
}

export function themeButton(name, content = "") {
    return `<div id="ThemeButton">${button(name, content)}</div>`
}




function css(styles = {}) {
    // const keys = Object.keys(styles)
    // const array = keys.map(key => { return `${key} : ${styles[key]}` })
    // return array.join(';')

    // return Object.keys(styles).map(key => `${key} : ${styles[key]}`).join(';')

    const toString = key => `${key} : ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}
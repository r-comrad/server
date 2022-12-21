import { div } from './utils.js'

export function formGroup(type, text) {
    return div('form-group', labl(type, text) + inp(type))
}

export function labl(type, text) {
    return `<label class="form-label" for="${type}">${text}</label>`
}

export function inp(type) {
    return `<input class="form-control" type="${type}" id="${type}" required>`
}

export function formLabe(type, text) {
    return formGroup()
}


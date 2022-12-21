import { row, col } from './utils.js'

// function title(block) {
//     const {tag = 'h1', styles} = block.options
//     return row(`<${tag}>${block.value}</${tag}>`, styles);
// }

// function list(block) {
//     const html = block.value.map(item => `<li>${item}</li>`)

//     return `    
//     <div>
//     <p id="msg">${block.name}</p>
//     <ul class="list">
//     ${html.join('')}
//     </ul>
// </div>`
// }

// function text(block) {
//     return `         
//     <div>
//     <p>${block.value}</p>
// </div>
// `
// }

// function colums(block) {
//     //const html = block.value.map(item => col(item))
//     //return row(html.join(''))
//     return row(block.value.map(col).join(''))

// }

// function image(block) {
//     return row(`<img src = "${block.value}"/>`)
// }

// export const templates =
// {
//     title, list, text, colums, image
// }
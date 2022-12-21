import { TitleBlock, ColumsBlock, ImageBlock } from '/static/classes/blocks.js'
import { ThemeButton } from '/static/classes/buttons.js'
import { Form } from '/static/classes/forms.js'

export const model = [
    new TitleBlock('Журнал',
        {
            tag: 'h2',
            // styles: `color: #ff0000; text-align: center;padding: 1.5rem;`
            styles: {
                color: '#ff0000',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    ),
    // { type: 'list', name: "Numeriks", value: ['1', '2', '3'] },
    // { type: 'text', value: 'Журнал Текст' },
    new ColumsBlock(['SUS', 'SAS', 'SOS', 'GG']),
    new ImageBlock('static/1.jpg')
]

export const ButtonModel = [

]

export const AuntificationModel = [
    new ThemeButton(),
    new Form([
        { type: 'login', text: 'Логин' },
        { type: 'password', text: 'Пароль' }
    ])
]

// export const AuntificationModel = [
//     new Form({
//         tag: 'auntification',
//         value:[
//             { type: 'login', text: 'Логин' },
//             { type: 'passeowd', text: 'Пароль' }
//         ]
//     })
// ]

// export const model = [
//     new TitleBlock('Конструктор сайтов на чистом JavaScript', {
//         tag: 'h2',
//         styles: {
//             background: 'linear-gradient(to right, #ff0099, #493240)',
//             color: 'green',
//             padding: '1.5rem',
//             'text-align': 'center'
//         }
//     }),
//     new ImageBlock(image, {
//         styles: {
//             padding: '2rem 0',
//             display: 'flex',
//             'justify-content': 'center'
//         },
//         imageStyles: {
//             width: '500px',
//             height: 'auto'
//         },
//         alt: 'Это картинка'
//     }),
//     new ColumnsBlock([
//         'Приложение на чистом JavaScript, без использования библиотек',
//         'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
//         'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
//     ], {
//         styles: {
//             background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
//             padding: '2rem',
//             color: '#fff',
//             'font-weight': 'bold'
//         }
//     }),
//     new TextBlock(text, {
//         styles: {
//             background: 'linear-gradient(to left, #f2994a, #f2c94c)',
//             padding: '1rem',
//             'font-weight': 'bold'
//         }
//     })
// ]
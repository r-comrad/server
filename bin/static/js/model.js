import { TitleBlock, ColumsBlock, ImageBlock } from '/static/classes/blocks.js'
import { ThemeButton } from '/static/classes/buttons.js'
import { Form } from '/static/classes/forms.js'

export const model = [
    new TitleBlock('Журнал',
        {
            tag: 'h2',
            styles: {
                color: '#ff0000',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    ),
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
import { TitleBlock, ColumsBlock, ImageBlock } from '/static/classes/blocks.js'
import { Button } from '/static/classes/button.js'

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
    new Button(
        'but1',
        'Dark',
        1
    )
]


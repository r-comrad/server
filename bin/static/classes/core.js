import { Site } from './site.js'
import { ThemeButton } from './buttons.js'

export class Core {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site')
        site.render(this.model)

        new ThemeButton()
    }
}
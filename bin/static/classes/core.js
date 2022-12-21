import {Site} from './site'
import {Sidebar} from './sidebar'

export class Core {
  constructor(model) {
    this.model = model
  }

  init() {
    const site = new Site('#site')

    site.render(this.model)

    const updateCallback = newBlock => {
      this.model.push(newBlock)
      site.render(this.model)
    }

    new Sidebar('#panel', updateCallback)
  }
}
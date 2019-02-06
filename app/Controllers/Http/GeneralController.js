'use strict'
const Content = use('Content')

class GeneralController {
  async index ({ request, response, view }) {
    const pageContent = Content.get()
    return view.render('homepage', pageContent)
  }
}

module.exports = GeneralController

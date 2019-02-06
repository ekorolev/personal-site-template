const path = require('path')
const contentFile = require(path.join(__dirname, '../../content.js'))

module.exports = class Content {
  constructor() {
    this._content = contentFile
  }

  get() {
    return this._content
  }
}
'use strict'

const {
  ServiceProvider
} = require('@adonisjs/fold')

class QueryProvider extends ServiceProvider {

  _registerDatabase() {
    this.app.singleton('Database', () => {
      let database = require('../src/Database/Database')
      return database
    })
  }

  _registerContent() {
    this.app.singleton('Content', () => {
      let Content = require('../src/Content')
      return new Content()
    })
  }
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this._registerDatabase()
    this._registerContent()
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot() {
    //
  }
}

module.exports = QueryProvider
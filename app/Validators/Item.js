'use strict'

class Item {
  get rules () {
    return {
      item_name:'required',
      price:'required'
    }
  }
}

module.exports = Item

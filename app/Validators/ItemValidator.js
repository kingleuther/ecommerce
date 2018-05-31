'use strict'

class Item {
  get validateAll () {
    return true;
  }

  get rules () {
    return {
      item_name : 'required',
      price : 'required'
    };
  }

  get messages (){
    return {
      'item_name.required': 'Please provide item',
      'price.required': 'Please place your price'
    };
  }
}

module.exports = Item

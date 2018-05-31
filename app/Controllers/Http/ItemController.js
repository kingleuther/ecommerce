'use strict'
const Item = use('App/Models/Item');

class ItemController {

    async index({view}){
        // const items = await Item.all();
        // return view.render('home', {items:items.toJSON()});
    }

    async save({request, response}){
        let data = request.all();
        await Item.create({
            item_name: data.item_name,
            price: data.price,
            user_id:'1'
        });
        response.redirect('/item/create');
    }

    async create({view}){
        let items = await Item.all();
        return view.render('create', {items:items.toJSON()});
    }
}

module.exports = ItemController

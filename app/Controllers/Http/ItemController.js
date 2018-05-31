'use strict'
const Item = use('App/Models/Item');
const { validateAll } = use('Validator');

class ItemController {

    async save({request, response, session}){
        let data = request.all();
        //validate the data
        const rules = {
            item_name : 'required',
            price : 'required'
        };

        const messages  = {
            'item_name.required': 'Please provide item',
            'price.required': 'Please place your price'
        };

        const validator = await validateAll(data, rules, messages);
        if(validator.fails()){
            session.withErrors(validator.messages()).flashAll();
            return response.redirect('/item/create');
        }

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

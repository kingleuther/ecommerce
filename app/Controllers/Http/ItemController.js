'use strict'
const Item = use('App/Models/Item');

class ItemController {

    async save({request, response}){
        let data = request.all();
        await Item.create({
            item_name: data.item_name,
            price: data.price,
            user_id:'1'
        });
        response.redirect('/item/create');
    }

    async create({view, request}){
        console.log('sikretong malupeeeeeet pwede pabulong',request.auth);
        let items = await Item.all();
        return view.render('create', {items:items.toJSON()});
    }

    async delete({response, session, params}){
        const {id} = params;
        const item = await Item.find(id);
        if(item){
            await item.delete();
            session.flash({
                notification: 'Item deleted successfully'
            });
            return response.redirect('/item/create');           
        }          
        session.flashAll({
            notification: 'Item was not found'
        });
        return response.redirect('/item/create');
    }
}

module.exports = ItemController

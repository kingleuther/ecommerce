'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

// Route.on('/').render('welcome');



Route
.group(()=>{
    Route.post('/login', 'SessionController.login').as('loginUser');
    Route.post('/register/create','SessionController.register').as('registerUser');
    Route.get('/logout','SessionController.logout');
    Route.get('/', 'SessionController.show');
    Route.get('/register', ({view}) => view.render('register')); 
});

Route
.group(()=>{
    Route.post('/save', 'ItemController.save').as('store').validator('ItemValidator');
    Route.get('/create', 'ItemController.create');
    Route.get('/delete/:id', 'ItemController.delete').as('delete');
}).prefix('/item');

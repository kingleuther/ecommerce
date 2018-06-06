'use strict'
const User = use('App/Models/User');
class SessionController {
    show({view}){
        return view.render('login');
    }
    
    async login ({request, auth, response}) {
        const { username, password } = request.all()
        await auth.attempt(username, password)
    }

    async register({request, response}){
        let data = request.all();
        await User.create({
            username : data.username,
            email: data.email,
            password: data.password,
            role: data.role
        });
    }

    async logout({auth, response}){
        console.log(auth.user)
        await auth.logout();
        response.redirect('/');    
    }
}
module.exports = SessionController

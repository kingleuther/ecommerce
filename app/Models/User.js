'use strict'

const Hash = use('Hash')
const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot();
    this.addHook('beforeCreate', 'UserHook.hashPassword');
    this.addHook('afterFind', 'UserHook.validate');
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User

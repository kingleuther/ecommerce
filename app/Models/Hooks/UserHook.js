'use strict'
const Hash = use('Hash')
const UserHook = exports = module.exports = {}

UserHook.hashPassword = async (user) => {
    user.password = await Hash.make(user.password)
}
UserHook.method = async (modelInstance) => {
}
UserHook.validate = async (user) => {
    if (!user.username) {
      throw new Error('Username is required')
    }
  }

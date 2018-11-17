var userDao = require('../dao/userDao');

exports.list = function(){
    return userDao.list()
}

exports.create = function(model){
    return userDao.add(model)
}

exports.getById = function(id){
    return userDao.getById(id)
}

exports.update = function(model){
    return userDao.update(model)
}

exports.getUserByName = function(username) {
    return userDao.getByName(username)
}

exports.deleteById = function(id){
    return userDao.deleteById(id)
}

exports.isUserExist = async function(username) {
    let user = await this.getUserByName(username);
    return user.length > 0;
}
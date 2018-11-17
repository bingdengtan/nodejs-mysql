var querystring     = require('querystring');
var uuid            = require('uuid');

var pageBean        = require('../utils/pageBean');
var userService     = require('../services/userService');
var User            = require('../models/userModel')
var pools           = require('../utils/pools');

exports.list = async function(req, res){
    let result = await userService.list()
    res.send(result)
}

exports.create = async function(req, res){
    let user = new User(req.body);

    pools.setActivePool(user.name.substring(0,1)=="1" ? "default" : "db2")
    let blUserExist = await userService.isUserExist(user.name)
    if (blUserExist) {
        res.send({code: 1, message: "用户已存在!"})
        return;
    }
    
    user.id = uuid.v1();
    let result = await userService.create(user)
    res.send(result)
}

exports.get = async function(req, res){
    let id = req.params.id;
    let user = await userService.getById(id)
    res.send(user)
}

exports.update = async function(req, res){
    let userNew = new User(req.body)
    let result = await userService.update(userNew)
    res.send(result)
}

exports.delete = async function(req, res){
    let id = req.params.id;
    let result = await userService.deleteById(id)
    return result;
}
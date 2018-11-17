var mysql       = require('mysql');
var pools       = require('../utils/pools');
var userModel	= require('../models/userModel');
var userSql     = require('../dao/userSqlMapping');
var utils		= require('../utils/utils');
var User		= require('../models/userModel');

// 使用连接池，提升性能
//var pool  = mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {
	add: async function (model) {
		try{
			let result = await utils.query(userSql.insert, [model.id, model.name, model.age])
			return {code: 200, message: "添加成功"}
		}catch(e){
			return {code: e.code, message: e.sqlMessage}
		}
	},

	getByName: function(username){
		try {
			return utils.query(userSql.getByName, [username]);
		} catch(e) {
			return {code: e.code, message: e.sqlMessage}
		}
	},

	getById: function(id) {
		try {
			return utils.query(userSql.getById, [id])
		} catch (e) {
			return {code: e.code, message: e.sqlMessage}
		}
	},

	deleteById: async function(id) {
		try {
			let result = await utils.query(userSql.delete, [id])
			return {code: 200, message: "删除成功!"}
		} catch (e) {
			return {code: e.code, message: e.sqlMessage}
		}		
	},

	list: function() {
		try{
			return utils.query(userSql.all, null)
		}catch(e){
			return {code: e.code, message: e.sqlMessage}
		}		
	},

	update: async function(user) {
		try{
			let result = await utils.query(userSql.update, [user.name, user.age, user.id])
			return {code: 200, message: "更新成功！"}
		} catch(e) {
			return {code: e.code, message: e.sqlMessage}
		}
	}
};
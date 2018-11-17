var mysql               = require('mysql');
var mysqlConfig         = require('../conf/mysql.config');

var pools = {
    activeConnectionName: "default",

    sqlPools: {},

    getPool: function ( connName ) {
       
        var activeConnName = connName === undefined ? this.activeConnectionName : connName;
        var pool = null;

        if(this.sqlPools[activeConnName]) {
            pool = this.sqlPools[activeConnName]
        }else{
            pool  = mysql.createPool(mysqlConfig[activeConnName]);
            this.sqlPools[activeConnName] = pool;
        }
        this.activeConnectionName = activeConnName
        return pool;
    },

    setActivePool: function ( connName ) {
        this.activeConnectionName = connName
        return this.getPool(connName)
    }
}

module.exports = pools;
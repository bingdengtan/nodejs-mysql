var mysql               = require('mysql');
var mysqlConfig         = require('../conf/mysql.config');
var pools               = require('../utils/pools');

var utils = {
    convertSqlResult: function(ret) {
        if(typeof ret === 'undefined') {
            return {code: "1", msg: "操作失败"}
        } else {
            return ret
        }
    },

    query: function( sql, values ) {
        return new Promise(( resolve, reject ) => {
            pools.getPool().getConnection(function(err, connection) {
              if (err) {
                reject( err )
              } else {
                connection.query(sql, values, (err, result) => {
                  if ( err ) {
                    reject( err )
                  } else {
                    resolve( result )
                  }
                  connection.release()
                })
              }
            })
          })
    }
}

module.exports = utils;
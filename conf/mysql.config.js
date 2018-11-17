// MySQL数据库联接配置
module.exports = {
	default: {
		host: 'localhost',
		user: 'root',
		password: 'password',
		database:'db1', // 前面建的user表位于这个数据库中
		port: 3306
	},
    db2: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database:'db2', // 前面建的user表位于这个数据库中
        port: 3306
	}
};
var user = {
	insert: 'INSERT INTO user(id, name, age) VALUES(?,?,?)',
	update: 'update user set name=?, age=? where id=?',
	delete: 'delete from user where id=?',
	getById: 'select * from user where id=?',
	all: 'select * from user',
	getByName: 'select * from user where name=?'
};

module.exports = user;
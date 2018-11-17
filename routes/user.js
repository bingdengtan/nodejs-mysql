var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')

router.get('/', userController.list);
router.get('/:id', userController.get);
router.delete('/:id', userController.delete);
router.post('/', userController.create);
router.patch('/', userController.update);

module.exports = router;
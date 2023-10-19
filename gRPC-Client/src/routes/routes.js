const { Router } = require("express");

const router = Router();
router.get('/producto', require('../controllers/read'))
router.post('/producto', require('../controllers/create'))
router.delete('/producto', require('../controllers/delete'))
router.put ('/producto', require('../controllers/update'))

module.exports = router
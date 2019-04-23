const path = require('path');
const express = require('express');
const publicController = require('../controllers/public');
const router = express.Router();

router.post('/api/postRegister',publicController.postRegister);
router.get('/api/all',publicController.all);
router.get('/api/user/:email',publicController.search);
router.post('/api/delete/:email',publicController.delete);
router.post('/api/update/:email',publicController.updateUser);

module.exports = router;

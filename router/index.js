const express = require('express');
const router = express.Router();
const userController = require('../controller/index')

router.get('/', 
    userController.getData
);

router.get('/:id',
    userController.getDataById
);

router.post('/',
    userController.postData
);

router.put('/:id',
    userController.putData
);

router.delete('/:id',
    userController.deleteData
);

module.exports = router;
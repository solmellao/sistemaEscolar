const express = require ('express')
const router = express.Router();
const usuarioController = require ('../controller/usuarioController');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.

router.get('/:id', usuarioController.getOne);

router.post('/signup',
[
    
    check('username', 'es obligatorio').not ().isEmpty(),
    check('password', 'es obligatoria').not ().isEmpty(),
]
, usuarioController.signup);

router.post('/login',
[
    
    check('username', 'es obligatorio').not ().isEmpty(),
    check('password', 'es obligatoria').not ().isEmpty(),
]
, usuarioController.login);
module.exports = router;
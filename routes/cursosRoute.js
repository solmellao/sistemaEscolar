const express = require ('express')
const router = express.Router();
const cursoController = require ('../controller/cursoController');
const validacion = require('../middleware/validacion');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.

router.get('/', validacion, cursoController.getAll);//ejecuta una funcion antes de ir al controlador
router.get('/:id', validacion, cursoController.getOne);
router.delete('/:id', validacion, cursoController.Delete);

router.post('/',
[
    validacion,
    check('nombre', 'es obligatorio').not().isEmpty(),
    check('descripcion', 'es obligatoria').not ().isEmpty(),
]
, cursoController.create);

router.put('/:id',
[
    validacion,
    check('nombre', 'campo obligatorio').not ().isEmpty(),
    check('descripcion', 'campo obligatoria').not ().isEmpty(),
]
, cursoController.update);

module.exports = router;

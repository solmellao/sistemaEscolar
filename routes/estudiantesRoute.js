const express = require ('express')
const router = express.Router();
const estudianteController = require ('../controller/estudianteController');
const validacion = require('../middleware/validacion');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.

router.get('/', validacion, estudianteController.getAll);//ejecuta una funcion antes de ir al controlador
router.get('/:id', validacion, estudianteController.getOne);
router.delete('/:id',validacion, estudianteController.Delete);

router.post('/',
[
    validacion,
    check('nombre', 'es obligatorio').not ().isEmpty(),
    check('edad', 'es obligatoria').not ().isEmpty(),
    check('grado', 'es obligatoria').not ().isEmpty(),
]
, estudianteController.create);

router.put('/:id',
[
    validacion,
    check('nombre', 'campo obligatorio').not ().isEmpty(),
    check('edad', 'es obligatoria').not ().isEmpty(),
    check('grado', 'es obligatoria').not ().isEmpty(),
]
, estudianteController.update);

module.exports = router;

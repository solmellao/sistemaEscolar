const express = require ('express')
const router = express.Router();
const profesorController = require ('../controller/profesorController');
const validacion = require('../middleware/validacion');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.

router.get('/', validacion, profesorController.getAll);//ejecuta una funcion antes de ir al controlador
router.get('/:id',validacion, profesorController.getOne);
router.delete('/:id',validacion, profesorController.Delete);

router.post('/',
[
    validacion,
    check('nombre', 'es obligatorio').not ().isEmpty(),
    check('especialidad', 'es obligatoria').not ().isEmpty(),
    check('email', 'es obligatoria').not ().isEmpty(),
]
, profesorController.create);

router.put('/:id',
[
    validacion,
    check('nombre', 'campo obligatorio').not ().isEmpty(),
    check('especialidad', 'es obligatoria').not ().isEmpty(),
    check('email', 'es obligatoria').not ().isEmpty(),
]
, profesorController.update);

module.exports = router;
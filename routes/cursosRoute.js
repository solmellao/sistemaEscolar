const express = require ('express')
const router = express.Router();
const cursosController = require ('./../controllers/cursosController');
const { validarCampos } = require('../middlewares/validar-campos');
const {agregarCursos} = require('../models/cursosModel');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.

router.get('/', cursosController.obtenerCursos);
router.get('/:id', cursosController.getCursosById);
router.delete('/:id',cursosController.eliminarCursosById)

router.post('/',
[
    check('Nombre', 'es obligatorio').not ().isEmpty(),
    check('Descripcion', 'es obligatoria').not ().isEmpty(),
    validarCampos
]
, cursosController.agregarCursos);

router.put('/:id',
[
    check('Nombre', 'campo obligatorio').not ().isEmpty(),
    check('Descripcion', 'campo obligatoria').not ().isEmpty(),
    validarCampos
]
, cursosController.actualizarCursos);

module.exports = router;
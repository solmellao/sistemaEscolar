const express = require ('express')
const router = express.Router();
const estudiantesController = require ('./../controllers/estudiantesController');
const { validarCampos } = require('../middlewares/validar-campos');
const {agregarEstudiante} = require('../models/estudiantesModel');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.


router.get('/', estudiantesController.obtenerEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
router.delete('/:id',estudiantesController.eliminarEstudianteById);



router.post('/',
[
    check('nombre', 'es obligatorio').not ().isEmpty(),
    check('edad', 'es obligatoria').not ().isEmpty(),
    check('grado', 'es obligatorio').not ().isEmpty(),
    validarCampos
]
, estudiantesController.agregarEstudiante);



router.put('/:id',
[
    check('nombre', 'campo obligatorio').not ().isEmpty(),
    check('edad', 'campo obligatoria').not ().isEmpty(),
    check('grado', 'campo obligatorio').not ().isEmpty(),
    validarCampos
]
, estudiantesController.actualizarEstudiante);



module.exports = router;
const express = require ('express')
const router = express.Router();
const profesoresController = require ('./../controllers/profesoresController');
const { validarCampos } = require('../middlewares/validar-campos');
const {agregarProfesores} = require('../models/cursosModel');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.


router.get('/', profesoresController.obtenerProfesores);
router.get('/:id', profesoresController.getProfesoresById);
router.delete('/:id', profesoresController.eliminarProfesoresById)



router.post('/',
[
    check('nombre', 'es obligatorio').not ().isEmpty(),
    check('especialidad', 'es obligatoria').not ().isEmpty(),
    check('email', 'es obligatorio').not ().isEmpty(),
    validarCampos
]
, profesoresController.agregarProfesores);



router.put('/:id',
[
    check('nombre', 'campo obligatorio').not ().isEmpty(),
    check('edad', 'campo obligatoria').not ().isEmpty(),
    check('grado', 'campo obligatorio').not ().isEmpty(),
    validarCampos
]
, profesoresController.actualizarProfesores);



module.exports = router;


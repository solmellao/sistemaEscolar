const express = require ('express')
const router = express.Router();
const estudianteCursoController = require ('../controller/estudianteCursoController');
const validacion = require('../middleware/validacion');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador que le corresponde.

router.get('/', validacion, estudianteCursoController.getAll);//ejecuta una funcion antes de ir al controlador
router.get('/:idcurso',validacion, estudianteCursoController.getOneByCurso);
router.get('/:idestudiante',validacion, estudianteCursoController.getOneByEstudiante);
router.delete('/:idcurso/:idestudiante',validacion, estudianteCursoController.Delete);

router.post('/',
[
    validacion,
    check('idcurso', 'es obligatorio').not ().isEmpty(),
    check('idestudiante', 'es obligatoria').not ().isEmpty(),
]
, estudianteCursoController.create);


module.exports = router;
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const cursos = require ("./routes/cursosRoute");
const estudiantes = require ("./routes/estudiantesRoute");
const profesores = require ("./routes/profesoresRoute")
const estudiantes_cursos= require ('./routes/estudiantes_cursosRoute');
const usuario = require ('./routes/usuarioRoute');

require('dotenv').config();

const app = express();
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/usuarios", usuario)
app.use("/cursos", cursos)
app.use("/estudiantes", estudiantes)
app.use("/profesores", profesores)
app.use("/estudiantesCursos", estudiantes_cursos)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
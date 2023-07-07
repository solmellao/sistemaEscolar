const db = require('./../config/db');
const { Router } = require("express");

exports.obtenerEstudiantes = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM estudiantes')
    console.log(rows)
    return rows;
};

exports.getEstudianteById = async (idEstudiante) => {
    const [rows, fields] = await db.execute('SELECT nombre, edad, grado FROM estudiantes WHERE id=?', [idEstudiante]);
    console.log(rows)
    return rows;
};

exports.agregarEstudiante = async (estudiante) => {
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre, edad, grado) VALUES (?, ?, ?)', [estudiante.nombre,estudiante.edad, estudiante.grado]);
    return rows;
};
exports.actualizarEstudiante = async(estudiante)=>{
    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id = ?', [estudiante.nombre, estudiante.edad, estudiante.grado, estudiante.estudianteData]);
    return rows;
};

exports.eliminarEstudianteById = async (id) =>{
    const [rows, fields] = await db.execute('DELETE FROM estudiantes WHERE id = ?', [id]);
    return rows;
};

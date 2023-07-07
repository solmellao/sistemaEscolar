const db = require('../config/db');
const { Router } = require("express");

exports.obtenerProfesores = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM profesores')
    console.log(rows)
    return rows;
};

exports.getProfesoresById = async (idProfesor) => {
    const [rows, fields] = await db.execute('SELECT nombre, especialidad, mail FROM profesores WHERE id=?', [idProfesor]);
    console.log(rows)
    return rows;
};

exports.agregarProfesores = async (profesores) => {
    const [rows, fields] = await db.execute('INSERT INTO profesores (nombre, especialidad, mail) VALUES (?, ?, ?)', [profesores.nombre,profesores.especialidad, profesores.mail]);
    return rows;
};
exports.actualizarProfesores = async(profesores)=>{
    const [rows, fields] = await db.execute('UPDATE profesores SET nombre = ?, especialidad = ?, email = ? WHERE id = ?', [profesores.nombre, profesores.especialidad, profesores.email, profesores.profesoresData]);
    return rows;
};

exports.eliminarProfesoresById = async (id) =>{
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id = ?', [id])
    return rows;
};
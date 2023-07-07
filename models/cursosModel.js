const db = require('./../config/db');
const { Router } = require("express");

exports.obtenerCursos = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM cursos')
    console.log(rows)
    return rows;
};

exports.getCursosById = async (idCurso) => {
    const [rows, fields] = await db.execute('SELECT nombre, descripcion FROM cursos WHERE id=?', [idCurso]);
    console.log(rows)
    return rows;
};

exports.agregarCursos = async (cursos) => {
    const [rows, fields] = await db.execute('INSERT INTO cursos (nombre, descripcion) VALUES (?, ?, ?)', [cursos.nombre,cursos.descripcion ]);
    return rows;
};
exports.actualizarCursos = async(cursos)=>{
    const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?', [cursos.nombre,cursos.descripcion, cursos.cursosData]);
    return rows;
};

exports.eliminarCursosById = async (id) =>{
    const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id = ?', [id])
    return rows;
};
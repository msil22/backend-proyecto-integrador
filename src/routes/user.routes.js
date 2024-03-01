const express = require('express');
const router = express.Router();

const listarUsuarios = require("../controllers/user.getAllUsers.js");
const actualizarUsuario = require('../controllers/user.Update.js');
const crearUsuario = require('../controllers/user.createUser.js');
const login = require('../controllers/user.login.js');

router.get("/", listarUsuarios);

router.post("/login", login);

router.post("/crear-usuario", crearUsuario);

router.put("/actualizar-usuario/:id", actualizarUsuario);


router.delete("/eliminar-usuario", (req, res) => {
  res.send("Ruta DELETE gestionada");
});

module.exports = router;
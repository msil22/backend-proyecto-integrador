const user = require('../models/user.model.js')




const crearUsuario = async (req, res) => {

  const { name, lastName, email, password } = req.body;

  await user.create({
      name: name,
      lastName: lastName,
      email: email,
      password: password 
    });

    res.status(201).json({
      msg: "Usuario creado con exito",
      code: 201
    });
};


module.exports = crearUsuario;
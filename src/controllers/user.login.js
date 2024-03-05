const login = async (req, res) => {

  const { email, password } = req.body;


  if (!email || !password){
      return res.status(400).json({
        msg: "Email y password no pueden estar vacios",
        code: 400
      });
  }

  try{
    const user = await User.findOne({email: email})

    if(!user) {
    return  res.status(400).json({
        code: 400,
        msg: "Usuario no registrado"
      })
    }

    if(user.password !== password) {
      return res.status(400).json({
        code: 400,
        msg: "contraseña incorrecta"
      })
    }


    res.status(200).json({
      code: 200,
      msg: "Usuario logeado con exito",
      data: {
        name: user.name, 
        id: user._id
      }
    })

  }
  catch (error){
    console.log(error);
  }


}


module.exports = login;
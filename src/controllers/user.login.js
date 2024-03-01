const login = async (req, res) => {

  const { email, password } = req.body;


  if (!email || !password){
      return res.status(400).json({
        msg: "Email y password no pueden estar vacios",
        code: 400
      });
  };

  res.status(200).json({
    code: 200,
    msg: `Los datos son correctos`,
    data: [
      email,
      password
    ]
  })




}


module.exports = login;
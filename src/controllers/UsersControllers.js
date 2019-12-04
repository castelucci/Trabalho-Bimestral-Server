const User = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {adm} =require ("../auxiliar/funcoes")

function token(params) {return jwt.sign({params},"hakuna matata",{expiresIn:900000000000})}

module.exports = {
  async store(req, res) {
   try {if (await adm(req.userEmail)) {
      if (await User.findOne({ email:req.body.email },'_id')) {
        return res.status(400).send({ erro: "Email já cadastrado" })
      }let user = await User.create(req.body);
      ({senha, ...user} =user._doc);       
      return res.send({user});
      } return res.status(401).send({ erro: "Usuario sem autorização para realizar cadastro" })
    } catch (err) {return res.status(400).send(err.message); 
    }},
  async aut (req, res) {
    if (!await User.findOne({email:"root@root.root"})) {//<-- apenas para o desenvolvimento
      await User.create({"email":"root@root.root","nome":"root","senha":"root","adm":true})//<-- apenas para o desenvolvimento
    }//<-- apenas para o desenvolvimento
    let { email, senha } = req.body;
    let user = await User.findOne({ email }).select('+senha')
    if (!user) return res.status(406).send({ error: "Email não cadastrado" })
    console.log(senha);
    
    if (!senha || ! await user.compareSenha(senha)) {
        res.status(406).send({ error: "Senha incorreta" })
    }({senha, ...user} =user._doc);
    return res.send({ user, token: token({ email: user.email })});
  },
  async estaautenticado (req, res) {return res.json('')}
};


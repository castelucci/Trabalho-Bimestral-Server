const Users = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function menf(params) { return "Usuario com o email: "+params+" não existente!"}

async function valida(params,a) {const user = await Users.findOne({email:params})
if (user) {if (a) {return true }return user;}
 if (a) {return false }return menf(params)
}
function token(params) {return jwt.sign({params},"hakuna matata",{expiresIn:900000000000})}
async function list(params) {if (params) { return await Users.find({status: true},params)}
  return await Users.find({status: true},'-status')
}
async function adm(params) {return await Users.findOne({email:params, adm:true},'_id')}


module.exports = {
  async store(req, res) {
   try {if (await adm(req.userEmail)) {
      if (await Users.findOne({ email:req.body.email },'_id')) {
        return res.status(400).send({ erro: "Email já cadastrado" })
      }let user = await Users.create(req.body);
      ({senha, ...user} =user._doc);       
      return res.send({user});
      } return res.status(401).send({ erro: "Usuario sem autorização para realizar cadastro" })
    } catch (err) {return res.status(400).send(err.message); 
    }},
  async list(req, res) {return res.json(await list(req.body.campos))},
  async index(req, res) {return res.json(await valida(req.params.email));},
  async update(req, res) {try{
    if (await valida(req.params.email,true)){return res.json(await Users.findOneAndUpdate({email:req.params.email},req.body,{new:true}))}
    return res.json(menf(req.params.email))} catch (error) {return res.json(error.message);}},
  async destroy(req, res) {try{
    if (await valida(req.params.email,true)) {await Users.findOneAndUpdate({email:req.params.email},{status:false})
      return res.json({message: "Exclusão realizada com sucesso!"});}
      return res.json(menf(req.params.email))} catch (error) {return res.json(error.message);}  
    },
  async aut (req, res) {
    if (!valida("root@root.root",true)) {//<-- apenas para o desenvolvimento
      await Users.create({"email":"root@root.root","nome":"root","senha":"root","adm":true})//<-- apenas para o desenvolvimento
    }//<-- apenas para o desenvolvimento
    let { email, senha } = req.body;
    let user = await Users.findOne({ email }).select('+senha')
    if (!user) return res.status(406).send({ error: "Email não cadastrado" })
    if (!senha || !await bcrypt.compare(senha, user.senha)) {
        res.status(406).send({ error: "Senha incorreta" })
    }({senha, ...user} =user._doc);
    return res.send({ user, token: token({ email: user.email })});
  },
  async estaautenticado (req, res) {    
     return res.json('');
  }
};


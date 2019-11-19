const Comercios = require("../models/Comercio");
const User = require("../models/User");
const {menf,valida,list,adm} =require ("../auxiliar/funcoes")

module.exports = {

  async store(req, res) {
   try {if (await adm(req.userEmail)) {
    const comercio = await Comercios.findOne({ cnpj:req.body.cnpj })
    if(comercio){return res.status(400).send({ messagem: "Empresa ja cadastrada já cadastrado"})
    } return res.send(await Comercios.create(req.body));
    } return res.status(401).send({ erro: "Usuario sem autorização para realizar cadastro" })
  } catch (err) { 
      return res.status(400).send(err.message); 
    }},
  async list(req, res) {return res.json(await list(req.body.campos))},
  async index(req, res) {return res.json( await valida(req.params.cnpj))},
  async update(req, res) { try{
    if (await valida(req.params.cnpj,true)){return res.json(await Comercios.findOneAndUpdate({cnpj:req.params.cnpj},req.body,{new:true}));}
    return res.json(menf(req.params.cnpj)) } catch (error) {return res.json(error.message);} },
  async destroy(req, res) { try{  
    if (await valida(req.params.cnpj,true)) {await Comercios.findOneAndUpdate({cnpj:req.params.cnpj},{status:false})
      return res.json({message: "Exclusão realizada com sucesso!"});}
      return res.json(menf(req.params.cnpj))} catch (error) {return res.json(error.message);}
  },
};

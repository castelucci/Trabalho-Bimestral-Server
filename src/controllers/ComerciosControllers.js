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
    }}
};

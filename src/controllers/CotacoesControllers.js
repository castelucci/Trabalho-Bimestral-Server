const cotacoes = require("../models/Cotacao");


function menf(params) { return "Contação com o id: "+params+" não existente!"}

async function valida(params,a) {const cotacao = await cotacoes.findOne({_id:params}).populate('user comercio')
if (cotacao) {if (a) {return true }return cotacao;}
 if (a) {return false }return menf(params)
}
async function list(params) {if (params) { return await cotacoes.find({status: true},params).populate('user comercio')
}
  return await cotacoes.find({status: true},'-status').populate('user comercio')
}

module.exports = {
  async store(req, res) {try {
    const cotacao = await cotacoes.create(req.body);
   return res.send(await cotacoes.findOne({_id:cotacao._id}).populate('user comercio'))
    } catch (erro) {return res.json(erro.message); 
    }},
  async list(req, res) {return res.json(await list(req.body.campos))},
  async index(req, res) { return res.json(await valida(req.params.id))},
  async update(req, res) {try {const _id = req.params.id;
      if (await valida(_id,true)){return res.json(await cotacoes.findOneAndUpdate({_id},req.body,{new:true}))}
      return res.json(menf(_id))} catch (error) {return res.json(error.message);}
    },
  async destroy(req, res) { try{ const _id = req.params.id;
    if (await valida(_id,true)) {await cotacoes.findOneAndUpdate({_id},{status:false})
      return res.json({mensagem: "Exclusão realizada com sucesso!"})}
      return res.json(menf(_id))} catch (error) {return res.json(error.message);}
  }
};
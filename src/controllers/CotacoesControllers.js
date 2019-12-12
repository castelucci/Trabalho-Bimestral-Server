const cotacoes = require("../models/Cotacao");
const { campos } = require("../auxiliar/funcoes")

function alimentos(params, obj) {
  let vetor = []
  params.forEach(element => {
    Array.prototype.push.apply(vetor, Object.keys(obj[element]))
  });
  return vetor
}

module.exports = {
  async store(req, res) {
    try {
      const vetor = Object.keys(req.body.cesta.alimentos);
      const contr = alimentos(vetor, req.body.cesta.alimentos)
      if (contr.length == 0) { throw new Error("Deve haver pelo menos um produto lançado") }
      let a = (Object.keys(cotacoes.schema.tree).concat(Object.keys(cotacoes.schema.tree.cesta.alimentos), Object.keys(cotacoes.schema.tree.cesta.alimentos.alimento1)));
      let b = (Object.keys(req.body).concat(vetor, contr))
      const c = campos(b, a)
      if (c) { throw new Error(c) }
      const cotacao = await cotacoes.create(req.body);
      return res.send(await cotacoes.findOne({ _id: cotacao._id }, "-status").populate('user', 'nome -_id'))
    } catch (erro) {
      return res.json(erro.message);
    }
  },
};
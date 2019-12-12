function validaCaracteris(vetor, valor) {
  let controle = false;
  valor = valor.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
  vetor.forEach(element => {
    if ((element.normalize('NFD').replace(/([\u0300-\u036f]|[A-z])/g, '')).toLowerCase() == valor) {
      controle = element
    }
  })
  if (controle) { return controle }
  return false;
}
function menf(params) { return "Informação com o ID: " + params + " não existente!" }
async function valida(id, model, boolean) {
  model = await model.findOne({ _id: id }, "-status -adm")
  if (model) { if (boolean) { return true } return model }
  if (boolean) { return false } return menf(id)
}
async function list(model, filtro) {
  if (filtro) {
    filtro = filtro.split(':')
    return await model.find({ [filtro[0]]: filtro[1], status: true }, '-status').populate('user', 'nome')
  }
  return await model.find({ status: true }, '-status').populate('user', 'nome')
}
function model(params) { return require("../models/" + params) }
async function adm(email) { return await (model("User")).findOne({ email: email, adm: true }, '_id') }

function campos(update, obj, next) {
  if (next) update.splice(update.indexOf('_id'), 1);
  for (let i = 0; i < update.length; i++) {
    if (obj.indexOf(update[i].toLowerCase()) == -1) {
      if (next) { next(new Error('Campo "' + update[i] + '" é invalido!')) }
      return ('Campo "' + update[i] + '" é invalido!')
    }
  }
}
function name(params) {

}

module.exports = { validaCaracteris, menf, valida, list, model, adm, campos };
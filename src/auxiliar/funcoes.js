function validaCaracteris(vetor,valor) { 
  let controle = false;
  valor = valor.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
  vetor.forEach(element => {
        if ((element.normalize('NFD').replace(/[\u0300-\u036f]/g, "")).toLowerCase()==valor) { 
          controle = element
        }
  })   
  if (controle) {return controle}    
  return false;
  }
function menf(params) { return "Informação com o ID: "+params+" não existente!"}
async function valida(id,model,boolean) {model = await model.findOne({_id:id})
if (model) {if (boolean) {return true }return model}
 if (boolean) {return false }return menf(id)
}
async function list(campos,model) {if (campos) { return await model.find({status: true},campos)}
  return await model.find({status: true},'-status')
}
function model(params) {return require("../models/"+params)}
async function adm(email) {return await (model("User")).findOne({email:email, adm:true},'_id')}

function campos(update,obj,next) { if (next) update.splice(update.indexOf('_id'), 1);
for (let i = 0; i < update.length; i++) {
    if (obj.indexOf(update[i].toLowerCase()) == -1) {
      if (next) {next( new Error('Campo "'+update[i]+'" é invalido!'))}
      return ('Campo "'+update[i]+'" é invalido!')
    }
  }
}

module.exports = {validaCaracteris,menf,valida,list,model,adm,campos};
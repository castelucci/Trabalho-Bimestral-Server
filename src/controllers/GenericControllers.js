const {menf,valida,list,model} =require ("../auxiliar/funcoes")

module.exports = {
  async list(req, res) {
  return res.json(await list(req.body.campos,model(req.params.generic),req.params.filtro))},
  async index(req, res) {return res.json(await valida(req.params.id,model(req.params.generic)))},
  async update(req, res) {try{const id=req.params.id; const modell = req.params.generic;
    if (await valida(id,model(modell),true))
    {return res.json(await model(modell).findOneAndUpdate({_id:id},req.body,{new:true}))}
    return res.json(menf(id))} catch (error) {return res.json(error.message);}
  },
  async destroy(req, res) {try{const id=req.params.id
    if (await valida(id,model(req.params.generic),true)) 
    {await model(req.params.generic).findOneAndUpdate({_id:id},{status:false})
      return res.json({message: "Exclusão realizada com sucesso!"});}
      return res.json(menf(id))} catch (error) {return res.json(error.message);}  
  },
  
};


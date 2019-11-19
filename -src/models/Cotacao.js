const { Schema, model } = require("mongoose");

const CotacoesSchema = new Schema({
  status: { type: Boolean, default:true},
  user: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  comercio: {
    type: Schema.Types.ObjectId,
    ref: 'Comercio',
    required: true,
  },
  cesta:{
          produto:
          [{
            nomeDoIten:{ 
              type: String,
              require:true        
            },
            valorDoItem:{
              type: Number,
              match: [/^[a-zA-Z0-9- ,_]+$/,  'O valor do produto, referênte a cotação, só pode conter números'],
              require:true
              
            },_id:false
          }],
          valorTotal:{
            type: Number,
            match: [/^[a-zA-Z0-9- ,_]+$/,  'O valor tatal dos produtos, referêntes a cotação, só pode conter números'],
            require:true
          },_id:false
  },
  mes: {
      type: String,
      required: [true, "O mês de referência da cotação é uma informação obrigatoria"],
      enum: {values:['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
      message: 'O mês de referência da cotação é invalido'}, 
      maxlength: [9,"O mês de referência da cotação esta invalido"],
      minlength:[4,"O mês de referência da cotação esta invalido"]
  },},{versionKey: false},{timestamps: true});

  CotacoesSchema.pre('save', function(next){
    console.log(this.cesta.produto[0].valorDoItem);
    
      this.cesta.produto.forEach(element => {
        this.cesta.valorTotal += element.valorDoItem
    });
    
    next();
  })

  CotacoesSchema.pre('findOneAndUpdate', function(next) {
    for (let i = 0; i < ((update = Object.keys(this._update)).length-2); i++) {
      if (this.schema._requiredpaths.indexOf(update[i].toLowerCase()) == -1) {
        next( new Error('Campo "'+update[i]+'" é invalido!'))
      }
    }
    this.options.runValidators = true;
    next();
  });
module.exports = model("Cotacoes", CotacoesSchema);

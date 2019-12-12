const { Schema, model } = require("mongoose");
const cidadesEstados = require("../auxiliar/cidadesEstados")

const { validaCaracteris, campos } = require("../auxiliar/funcoes")

const ComercioSchema = new Schema({
  status: { type: Boolean, default: true },
  cnpj: {
    type: String,
    unique: true,
    required: [true, "O cnpj da empresa é uma informação obrigatoria"],
    match: [/^[0-9]+$/, 'O cnpj da empresa só pode conter números'],
    maxlength: [11, "O cnpj possui um tamanho maximo de 11 numeros"],
    minlength: [11, "O cnpj possui um tamanho minimo de 11 numeros"]
  },
  nome: {
    type: String,
    required: [true, "O nome da empresa é uma informação obrigatoria"],
    match: [/^[A-zÀ-ú0-9 ]+$/, 'O nome da empresa só pode conter letras e números']
  },
  nome_rua: {
    type: String,
    required: [true, "O nome da rua onde a empresa esta localizada é uma informação obrigatoria"],
    match: [/^[A-zÀ-ú0-9 ]+$/, 'O nome da rua só pode conter letras e números']
  },
  numero_rua: {
    type: String,
    required: [true, "O numero da rua onde a empresa esta localizada é uma informação obrigatoria"],
    match: [/^[0-9]+$/, 'O numero do endereço só pode conter números']
  },
  bairro: {
    type: String,
    required: [true, "O nome do bairro é uma informação obrigatoria"],
    match: [/^[A-zÀ-ú0-9 ]+$/, 'O nome do bairro só pode conter letras e números']
  },
  cit: {
    type: String,
    required: [true, "O Nome da cidate é uma informação obrigatoria"],
    // match: [/^[A-zÀ-ú0-9 ]+$/, 'O nome da cidate só pode conter letras e números'],
    // enum: {values:cidadesEstados[1] ,
    //message: 'Cidade não existente'}
  },
  uf: {
    type: String,
    required: [true, "A abreviação do estado(UF) é uma informação obrigatoria"],
    uppercase: true,
    enum: {
      values: cidadesEstados[0],
      message: 'Abreviação do estado(UF) não existente'
    },
    maxlength: [2, "A abreviação do estado(UF) possui um tamanho maximo de 2 letras"],
    minlength: [2, "A abreviação do estado(UF) possui um tamanho minimo de 2 letras"]
  },
}, { versionKey: false }, { timestamps: true });

ComercioSchema.pre('save', function (next) {
  campos(Object.keys(this._doc), Object.keys(this.schema.obj), next)
  /* let controle = ""
   this.cit = this.cit.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
   cidadesEstados[1].forEach(element => {
     if ((element.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase())==this.cit) {
       controle = element
     }})      */
  let controle = validaCaracteris(cidadesEstados[1], this.cit)
  if (!controle) { next(new Error('Cidade "' + this.cit + '" não encontrada!')) }
  this.cit = controle;
  next()
})


ComercioSchema.pre('findOneAndUpdate', async function (next) {
  this.options.runValidators = true;
  campos(Object.keys(this._update), Object.keys(this.schema.obj), next)
  if (this._update.cnpj) { next(new Error('O CNPJ não pode ser alterado!')) }
  if (this._update.cit) {
    let controle = validaCaracteris(cidadesEstados[1], this._update.cit)
    if (!controle) { next(new Error('Cidade "' + this._update.cit + '" não encontrada!')) }
    this._update.cit = controle
  }
  next();
});

module.exports = model("Comercio", ComercioSchema);
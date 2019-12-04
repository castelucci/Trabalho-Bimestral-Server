const { Schema, model } = require("mongoose");

const CotacoesSchema = new Schema({
  status: { type: Boolean, default: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },/*
  comercio: {
    type: Schema.Types.ObjectId,
    ref: 'Comercio',
    required: true,
  },*/
  Cidade: {
    type: String,
    default: "Nova Andradina",
    enum: {
      values: ["Nova Andradina"],
      message: 'A cotação apenas será executada na cidade de Nova Andradina'
    },
  },
  cesta: {
    alimentos: {
      alimento1: 
      {
        nome: {
          type: String,
          default: "Carne",
          enun: { values: ["Carne"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: String,
            require: true,
            match: [/^[A-zÀ-ú /()]+$/, 'A marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
            type: Number,
            default: 6.6,
            match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
            require: true
          },
          preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, _id: false
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },
    },
      alimento2: {
        nome: {
          type: String,
          default: "Leite",
          enun: { values: ["Leite"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 7.5,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
          type: Number,
          match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
        },  
       }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
      },
      alimento3: {
        nome: {
          type: String,
          default: "Feijão",
          enun: { values: ["Feijão"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 4.5,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      
      alimento4: {
        nome: {
          type: String,
          default: "Arroz",
          enun: { values: ["Arroz"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 3,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      
      alimento5: {
        nome: {
          type: String,
          default: "Farinha",
          enun: { values: ["Farinha"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 1.5,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
      },
      alimento6: {
        nome: {
          type: String,
          default: "Batata",
          enun: { values: ["Batata"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 6,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      alimento7: {
        nome: {
          type: String,
          default: "Legumes (Tomate)",
          enun: { values: ["Legumes (Tomate)"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 9,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      alimento8: {
        nome: {
          type: String,
          default: "Pão Francês",
          enun: { values: ["Pão Francês"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 6,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      alimento9: {
        nome: {
          type: String,
          default: "Café em pó",
          enun: { values: ["Café em pó"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 0.6,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      alimento10: {
        nome: {
          type: String,
          default: "Frutas (Banana)",
          enun: { values: ["Frutas (Banana)"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 90,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      alimento11: {
        nome: {
          type: String,
          default: "Açucar",
          enun: { values: ["Açucar"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 3,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      alimento12: {
        nome: {
          type: String,
          default: "Banha/Óleo",
          enun: { values: ["Banha/Óleo"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 4.5,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
      alimento13: {
        nome: {
          type: String,
          default: "Manteiga",
          enun: { values: ["Manteiga"], message: "Nome do alimento não pode ser alterado!" },
          require: true,
          match: [/^[A-zÀ-ú /()]+$/, 'O nome do alimento, referênte a cesta básica, só pode conter letras'],
        },
        variadade:[{
          marca: {
            type: string,
            require: true,
            match: [/^[a-zà-ú /()]+$/, 'a marca do alimento, referênte a cesta básica, só pode conter letras'],
          },
          quantidade: {
          type: Number,
          default: 4.5,
          match: [/^[0-9]+$/, 'A quantidade do alimento, referênte a cesta básica, só pode conter números'],
          require: true
        },
        preco: {
            type: Number,
            match: [/^[0-9]+$/, 'O preço do alimento, referênte a cesta básica, só pode conter números'],
          }, 
        }],
        valorMax: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor maximo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMin: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor minimo dos produtos, referêntes a cesta básica, só pode conter números'],
        },
        valorMedio: {
          type: Number,
          match: [/^[0-9]+$/, 'O valor Medio dos produtos, referêntes a cesta básica, só pode conter números'],
        },_id: false
    },
  },
    valorTotal: {
      type: Number,
      match: [/^[0-9]+$/, 'O valor total dos produtos, referêntes a cesta básica, só pode conter números'],
    },_id: false
  },
  mes: {
    type: String,
    required: [true, "O mês de referência da cesta básica é uma informação obrigatoria"],
    enum: {
      values: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      message: 'O mês de referência da cesta básica é invalido'
    },
  },
}, { versionKey: false }, { timestamps: true });


CotacoesSchema.pre('save', function (next) {
  /*console.log(this);
  Object.keys(this._doc).concat(Object.keys(this.cesta.alimentos)).forEach(element => {
   //console.log(element); 
  });*/
  t/*his.cesta.valorTotal = 0; let falso =0;
  Object.keys(this.cesta.alimentos).forEach(element => {
   this.cesta.valorTotal += this.cesta.alimentos[element].preco
   if (!this.cesta.alimentos[element].preco) {falso++}
  });
  this.cesta.valorMedio = this.cesta.valorTotal / ((Object.keys(this.cesta.alimentos)).length-falso)*/
  next();
})
CotacoesSchema.pre('findOneAndUpdate', function (next) {
  for (let i = 0; i < ((update = Object.keys(this._update)).length - 2); i++) {
    if (this.schema._requiredpaths.indexOf(update[i].toLowerCase()) == -1) {
      next(new Error('Campo "' + update[i] + '" é invalido!'))
    }
  }
  this.options.runValidators = true;
  next();
});
module.exports = model("Cotacoes", CotacoesSchema);

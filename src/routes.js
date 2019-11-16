const express = require("express");
const auth = require("./auth");

const routes = express.Router();
const UsersController = require("./controllers/UsersControllers");
const ComerciosController = require("./controllers/ComerciosControllers");
const CotacoesController = require("./controllers/CotacoesControllers")
/*
routes.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});*/
routes.post("/aut", UsersController.aut);
routes.use(auth);
routes.get("/estaautenticado", UsersController.estaautenticado);
routes.post("/user", UsersController.store);
routes.get("/user", UsersController.list);
routes.get("/user/:email", UsersController.index);
routes.put("/user/:email", UsersController.update);
routes.delete("/user/:email", UsersController.destroy);

routes.post("/comercio", ComerciosController.store);
routes.get("/comercio", ComerciosController.list);
routes.get("/comercio/:cnpj", ComerciosController.index);
routes.put("/comercio/:cnpj", ComerciosController.update);
routes.delete("/comercio/:cnpj", ComerciosController.destroy);

routes.post("/cotacao", CotacoesController.store);
routes.get("/cotacao", CotacoesController.list);
routes.get("/cotacao/:id", CotacoesController.index);
routes.put("/cotacao/:id", CotacoesController.update);
routes.delete("/cotacao/:id", CotacoesController.destroy);


module.exports = routes;

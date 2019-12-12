const express = require("express");
const auth = require("./auth");

const routes = express.Router();
const UsersController = require("./controllers/UsersControllers");
//const ComerciosController = require("./controllers/ComerciosControllers");
const CotacoesController = require("./controllers/CotacoesControllers")
const GenericController = require("./controllers/GenericControllers")

routes.post("/aut", UsersController.aut);
routes.use(auth);
routes.get("/estaautenticado", UsersController.estaautenticado);
routes.post("/user", UsersController.store);
routes.get("/user/:email", UsersController.email);
//routes.post("/comercio", ComerciosController.store);
routes.post("/cotacao", CotacoesController.store);
routes.get("/:generic", GenericController.list);
routes.get("/:generic/:filtro", GenericController.list);
routes.get("/:generic/unico/:id", GenericController.index);
routes.put("/:generic/:id", GenericController.update);
routes.delete("/:generic/:id", GenericController.destroy);
routes.use(function (req, res) {
  res.send(404);
});
module.exports = routes;
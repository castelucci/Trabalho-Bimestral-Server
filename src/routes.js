const express = require("express");
const auth = require("./auth");

const routes = express.Router();
const UsersController = require("./controllers/UsersControllers");
const ComerciosController = require("./controllers/ComerciosControllers");
const CotacoesController = require("./controllers/CotacoesControllers")
const GenericController = require("./controllers/GenericControllers")

routes.post("/aut", UsersController.aut);
routes.use(auth);
routes.get("/estaautenticado", UsersController.estaautenticado);
routes.post("/user", UsersController.store);
routes.post("/comercio", ComerciosController.store);
routes.post("/cotacao", CotacoesController.store);
routes.get("/:generic", GenericController.list);
routes.get("/:generic/:id", GenericController.index);
routes.put("/:generic/:id", GenericController.update);
routes.delete("/:generic/:id", GenericController.destroy);

/*//routes.get("/user", UsersController.list);
routes.get("/user/:email", UsersController.index);
routes.put("/user/:email", UsersController.update);
routes.delete("/user/:email", UsersController.destroy);

routes.get("/comercio", ComerciosController.list);
routes.get("/comercio/:cnpj", ComerciosController.index);
routes.put("/comercio/:cnpj", ComerciosController.update);
routes.delete("/comercio/:cnpj", ComerciosController.destroy);

routes.get("/cotacao", CotacoesController.list);
routes.get("/cotacao/:id", CotacoesController.index);
routes.put("/cotacao/:id", CotacoesController.update);
routes.delete("/cotacao/:id", CotacoesController.destroy);
*/

module.exports = routes;

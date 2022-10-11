module.exports = app => {
    const sales = require("../controllers/administrador.controller.js");
    var router = require("express").Router();
    
    router.post("/", sales.create);
    router.get("/", sales.findAll);
    router.get("/:id", sales.findOne);
    router.put("/:id", sales.update);
    router.delete("/:id", sales.delete);
    router.delete("/", sales.deleteAll);
    app.use('/api/sales', router);
  };
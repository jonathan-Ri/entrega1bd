module.exports = app => {
    const alarma = require("../controllers/alarma.controller.js");
    var router = require("express").Router();
    
    router.post("/", alarma.create);
    router.get("/", alarma.findAll);
    router.get("/:id", alarma.findOne);
    router.put("/:id", alarma.update);
    router.delete("/:id", alarma.delete);
    router.delete("/", alarma.deleteAll);
    app.use('/api/alarma', router);
  };
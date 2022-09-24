// Importe de dependencias
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// Inicialización de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Importa modelos a Sequelize
db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.administrador = require("./administrador.model.js")(sequelize, Sequelize);
db.organismo = require("./organismo.model.js")(sequelize, Sequelize);
db.personas = require("./personas.model.js")(sequelize, Sequelize);
db.alarma = require("./alarma.model.js")(sequelize, Sequelize);



db.usuarios.hasMany(db.organismo);
db.organismo.belongsTo(db.usuarios);

db.usuarios.hasMany(db.personas);
db.personas.belongsTo(db.usuarios);

db.usuarios.hasMany(db.administrador);
db.administrador.belongsTo(db.usuarios);

db.personas.hasMany(db.alarma);
db.alarma.belongsTo(db.personas);

db.administrador.hasMany(db.alarma);
db.alarma.belongsTo(db.administrador);

db.organismo.hasMany(db.alarma);
db.alarma.belongsTo(db.organismo);
module.exports = db;

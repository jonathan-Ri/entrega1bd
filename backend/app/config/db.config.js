module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "casita123",//editar con contraseña correspondiente
    DB: "alerta",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
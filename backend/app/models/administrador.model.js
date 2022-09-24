module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("Administrador", {
      permisos: {
        type: Sequelize.INTEGER
      }
    });
    return Sale;
  };
  
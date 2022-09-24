
module.exports = (sequelize, Sequelize) => {
    const usuario = sequelize.define("Usuario", {
      Nombres: {
        type: Sequelize.STRING,
      }, 
      apellidos: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      edad: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.INTEGER
      },
      RUT: {
        type: Sequelize.INTEGER
      }
    });
    return usuario;
  };
  
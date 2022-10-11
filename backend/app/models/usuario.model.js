
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
      password: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      RUT: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      }
    });
    return usuario;
  };
  
module.exports = (sequelize, Sequelize) => {
    const Alarma = sequelize.define("Alarma", {
      fecha: {
        type: Sequelize.DATE
      },
      tipo_emergencia: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      observacion: {
        type: Sequelize.STRING
      },
      localizacion: {
        type: Sequelize.STRING
      }
    });
    return Alarma;
  };
  
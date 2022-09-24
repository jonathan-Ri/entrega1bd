module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("Personas", {
      Discapacidad: {
        type: Sequelize.STRING,
      },
      Calle: {
        type: Sequelize.STRING
      },
      Ciudad: {
        type: Sequelize.STRING
      }
    });
    return Persona;
  };
  
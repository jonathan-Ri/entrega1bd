module.exports = (sequelize, Sequelize) => {
    const Organismo = sequelize.define("Organismo", {
      Organismo: {
        type: Sequelize.STRING,
      },
      Cargo: {
        type: Sequelize.STRING
      }
    });
    return Organismo;
  };
  
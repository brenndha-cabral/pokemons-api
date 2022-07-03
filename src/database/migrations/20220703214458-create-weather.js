module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Weather', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      weather: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Weather');
  },
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Types', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      typePokemon: {
        type: Sequelize.STRING,
        field: 'type_pokemon',
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
    await queryInterface.dropTable('Types');
  },
};

// BlogPost.associate = (models) => {
//   BlogPost.belongsTo(models.User,
//     { foreignKey: 'userId', as: 'user' });
// };

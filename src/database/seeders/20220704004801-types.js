const { insertTypesDatabase } = require('../../utils/convertAndInsertDatabase');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Types',
      insertTypesDatabase(),
      { timestamps: false },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Types', null, {});
  },
};

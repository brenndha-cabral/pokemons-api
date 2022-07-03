module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      pokedexNumber: {
        type: Sequelize.INTEGER,
        field: 'pokedex_number',
      },
      image: {
        type: Sequelize.STRING,
      },
      generation: {
        type: Sequelize.INTEGER,
      },
      evolutionStage: {
        type: Sequelize.STRING,
        field: 'evolution_stage',
      },
      envolved: {
        type: Sequelize.BOOLEAN,
      },
      familyId: {
        type: Sequelize.INTEGER,
        field: 'family_id',
      },
      crossGen: {
        type: Sequelize.BOOLEAN,
        field: 'cross_gen',
      },
      statTotal: {
        type: Sequelize.INTEGER,
        field: 'stat_total',
      },
      atk: {
        type: Sequelize.INTEGER,
      },
      def: {
        type: Sequelize.INTEGER,
      },
      sta: {
        type: Sequelize.INTEGER,
      },
      legendary: {
        type: Sequelize.INTEGER,
      },
      aquireable: {
        type: Sequelize.INTEGER,
      },
      spawns: {
        type: Sequelize.BOOLEAN,
      },
      regional: {
        type: Sequelize.BOOLEAN,
      },
      raidable: {
        type: Sequelize.INTEGER,
      },
      hatchable: {
        type: Sequelize.INTEGER,
      },
      shiny: {
        type: Sequelize.BOOLEAN,
      },
      nest: {
        type: Sequelize.BOOLEAN,
      },
      new: {
        type: Sequelize.BOOLEAN,
      },
      notGettable: {
        type: Sequelize.BOOLEAN,
        field: 'not_gettable',
      },
      futureEnvolve: {
        type: Sequelize.BOOLEAN,
        field: 'future_envolve',
      },
      combatePowerLevel40: {
        type: Sequelize.INTEGER,
        field: 'cp_level_40',
      },
      combatePowerLevel39: {
        type: Sequelize.INTEGER,
        field: 'cp_level_39',
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
    await queryInterface.dropTable('Pokemons');
  },
};

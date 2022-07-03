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
        type: Sequelize.INTEGER,
      },
      familyId: {
        type: Sequelize.INTEGER,
        field: 'family_id',
      },
      crossGen: {
        type: Sequelize.INTEGER,
        field: 'cross_gen',
      },
      type1: {
        type: Sequelize.STRING,
        field: 'type_1',
      },
      type2: {
        type: Sequelize.STRING,
        field: 'type_2',
      },
      weather1: {
        type: Sequelize.STRING,
        field: 'weather_1',
      },
      weather2: {
        type: Sequelize.STRING,
        field: 'weather_2',
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
        type: Sequelize.INTEGER,
      },
      regional: {
        type: Sequelize.INTEGER,
      },
      raidable: {
        type: Sequelize.INTEGER,
      },
      hatchable: {
        type: Sequelize.INTEGER,
      },
      shiny: {
        type: Sequelize.INTEGER,
      },
      nest: {
        type: Sequelize.INTEGER,
      },
      new: {
        type: Sequelize.INTEGER,
      },
      notGettable: {
        type: Sequelize.INTEGER,
        field: 'not_gettable',
      },
      futureEnvolve: {
        type: Sequelize.INTEGER,
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
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Pokemons');
  },
};

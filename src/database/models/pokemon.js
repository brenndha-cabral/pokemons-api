module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define(
    'Pokemon',
    {
      name: DataTypes.STRING,
      pokedexNumber: DataTypes.INTEGER,
      image: DataTypes.STRING,
      generation: DataTypes.INTEGER,
      evolutionStage: DataTypes.STRING,
      envolved: DataTypes.INTEGER,
      familyId: DataTypes.INTEGER,
      crossGen: DataTypes.INTEGER,
      type1: DataTypes.STRING,
      type2: DataTypes.STRING,
      weather1: DataTypes.STRING,
      weather2: DataTypes.STRING,
      statTotal: DataTypes.INTEGER,
      atk: DataTypes.INTEGER,
      def: DataTypes.INTEGER,
      sta: DataTypes.INTEGER,
      legendary: DataTypes.INTEGER,
      aquireable: DataTypes.INTEGER,
      spawns: DataTypes.INTEGER,
      regional: DataTypes.INTEGER,
      raidable: DataTypes.INTEGER,
      hatchable: DataTypes.INTEGER,
      shiny: DataTypes.INTEGER,
      nest: DataTypes.INTEGER,
      new: DataTypes.INTEGER,
      notGettable: DataTypes.INTEGER,
      futureEnvolve: DataTypes.INTEGER,
      combatePowerLevel40: DataTypes.INTEGER,
      combatePowerLevel39: DataTypes.INTEGER,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Pokemons',
    },
  );

  return Pokemon;
};

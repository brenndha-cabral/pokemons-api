module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define(
    'Pokemon',
    {
      name: DataTypes.STRING,
      pokedexNumber: DataTypes.INTEGER,
      image: DataTypes.STRING,
      generation: DataTypes.INTEGER,
      evolutionStage: DataTypes.STRING,
      envolved: DataTypes.BOOLEAN,
      familyId: DataTypes.INTEGER,
      crossGen: DataTypes.BOOLEAN,
      statTotal: DataTypes.INTEGER,
      atk: DataTypes.INTEGER,
      def: DataTypes.INTEGER,
      sta: DataTypes.INTEGER,
      legendary: DataTypes.INTEGER,
      aquireable: DataTypes.INTEGER,
      spawns: DataTypes.BOOLEAN,
      regional: DataTypes.BOOLEAN,
      raidable: DataTypes.INTEGER,
      hatchable: DataTypes.INTEGER,
      shiny: DataTypes.BOOLEAN,
      nest: DataTypes.BOOLEAN,
      new: DataTypes.BOOLEAN,
      notGettable: DataTypes.BOOLEAN,
      futureEnvolve: DataTypes.BOOLEAN,
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

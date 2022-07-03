module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    'Type',
    {
      typePokemon: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Types',
    },
  );

  return Type;
};

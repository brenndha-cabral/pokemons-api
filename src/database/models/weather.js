module.exports = (sequelize, DataTypes) => {
  const Weather = sequelize.define(
    'Weather',
    {
      weather: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Weather',
    },
  );

  return Weather;
};

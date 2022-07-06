const { readFileSync } = require('fs');

const readingFile = readFileSync('src/database/pokemons.xlsx').toString().replace(/"/g, '');

const splitFile = readingFile.split('\n');

const [, ...file] = splitFile;

let arr = [];

const convertAndInsertAllDatabase = () => {
  arr = [];

  file.forEach((pokemon) => {
    const splitFiles = pokemon.split(',');

    arr.push({
      name: splitFiles[1],
      pokedex_number: Number(splitFiles[2]),
      image: splitFiles[3],
      generation: Number(splitFiles[4]),
      evolution_stage: splitFiles[5],
      envolved: Boolean(Number(splitFiles[6])),
      family_id: Number(splitFiles[7]),
      cross_gen: Boolean(Number(splitFiles[8])),
      type_1: splitFiles[9],
      type_2: splitFiles[10], // findTypeByName(splitFiles[10]).id
      stat_total: Number(splitFiles[13]),
      atk: Number(splitFiles[14]),
      def: Number(splitFiles[15]),
      sta: Number(splitFiles[16]),
      legendary: Number(splitFiles[17]),
      aquireable: Number(splitFiles[18]),
      spawns: Boolean(Number(splitFiles[19])),
      regional: Boolean(Number(splitFiles[20])),
      raidable: Number(splitFiles[21]),
      hatchable: Number(splitFiles[22]),
      shiny: Boolean(Number(splitFiles[23])),
      nest: Boolean(Number(splitFiles[24])),
      new: Boolean(Number(splitFiles[25])),
      not_gettable: Boolean(Number(splitFiles[26])),
      future_envolve: Boolean(Number(splitFiles[27])),
      cp_level_40: Number(splitFiles[28]),
      cp_level_39: Number(splitFiles[29]),
    });
  });
  console.log(arr);
  return arr;
};
const insertTypesDatabase = () => {
  arr = [];

  const typesArray = [];

  const uniqueArray = [...new Set(typesArray)];
  // const types = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fire', 'Fairy', 'Fighting', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];

  file.forEach((type) => {
    const splitFiles = type.split(',');

    typesArray.push([...splitFiles[9], ...splitFiles[10]]);
  });

  arr.push({ type_pokemon: uniqueArray });

  return arr;
};

const insertWeatherDatabase = () => {
  arr = [];

  const weathers = ['Cloudy', 'Fog', 'Partly cloudy', 'Rainy', 'Snow', 'Windy', 'Sunny/Clear'];

  weathers.forEach((weather) => {
    arr.push({
      name: weather,
    });
  });

  return arr;
};

module.exports = {
  convertAndInsertAllDatabase,
  insertTypesDatabase,
  insertWeatherDatabase,
};

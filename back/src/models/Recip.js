function somfunc () {
  console.log('Nothing')
}

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    tags: DataTypes.STRING,
    ingedients: DataTypes.STRING,
    time: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: somfunc,
      beforeUpdate: somfunc,
      beforeSave: somfunc
    }
  })
  return Recipe
}

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    ingedients: DataTypes.STRING,
    time: DataTypes.STRING,
    image: DataTypes.STRING,
    kcal: DataTypes.STRING,
    composition: DataTypes.STRING
  })
  Recipe.associate = (models) => {
    Recipe.belongsToMany(models.Tags, {
      through: 'RecipeTags',
      as: 'Tags',
      foreignKey: 'RecipeID'
    })
  }
  return Recipe
}

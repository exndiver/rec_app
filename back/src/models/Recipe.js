module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    ingedients: DataTypes.STRING,
    time: DataTypes.STRING,
    image: DataTypes.STRING,
    kcal: DataTypes.STRING,
    composition: DataTypes.STRING
  })
  Recipes.associate = (models) => {
    Recipes.belongsToMany(models.Tags, {
      through: 'RecipeTags',
      as: 'Tags',
      foreignKey: 'RecipeID'
    })
  }
  return Recipes
}

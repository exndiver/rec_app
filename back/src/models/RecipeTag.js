module.exports = (sequelize, DataTypes) => {
  const RecipeTags = sequelize.define('RecipeTags', {
    RecipeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipes',
        key: 'id'
      }
    },
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tags',
        key: 'id'
      }
    }
  })
  return RecipeTags
}

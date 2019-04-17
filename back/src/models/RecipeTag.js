module.exports = (sequelize, DataTypes) => {
  const RecipeTags = sequelize.define('RecipeTags', {
    RecipeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recipe',
        key: 'id'
      }
    },
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tag',
        key: 'id'
      }
    }
  })
  return RecipeTags
}

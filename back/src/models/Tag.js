module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Tags.associate = (models) => {
    Tags.belongsToMany(models.Recipes, {
      through: 'RecipeTags',
      as: 'Recipes',
      foreignKey: 'TagID'
    })
  }
  return Tags
}

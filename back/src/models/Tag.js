module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Tag.associate = (models) => {
    Tag.belongsToMany(models.Recipe, {
      through: 'RecipeTags',
      as: 'Recipes',
      foreignKey: 'TagID'
    })
  }
  return Tag
}

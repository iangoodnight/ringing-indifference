'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventoryByLocation = sequelize.define('InventoryByLocation', {
    code: DataTypes.STRING,
    warehouse: DataTypes.STRING,
    location: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    reserve: DataTypes.BOOLEAN
  }, {});
  InventoryByLocation.associate = function(models) {
    // associations can be defined here
  };
  return InventoryByLocation;
};
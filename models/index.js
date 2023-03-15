// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
  });
// Categories have many Products
Category.hasMany(Product, {
    //! foreignKey: 'driver_id', find the id needed for product
    onDelete: 'CASCADE',
  });
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    // Define the third table needed to store the foreign keys
    //! fix this not sure what to put below here
    through: {
        model: Trip,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    // Define the third table needed to store the foreign keys
    //! fix this not sure what to put below here
    through: {
      model: Trip,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
  });
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
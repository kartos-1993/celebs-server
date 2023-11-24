

const ProductAttribute = require("../models/productAttribute")
const slugify = require("slugify")


/**
 * create category
 */

exports.create = async (req, res) => {
  try {
    const { name, parent } = req.body;
    const productAttributes = await new ProductAttribute({
      name,
      parent,      
      slug: slugify(name),
    }).save();
    res.json(productAttributes);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

/**
 * get single product attributes
 */
exports.read = async (req, res) => {
  try {
    const productAttribute = await ProductAttribute.findOne({ slug: req.params.slug }).exec();
    res.json(productAttribute);
  } catch (error) {
    console.log(error);
  }
};



/**
 * get all product attributes
 */

exports.list = async (req, res) => {
  try {
    res.json(await ProductAttribute.find({}).sort({ createdAt: -1 }).exec());
  } catch (error) {
    console.log(error);
  }
};


/**
 * update product attribute
 */

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await ProductAttribute.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).send("Product Attribute update failed");
  }
};




/**
 * delete category
 */
exports.remove = async (req, res) => {
  try {
    const deleted = await ProductAttribute.findOneAndDelete({
      slug: req.params.slug,
    });
    res.json(deleted);
  } catch (error) {
    res.status(400).send("Category delete failed");
  }
};


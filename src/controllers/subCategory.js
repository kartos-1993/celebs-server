const SubCategory = require("../models/subcategory");
const slugify = require("slugify");

/**
 * create category
 */

exports.create = async (req, res) => {
  try {
    const { name, parent } = req.body;
    const subCategory = await new SubCategory({
      name,
      parent,
      slug: slugify(name),
    }).save();
    res.json(subCategory);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

/**
 * read sub-category
 */

exports.read = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOne({
      slug: req.params.slug,
    }).exec();
    res.json(subCategory);
  } catch (error) {
    console.log(error);
  }
};

/**
 * update sub-category
 */

exports.update = async (req, res) => {
  const { name, parent } = req.body;
  try {
    const updated = await SubCategory.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      { name, parent,slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).send("SubCategory update failed");
  }
};

/**
 * list sub-categories
 */

exports.list = async (req, res) => {
  try {
    res.json(await SubCategory.find({}).sort({ createdAt: -1 }).exec());
  } catch (error) {
    console.log(error);
  }
};

/**
 * delete sub-category
 */
exports.remove = async (req, res) => {
  try {
    const deleted = await SubCategory.findOneAndDelete({
      slug: req.params.slug,
    });
    res.json(deleted);
  } catch (error) {
    res.status(400).send("SubCategory delete failed");
  }
};


exports.listWithCategory = async (req, res) => {
  const category  = req.body.category
  try {
    res.json(await SubCategory.find({}).sort({ createdAt: -1 }).exec());
  } catch (error) {
    console.log(error);
  }
};
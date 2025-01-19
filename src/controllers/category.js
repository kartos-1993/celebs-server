const Category = require("../models/category");
const slugify = require("slugify");
const SubCategory = require("../models/subcategory");

/**
 * create category
 */

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await new Category({ name, slug: slugify(name) }).save();
    res.json(category);
  } catch (error) {
    // console.log(error);
    res.status(400).send(error);
  }
};

/**
 * read single category
 */

exports.read = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug }).exec();
    res.json(category);
  } catch (error) {
    console.log(error);
  }
};

/**
 * update category
 */

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Category.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).send("Category update failed");
  }
};

/**
 * list categories
 */

exports.list = async (req, res) => {
  try {
    res.json(await Category.find({}).sort({ createdAt: -1 }).exec());
  } catch (error) {
    console.log(error);
  }
};

/**
 * delete category
 */
exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (error) {
    res.status(400).send("Category delete failed");
  }
};

/****
 * 
 */
/***
 * get subcategories with parent category
 */

exports.getSubs = async (req, res) => {
  SubCategory.find({ parent: req.params._id }).exec((err, subs) => {
    if (err) res.send(err);
    res.json(subs);
  });
};

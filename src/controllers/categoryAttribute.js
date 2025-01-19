const CategoryAttribute = require("../models/categoryAttribute");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryAttribute = await new CategoryAttribute({ name }).save();
    res.json(categoryAttribute);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

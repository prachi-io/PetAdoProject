const Category = require("../models/Category");
const Pet = require('../models/Pet');

exports.getAll = async (req, res) => {
  console.log("get karo all")
  try {
    const categories = await Category.find();
    // console.log("Categories : " , categories)
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const created = await Category.create({
      name,
    });

    res.json({ message: "Category successfuly created.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.getid = async (req, res) => {
  try {
    const { name } = req.params;
    console.log(name , req.params)
    const created = await Category.findOne({name});
    console.log(created._id)
    const ans = created._id
    console.log(ans)
    res.json({ message: "Category successfuly got.",  ans});
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const created = await Category.findByIdAndUpdate(id, {
      name,
    },{new:true});

    res.json({ message: "Category successfuly updated.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Category.findByIdAndRemove(id);

    res.json({ message: "Category successfuly deleted.", deleted });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};


const formModel = require("../database/formModel");

exports.getForms = async (req, res, next) => {
  const formData = await formModel.find();
  const formDetail = [];

  formData.forEach(data => {

    const form = {
      _id: data._id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      dateSubmit: data.dateSubmit
    };
    formDetail.push(form);
  });

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
  res.status(200).json(formData);
  next();
};


exports.newForm = async (req, res, next) => {

  const user = new formModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateSubmit: Date.now()
  });

  await user.save();

  return res.status(201).json({
    status: "Passed",
    Message: "Form toegevoegd",
    username
  })

};

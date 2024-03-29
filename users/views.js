const jwt = require("jsonwebtoken");

const Model = require("../auth/models");

module.exports.ListView = async (req, res) => {
  const obj = await Model.find();
  res.json(obj);
};

module.exports.editView = async (req, res) => {
  if (req.user.admin) {
    Model.findByIdAndUpdate(req.body.id, req.body, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
      .clone()
      .catch((err) => {
        res.json({ err });
      });
  } else {
    res.json({ message: "Not Authorized" });
  }
};

module.exports.deleteView = async (req, res) => {
  await Model.findByIdAndRemove({ _id: req.body.id }, (err) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json({ message: "deleted" });
    }
  })
    .clone()
    .catch((err) => {
      res.json({ err });
    });
};

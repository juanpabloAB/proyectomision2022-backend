const Model = require("./models");

module.exports.ListView = async (req, res) => {
  const obj = await Model.find();
  res.json(obj);
};

module.exports.createView = async (req, res) => {
  const obj = await new Model(req.body);
  obj.save();

  res.json({ message: "created" });
  //res.json(products);
};

module.exports.editView = async (req, res) => {  
  Model.findByIdAndUpdate(
      req.body.id,
      req.body,
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    ).clone().catch(err=>{
      res.json({err})
    });
  

  
};

module.exports.deleteView = async (req, res) => {
  await Model.findByIdAndRemove({ _id: req.body.id }, (err) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json({ message: "deleted" });
    }
  }).clone().catch(err=>{
    res.json({err})
  });;
};

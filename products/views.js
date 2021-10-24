const Model = require("./models");

module.exports.ListView = async (req, res) => {
  const obj = await Model.find();
  res.json(obj);
};

module.exports.createView = async (req, res) => {
  const obj = await new Model(req.body);
  obj.save()
  .then((createdProduct) => {
    res.status(201).json("Creado satisfactoriamente");
  })
  .catch((error) => {
    res.status(400).json("No fue posible crear el producto");
  });
};

module.exports.editView = async (req, res) => {  
  Model.findByIdAndUpdate(
      req.body.id,
      req.body,
      (err, result) => {
        if (!err) {
          res.status(201).json("Actualizado satisfactoriamente");
        } else {
          res.send(result);
        }
      }
    ).clone().catch(err=>{
      res.status(201).json("No fue posible actualizar el producto");
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

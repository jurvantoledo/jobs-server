const { Router } = require("express")
const Weapon = require("../models").weapon
const Element = require("../models").element

const router = new Router()

router.get("/", async(req, res, next) => {
    try {
        const weapons = await Weapon.findAll({
            include: [Element],
            order: [[Element, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", weapons})
        
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "product id is not a number" });
    }
  
    const weapon = await Weapon.findByPk(id, {
      include: [Element],
      order: [[Element, "createdAt", "DESC"]]
    });
  
    if (weapon === null) {
      return res.status(404).send({ message: "Product not found" });
    }
  
    res.status(200).send({ message: "ok", weapon });
  });

  router.post("/:id", async (req, res, next) => {
    try {
    const weapon = await Weapon.findByPk(req.params.id);
    console.log(weapon);
  
    const { name } = req.body;
    if 
    (!name) 
    {
      return res.status(400).send(
        "Please make sure everything is filled in right."
        );
    }
  
      const newElement = await Element.create({
        name,
        weaponId: weapon.id,
      });
      
      res.status(201).send({ message: "Element added", ...newElement.dataValues });
    } catch (error) {
        next(error)
      }
  });

module.exports = router;
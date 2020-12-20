const { Router } = require("express")
const User = require("../models").user
const Weapons = require("../models").weapon

const router = new Router()

router.get("/", async(req, res, next) => {
    try {
        const users = await User.findAndCountAll({
            include: [Weapons],
            order: [[Weapons, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", users})
        
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
  
    const user = await User.findByPk(id, {
      include: [Weapons],
      order: [[Weapons, "createdAt", "DESC"]]
    });
  
    if (user === null) {
      return res.status(404).send({ message: "Product not found" });
    }
  
    res.status(200).send({ message: "ok", user });
  });
  
module.exports = router;
const { Router } = require("express")
const Weapon = require("../models").weapon
const Element = require("../models").element

const router = new Router()

router.get("/", async(req, res, next) => {
    try {
        const elements = await Element.findAll({
            include: [Weapon],
            order: [[Weapon, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", elements})
        
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
      const weaponId = req.params.id
      const toDelete = await Element.findByPk(weaponId)
  
      if(!toDelete) {
        res.status(404).send("element not found")
      }
  
      const deleted = await toDelete.destroy()
      res.json(deleted)
    } catch (e) {
      next(e)
    }
  });

  module.exports = router;
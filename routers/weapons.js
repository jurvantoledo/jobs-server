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

module.exports = router;
const express = require("express");
const adoptionController = require("../controllers/adoptionController");

const router = express.Router();

//get all media
router.get("/getAll", adoptionController.getAll);

//post create new media
router.post("/create", adoptionController.create);

router.get("/get/:id",adoptionController.getOne)

router.put("/update/:id",adoptionController.update)

router.delete("/delete/:id", adoptionController.delete)

module.exports = router;

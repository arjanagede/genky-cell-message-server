const express = require("express");
const controller = require("../controller");

const router = express.Router();

router.get("/receiveChat", controller.receiveChat);
router.post("/sendChat", controller.transmitChat);

module.exports = router;

const router = require('express').Router();
const controller = require('./payment.controller');

router.get("/payment/:id", controller.getById);
router.get("/payment", controller.getAll);
router.post("/payment", controller.create);

module.exports = router;

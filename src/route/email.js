const router = require("express").Router();
const Controller = require("../controller/email.controller");
router.post("/submit", Controller.submitHandle);
module.exports = router;

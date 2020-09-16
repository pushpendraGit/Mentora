const express = require("express");

const passport = require("passport");

const router = express.Router();

const userController = require("../../controllers/user");

router.post("/createUser", userController.create);
router.post("/signin", userController.createSession);
router.get(
  "/verify/:email",
  passport.authenticate("jwt", { session: false }),
  userController.emailVerifire
);

module.exports = router;

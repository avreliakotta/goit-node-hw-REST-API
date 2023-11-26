const express = require ("express");
const { validateBody,authenticate } = require("../../middleware");
const {schemas} = require("../../models/mongooseModel/user");
const ctrl=require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema),ctrl.register);

router.post("/login",validateBody(schemas.loginSchema),ctrl.login);

router.get("/current",authenticate,ctrl.getCurrent);

router.post("/logout",authenticate,ctrl.logout);

module.exports=router;
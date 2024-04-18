const express = require("express");
const router = express.Router();
const User = require("../models/user");

//CADASTRANDO USUARIO
router.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name) {
    return res.status(422).json({ message: "Nome Obrigatorio" });
  }
});

module.exports = router;

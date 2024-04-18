const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//CADASTRANDO USUARIO
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    //VERIFICA SE TODOS OS CAMPOS ESTÃO PREENCHIDOS

    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(422)
        .json({ error: true, message: "Todos os campos são obrigatórios" });
    }

    //VERIFICA SE AS SENHAS SÃO INDENTICAS

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: true, message: "As senhas precisam ser iguais." });
    }

    //VERIFICA SE O EMAIL ESTÁ CADASTRADO
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: true, message: "Email já cadastrado." });
    }

    //CRIAR PASSWORD
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //CRIAR NOVO USUARIO
    const newUser = new User({ name, email, password: passwordHash });
    await newUser.save();

    //USUARIO CADASTRADO COM SUCESSO
    res
      .status(201)
      .json({ error: false, message: "Usuário cadastrado com sucesso." });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, message: "Erro ao cadastrar usuário." });
  }
});
module.exports = router;

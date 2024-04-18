const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");

//PEGAR TODOS OS REGISTROS
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const movies = await Movies.find({}).skip(skip).limit(limit);
    res.json({ error: false, movies });
  } catch (err) {
    res.status(500).json({ error: true, message: "Error ao buscar filmes" });
  }
});

//PEGAR UM REGISTRO ESPECIFICO COM O ID
router.get("/:id", async (req, res) => {
  try {
    const movies = await Movies.findById(req.params.id);
    if (!movies) {
      return res
        .status(404)
        .json({ error: true, message: "Filme não encontrado." });
    }
    res.json({ error: false, movies });
  } catch (err) {
    res.status(500).json({ error: true, message: "Erro ao buscar filme." });
  }
});

//CRIAR UM REGISTRO
router.post("/", async (req, res) => {
  try {
    const movieData = req.body;
    const movies = new Movies(movieData);
    const saveMovie = await movies.save();
    res.status(201).json({ error: false, movies: saveMovie });
  } catch (err) {
    res.status(400).json({ error: true, message: "Error ao Criar Filme" });
  }
});

//ATUALIZAR UM REGISTRO
router.put("/:id", async (req, res) => {
  try {
    const updateMovie = await Movies.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updateMovie) {
      return res
        .status(404)
        .json({ error: true, message: "Filme não encontrado." });
    }
    res.json({ error: false, movie: updateMovie });
  } catch (err) {
    res.status(400).json({ error: true, message: "Erro ao atualizar filme" });
  }
});

//DELETAR UM REGISTRO
router.delete("/:id", async (req, res) => {
  try {
    const deletedMovie = await Movies.findByIdAndDelete(req.params.id);

    if (!deletedMovie) {
      return res
        .status(404)
        .json({ error: true, message: "Filme não encontrado." });
    }

    res.json({ error: false, message: "Filme deletado com sucesso." });
  } catch (err) {
    res.status(500).json({ error: true, message: "Error ao deletar filme." });
  }
});

module.exports = router;

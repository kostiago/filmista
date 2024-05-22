"use client";
import Button from "@/components/Button/Button";
import styles from "./table.module.scss";
import Movie from "./Movie";
import { useState } from "react";

interface Movie {
  name: string;
  year: string;
  category: string;
}

const Table = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [addMovie, setAddMovie] = useState<Movie>({
    name: "",
    year: "",
    category: "",
  });

  const cadastrar = () => {
    setMovies([addMovie, ...movies]);
  };

  return (
    <div className={styles.container}>
      <div>
        <div>
          <label>nome</label>
          <input
            type="text"
            placeholder="nome do filme"
            onChange={(e) => {
              setAddMovie({ ...addMovie, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            name=""
            id=""
            onChange={(e) => {
              setAddMovie({ ...addMovie, category: e.target.value });
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <label>Ano de lançamento</label>
          <input
            type="number"
            placeholder="nome do filme"
            onChange={(e) => {
              setAddMovie({ ...addMovie, year: e.target.value });
            }}
          />
        </div>
        <div onClick={cadastrar}>
          <Button rounded variant="addUser">
            Novo Conteudo
          </Button>
        </div>
      </div>
      <table className={styles.table}>
        <tr className={styles.header}>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Ano de lançamento</th>
          <th>Ações</th>
        </tr>
        <tbody>
          {movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

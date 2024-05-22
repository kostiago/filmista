"use client";
import Button from "@/components/Button/Button";
import styles from "./table.module.scss";
import React from "react";

interface moviesProps {
  movie: {
    name: string;
    year: string;
    category: string;
  };
}

const Movie: React.FC<moviesProps> = ({ movie }) => {
  const showMovie = () => {
    alert(movie.name);
  };
  return (
    <tr>
      <td>{movie.name}</td>
      <td>{movie.category}</td>
      <td>{movie.year}</td>
      <td className={styles.btn}>
        <div onClick={showMovie}>
          <Button rounded variant="info">
            Editar
          </Button>
        </div>
        {""}
        <Button rounded variant="danger">
          Excluir
        </Button>
      </td>
    </tr>
  );
};

export default Movie;

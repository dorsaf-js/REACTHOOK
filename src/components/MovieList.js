import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Form } from "react-bootstrap";
import { starTab } from "../assets/Data";

function MovieList({ movieList }) {
  const [search, setSearch] = useState("");
  const handlSearch = (e) => {
    setSearch(e.target.value);
  };
  const [starListe, setStarListe] = useState(starTab);
  const changecolor = (id) => {
    setStarListe(
      starListe.map((el) =>
        el.id === id
          ? { icon: el.icon, isColored: !el.isColored, id: el.id }
          : el
      )
    );
  };
  return (
    <div>
      <div className="d-flex-justify-content-around mt-3">
        <Form.Control
          type="text"
          placeholder="Normal text"
          className="col-md-7"
          onChange={handlSearch}
        />
        <div>
          {starListe.map((el) => (
            <span
              className={el.isColored ? "star-colored" : "star"}
              key={el.id}
              onClick={() => changecolor(el.id)}
            >
              {el.icon}
            </span>
          ))}
        </div>
      </div>

      <div className="row">
        {movieList.filter((movie) =>
          movie.title
            .toUpperCase()
            .includes(search.toUpperCase()))
            .filter(
              (movie) =>
                movie.rate >=
                starListe.filter((el) => el.isColored === true).length
            )

            .map((movie, index) => <MovieCard movie={movie} key={index} />)
        }
      </div>
    </div>
  );
}

export default MovieList;

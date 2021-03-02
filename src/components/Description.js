import React from "react";

const Description = ({ movieList, match }) => {
  return (
    <div>
      {movieList
        .filter((movie) => movie.title === match.params.title)
        .map((movie) => (
          <div>
            <iframe
              width="1173"
              height="660"
              src={movie.src}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h3>{movie.description}</h3>
          </div>
        ))}
    </div>
  );
};

export default Description;

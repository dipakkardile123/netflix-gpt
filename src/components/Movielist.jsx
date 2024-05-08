import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  if (!movies) {
    return <div>No movies available</div>;
  }

  return (
    <div className="p-1 ">
        <h1 className="text-3Xl ">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie, index) => (
            <Moviecard key={index} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;

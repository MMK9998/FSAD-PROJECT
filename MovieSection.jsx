import React from 'react';
import MovieCard from './MovieCard';

function MovieSection({ title, sectionClass, movies }) {
  return (
    <section className={sectionClass}>
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      <div className="movie-container">
        <div className="container">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSection;
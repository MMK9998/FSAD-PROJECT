import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img src={movie.imgSrc} alt={movie.altText} />
      <div 
        className="card-overlay"
        style={{ transform: isHovering ? 'translateY(0)' : 'translateY(100%)' }}
      >
        <h3>{movie.title}</h3>
        <div className="rating">{movie.rating}</div>
        <a href="#" className="book-now">{movie.actionText}</a>
      </div>
    </div>
  );
}

export default MovieCard;
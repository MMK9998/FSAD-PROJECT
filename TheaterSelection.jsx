import React from 'react';

function TheaterSelection() {
  const theaters = [
    {
      id: 1,
      name: 'IMAX Cineplex',
      address: '123 Main Street, Downtown',
      rating: '★★★★★ 4.8/10'
    },
    {
      id: 2,
      name: 'Cinemark Deluxe',
      address: '456 Park Avenue, Uptown',
      rating: '★★★★☆ 4.5/10'
    },
    {
      id: 3,
      name: 'AMC Premium',
      address: '789 Oak Drive, Westside',
      rating: '★★★★☆ 4.6/10'
    },
    {
      id: 4,
      name: 'Regal Cinema',
      address: '101 Pine Street, Eastside',
      rating: '★★★★☆ 4.2/10'
    }
  ];

  return (
    <section className="theater-selection">
      <div className="section-title">
        <h2>Find Theaters Near You</h2>
      </div>
      <div className="theaters">
        {theaters.map(theater => (
          <div className="theater" key={theater.id}>
            <h3>{theater.name}</h3>
            <p>{theater.address}</p>
            <div className="theater-rating">{theater.rating}</div>
            <button className="select-theater">View Showtimes</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TheaterSelection;

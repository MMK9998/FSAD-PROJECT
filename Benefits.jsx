import React from 'react';

function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: '🎫',
      title: 'Easy Booking',
      description: 'Book your tickets in just a few clicks. No more waiting in long queues.'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Special Offers',
      description: 'Enjoy exclusive discounts, promotions, and special offers on ticket bookings.'
    },
    {
      id: 3,
      icon: '🍿',
      title: 'Food Pre-orders',
      description: 'Pre-order snacks and beverages online and skip the concession stand lines.'
    },
    {
      id: 4,
      icon: '📱',
      title: 'Mobile Tickets',
      description: 'Get digital tickets directly to your phone. No printing required.'
    }
  ];

  return (
    <section className="benefits">
      <div className="section-title">
        <h2>Why Book With Us?</h2>
      </div>
      <div className="benefits-container">
        {benefits.map(benefit => (
          <div className="benefit" key={benefit.id}>
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
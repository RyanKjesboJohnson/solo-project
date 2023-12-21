import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Container } from '@mui/material';

function LandingPage() {
  const [heading, setHeading] = useState('All Dog Rescue');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Container>
      <h2>{heading}</h2>
      <div className="grid">

          <p>
          Nestled in the heart of Minnesota, 
          All Dog Rescue stands as a beacon of hope and compassion for our beloved furry friends in need. 
          This nonprofit organization is a sanctuary where wagging tails meet second chances, dedicated to rescuing, 
          rehabilitating, and rehoming dogs of all shapes, sizes, and backgrounds. With unwavering commitment, they provide a haven for the overlooked, 
          the abandoned, and the neglected, offering a safe space where each dog receives individualized care, nourishment, and, most importantly, 
          an abundance of love. Through tireless efforts and a network of devoted volunteers and supporters, 
          All Dog Rescue embodies the unwavering belief that every dog deserves a loving home and a chance to thrive, enriching the lives of both humans and canines throughout Minnesota and beyond.
          </p>

      </div>
    </Container>
  );
}

export default LandingPage;

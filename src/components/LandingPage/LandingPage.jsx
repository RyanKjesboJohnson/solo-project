import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Container, Typography } from '@mui/material';


function LandingPage() {
  const [heading, setHeading] = useState('All Dog Rescue');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const meetOurDogs = (event) => {
    history.push('/dogprofiles')
  }

  return (
    <Container fixed>
      <Typography variant='h2'>{heading}</Typography>
      <div className='container'>
        <img src='/images/milo_photo.jpeg' height={900}/>
        <button onClick={meetOurDogs}>Meet Our Dogs</button>
      </div>
    </Container>
  );
}

export default LandingPage;

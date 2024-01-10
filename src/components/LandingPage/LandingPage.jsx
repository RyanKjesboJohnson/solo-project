import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { Container, Typography } from "@mui/material";
import Swiper from "swiper/bundle";
import { register } from "swiper/element/bundle";

register();

//The landing page functions as the first page that guests and users see
//When a guest clicks meet our dogs button they are navigated to the dogprofiles page
function LandingPage() {
  // const [heading, setHeading] = useState("All Dog Rescue");
  const history = useHistory();
  const swiper = new Swiper('.swiper', {
    speed: 400,
    on: {
      init: function () {console.log('swiper initialized');}
    }
  })
  // const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener('swiperprogress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('swiperslidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);

  const onLogin = (event) => {
    history.push("/login");
  };

  const meetOurDogs = (event) => {
    history.push("/dogprofiles");
  };

  return (
    <Container fixed>
      <Typography variant="h2"></Typography>
      {/* <div className="container">
        <img src="/images/milo_photo.jpeg" height={900} />
        <button onClick={meetOurDogs}>Meet Our Dogs</button>
      </div> */}

      <swiper-container navigation="true" pagination="true" data-swiper-autoplay="4000">
        <swiper-slide>
          <div className="container">
            <img src="/images/milo_photo.jpeg" />
            <button onClick={meetOurDogs}>Meet Our Dogs</button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="container">
            <img src="/images/All_Dog_Logo.jpg" />
            <button onClick={meetOurDogs}>Meet Our Dogs</button>
          </div>
        </swiper-slide>
      </swiper-container>
    </Container>
  );
}

export default LandingPage;

import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { Container, Typography } from "@mui/material";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'

//The landing page functions as the first page that guests and users see
//When a guest clicks meet our dogs button they are navigated to the dogprofiles page
function LandingPage() {
  // const [heading, setHeading] = useState("All Dog Rescue");
  const swiperRef = useRef(null);
  const history = useHistory();
  
  //This onEffect is used for the Swiper carousel function on the landing screen
  //https://swiperjs.com/swiper-api#parameters
  useEffect(() => {
    // Register Swiper web component
    register();
    // Add event listener
    swiperRef.current.addEventListener('swiperslidechange', (e) => {
      console.log(e.detail);
    });
    // Object with parameters
    const params = {
      // or pass it in on
      modules: [Pagination],
      navigation: true,
      pagination: {clickable:true},
      autoplay: {delay:4000},
      slidesPerView: 1,
      centeredSlides: true,
      on: {
        init: function () {
          console.log("swiper loaded");
        },
      },
    };
    // Assign it to swiper element
    Object.assign(swiperRef.current, params);
    // initialize swiper
    swiperRef.current.initialize();
  }, []);


  const onLogin = (event) => {
    history.push("/login");
  };

  const meetOurDogs = (event) => {
    history.push("/dogprofiles");
  };

  return (
    <>
    <Container fixed>
      <swiper-container init="false" ref={swiperRef}>
        <swiper-slide>
            <img src="/images/milo_pic.png" />
            <button className="slide1Button" onClick={meetOurDogs}>Meet Our Dogs</button>
        </swiper-slide>
        <swiper-slide>
            <img src="/images/dog_nose.png" />
            <button className="slide2Button" onClick ={ () => {
              location.href="https://www.paypal.com/donate/?hosted_button_id=EAQUUJAADDPCA"}}
              >Donate Today</button>
        </swiper-slide>
        <swiper-slide>
            <img src="/images/zuzu_edited.png" />
            <button className="slide1Button">Foster with Us</button>
        </swiper-slide>
      </swiper-container>
    </Container>
    <div className="banner-container">
      <Typography variant="h3">Finding Life-Long Homes for Rescued Dogs</Typography>
    </div>
    </>
  );
}

export default LandingPage;

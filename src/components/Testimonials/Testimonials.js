import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            
        </>
    );
}

export default Testimonials;

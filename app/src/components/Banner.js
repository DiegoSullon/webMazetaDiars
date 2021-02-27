import React, { useState } from 'react';
import $ from 'jquery';
import '../css/Banner.css';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import img1 from '../img/gym2p.jpg';
import img2 from '../img/gym1p.jpg';
import img3 from '../img/gym3p.jpg';

function Banner() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="my__carousel_main">


            <Carousel activeIndex={index} onSelect={handleSelect} bsPrefix="carousel">
                <Carousel.Item interval={50000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={50000}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={50000}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner

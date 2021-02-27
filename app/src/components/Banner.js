import React from 'react'
import $ from 'jquery';

function Banner() {
    return (
        <div id="carouselHomeControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://assets.jumpseller.com/store/bootstrap/themes/178791/options/8406664/slider-demo.jpg?1552582584" alt="Bootstrap" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://assets.jumpseller.com/store/bootstrap/themes/178791/options/8406666/slider-demo-2.jpg?1552582584" alt="Bootstrap" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselHomeControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselHomeControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Banner

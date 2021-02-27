import React, { Component } from 'react';
import Banner from '../components/Banner';


class Menu extends Component {
    cerrarSesion = () => {
        window.location.href = './';
    }
    componentDidMount() {

    }
    render() {

        return (
            <>
               <Banner/>
                <div class="container">
                    {/* <!-- Products Section --> */}
                    <div class="row">
                        <div class="col-12">
                            <h2 class="page-header">Featured Products</h2>
                        </div>
                        {/* <!-- Featured Products --> */}
                        <div class="col-md-3 col-6 product-block">

                            <a href="/wacom-tablet"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/429444/resize/360/450?1614272621" alt="Wacom Bamboo Tablet" /></a>

                            <div class="caption">
                                <h3><a href="/wacom-tablet">Wacom Bamboo Tablet</a></h3>
                                <div class="price-mob">
                                    $100.000
                            </div>
                                <div class="clearfix"></div>
                                <p class="product-block-description d-none d-md-block">
                                    Just getting going with your art? Transitioning from paper to computer-based work? The Bamboo Splash is a great way to explore your interests, with...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Products Section --> */}
                    <div class="row">
                        <div class="col-12">
                            <h2 class="page-header">Latest Products</h2>
                        </div>
                        {/* <!-- Featured Products --> */}
                        <div class="col-md-3 col-6 product-block">
                            <a href="/camara-nikon-reflex-d7200-lente-18-140"><img class="img-fluid img-portfolio img-hover mb-3" src="https://cdnx.jumpseller.com/bootstrap/image/6221140/resize/360/450?1564681025" alt="Camara Nikon Reflex D7200 + Lente 18-140" /></a>
                            <div class="caption">
                                <h3><a href="/camara-nikon-reflex-d7200-lente-18-140">Camara Nikon Reflex D7200 + Lente 18-140</a></h3>
                                <div class="price-mob">
                                    $1.290.000
                            </div>
                                <div class="clearfix"></div>
                                <p class="product-block-description d-none d-md-block">
                                    There is no description available for this product. If you like, you can contact us to know more information about it.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Footer --> */}
                <div class="container">
                    <footer>
                        <div class="row">
                            <div class="col-12 text-center">
                                <p class="powerd-by">&copy; 2021 Bootstrap. All Rights Reserved. Powered by <a href='https://jumpseller.cl/?utm_medium=store&utm_source=bootstrap' title='Crear Tienda Online' target='_blank' rel='nofollow noopener'>Jumpseller</a>.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default Menu;
import React, { Component } from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';


class Home extends Component {
    cerrarSesion = () => {
        window.location.href = './';
    }
    componentDidMount() {

    }
    render() {

        return (
            <>
                <Banner />
                <div class="container">
                    {/* <!-- Products Section --> */}
                    <div class="row">
                        <div class="col-12">
                            <h2 class="page-header">Featured Products</h2>
                        </div>
                        {/* <!-- Featured Products --> */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                    {/* <!-- Products Section --> */}
                    <div class="row">
                        <div class="col-12">
                            <h2 class="page-header">Latest Products</h2>
                        </div>
                        {/* <!-- Featured Products --> */}
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>


                {/* <!-- Footer --> */}
                <div class="container">
                    <footer>
                        <div class="row">
                            <div class="col-12 text-center">
                                {/* <p class="powerd-by">&copy; 2021 Bootstrap. All Rights Reserved. Powered by <a href='https://jumpseller.cl/?utm_medium=store&utm_source=bootstrap' title='Crear Tienda Online' target='_blank' rel='nofollow noopener'>Jumpseller</a>.</p> */}
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default Home;
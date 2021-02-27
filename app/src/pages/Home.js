import React, { Component } from 'react';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';


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
                <div className="container">
                    {/* <!-- Products Section --> */}
                    <ProductGrid subtitle="Featured Products"/>

                    {/* <!-- Products Section --> */}
                    <ProductGrid subtitle="Latest Products"/>
                </div>


                {/* <!-- Footer --> */}
                <div className="container">
                    <footer>
                        <div className="row">
                            <div className="col-12 text-center">
                                {/* <p className="powerd-by">&copy; 2021 Bootstrap. All Rights Reserved. Powered by <a href='https://jumpseller.cl/?utm_medium=store&utm_source=bootstrap' title='Crear Tienda Online' target='_blank' rel='nofollow noopener'>Jumpseller</a>.</p> */}
                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }
}

export default Home;
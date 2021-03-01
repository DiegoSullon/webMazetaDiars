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
                    <ProductGrid cookies={this.props.cookies} subtitle="Featured Products" page="Home"/>

                    {/* <!-- Products Section --> */}
                    <ProductGrid cookies={this.props.cookies} subtitle="Latest Products" page="Home"/>
                </div>
            </>
        );
    }
}

export default Home;
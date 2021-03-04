import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import store from '../redux/store'
import { getAllProducts } from '../redux/actionCreators'
import '../css/General.css';
import '../css/Grid.css';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import SortBy from './SortBy';
function ProductGrid({ cookies, subtitle, page,products }) {

    useEffect(() => {
       store.dispatch(getAllProducts())
    }, []);
    return (
        <>
            <div className="container">
                {page === "Products" ?
                    <div className="row">
                        <div className="col-6">
                            <span><strong>{products && products.length} Producto(s)</strong></span>
                        </div>
                        <SortBy/>
                    </div>
                    :
                    <div></div>
                }

                <div className="row">
                    <div className="col-12">
                        <h2 className="page-header">{subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}</h2>
                    </div>
                    {
                        products &&
                        products.map(p => {
                            return <ProductCard key={p.id} image={p.image} title={p.name} price={p.price} description={p.description} />
                        })
                    }
                </div>

                {page === "Products" ?
                    <Pagination/>
                    :
                    <div></div>
                }


            </div>
        </>
    )
}

const mapStateToProps = state => ({
    products: state.productReducer.products
})

export default connect(mapStateToProps,{})(ProductGrid)
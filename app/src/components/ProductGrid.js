import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import store from '../redux/store'
import { getAllProducts } from '../redux/actionCreators'
import '../css/General.css';
import '../css/Grid.css';
import ProductCard from './ProductCard';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
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

                        <div className="col-6">
                            <form className="form-horizontal">
                                <div className="form-group row">
                                    <label className="col-md-4 control-label text-right pt-2">Sort by:</label>
                                    <div className="col-md-8">
                                        <select className="form-control" onChange={e => {
            
                                        }}>
                                            <option value="1">
                                                Position
                                        </option>
                                            <option value="2" >
                                                Name: A to Z
                                        </option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <div></div>
                }

                <div className="row">
                    <div className="col-12">
                        <h2 className="page-header">{subtitle}</h2>
                    </div>
                    {
                        products &&
                        products.map(p => {
                            return <ProductCard key={p.id} image={p.image} title={p.name} price={p.price} description={p.description} />
                        })
                    }
                </div>

                {page === "Products" ?
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="mr-2" aria-label="First group">
                            <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Second group">
                            <Button>5</Button> <Button>6</Button> <Button>7</Button>
                        </ButtonGroup>
                        <ButtonGroup aria-label="Third group">
                            <Button>8</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
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
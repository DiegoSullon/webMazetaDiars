import React from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'
import {sortProducts } from '../redux/actionCreators'
function SortBy({products}) {
    return (
        <div className="col-6">
            <form className="form-horizontal">
                <div className="form-group row">
                    <label className="col-md-4 control-label text-right pt-2">Sort by:</label>
                    <div className="col-md-8">
                        <select className="form-control" onChange={e => {
                            store.dispatch(sortProducts(products, e.target.value));
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
    )
}
const mapStateToProps = state => ({
    products: state.productReducer.products
})
export default connect(mapStateToProps,{})(SortBy)

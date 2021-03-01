import React, { Component } from 'react'
import ProductGrid from '../components/ProductGrid'

export default class Products extends Component {
    render() {
        return (
            <ProductGrid subtitle="Suplementos" cookies={this.props.cookies} page="Products"/>
        )
    }
}

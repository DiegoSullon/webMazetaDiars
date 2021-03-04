import React, { Component } from 'react'
import ProductGrid from '../components/ProductGrid'

export default class Products extends Component {
    componentWillMount(){
        if(this.props.match.params.label != "suplementos"){
            window.location.href='../Notfound'
        }
    }
    render() {
        return (
            <ProductGrid subtitle={this.props.match.params.label} cookies={this.props.cookies} page="Products"/>
        )
    }
}

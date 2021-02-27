import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
function ProductGrid({ subtitle }) {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/product`)
            .then(response => {
                setproducts(response.data);
            })
            .catch(e => {});
    }, []);
    return (
        <div className="row">
            <div className="col-12">
                <h2 className="page-header">{subtitle}</h2>
            </div>
            {
                products.map(p => {
                    return <ProductCard key={p.id} image={p.image} title={p.name} price={p.price} description={p.description} />

                })
            }
        </div>
    )
}

export default ProductGrid